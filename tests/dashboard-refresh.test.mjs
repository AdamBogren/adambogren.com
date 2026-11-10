import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import ts from "typescript";

test("validates and allowlists snapshots; rejects malformed source data", async () => {
  const source = await readFile(new URL("../app/dashboard-snapshot.ts", import.meta.url), "utf8");
  const js = ts.transpileModule(source, {compilerOptions: {module: ts.ModuleKind.ESNext}}).outputText;
  const {readDashboardSnapshot} = await import(`data:text/javascript;base64,${Buffer.from(js).toString("base64")}`);
  const data = {
    updatedAt: new Date().toISOString(),
    metrics: ["Roles assessed", "Qualified / advanced", "Intentionally skipped", "Closed / removed"].map(label => ({label, value: "1"})),
    rates: ["Application rate", "Qualified lead rate", "Decision coverage"].map(label => ({label, value: "25%"})),
    privateNotes: "must not be forwarded",
  };
  const original = globalThis.fetch;
  try {
    globalThis.fetch = async (_url, options) => {
      assert.equal(options.cache, "no-store");
      return Response.json(data);
    };
    assert.equal((await readDashboardSnapshot()).privateNotes, undefined);
    data.rates[0].value = "101%";
    await assert.rejects(readDashboardSnapshot, /Invalid/);
    globalThis.fetch = async () => new Response("unavailable", {status: 503});
    await assert.rejects(readDashboardSnapshot, /unavailable/);
  } finally { globalThis.fetch = original; }
});

test("page and JSON endpoint share a live, uncached source", async () => {
  const read = p => readFile(new URL(`../${p}`, import.meta.url), "utf8");
  const [page, route, loader] = await Promise.all([read("app/page.tsx"), read("app/career-dashboard.json/route.ts"), read("app/dashboard-snapshot.ts")]);
  assert.match(page, /readDashboardSnapshot/);
  assert.match(route, /readDashboardSnapshot/);
  assert.match(route, /Cache-Control.*no-store/);
  assert.match(loader, /cache: "no-store"/);
  assert.match(page, /Refresh overdue/);
  assert.match(page, /No historical figures substituted/);
  assert.doesNotMatch(page, /updatedAt: "2026-/);
});
