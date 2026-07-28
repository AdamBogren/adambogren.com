import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const root = new URL("../", import.meta.url);

test("keeps the career foundation and adds the AI Lab positioning", async () => {
  const [page, profile, layout] = await Promise.all([
    readFile(new URL("app/page.tsx", root), "utf8"),
    readFile(new URL("data/profile.ts", root), "utf8"),
    readFile(new URL("app/layout.tsx", root), "utf8"),
  ]);

  assert.match(page, /Adam&apos;s AI Lab/);
  assert.match(page, /Career evidence/);
  assert.match(page, /Talent Acquisition is the proving ground/);
  assert.match(profile, /Career Operating System/);
  assert.match(profile, /Raspberry Pi AI Server/);
  assert.match(profile, /adambogren\.com/);
  assert.match(profile, /https:\/\/github\.com\/AdamBogren\/adambogren\.com/);
  assert.match(layout, /https:\/\/adambogren\.com/);
});

test("does not publish sensitive home-security implementation details", async () => {
  const page = await readFile(new URL("app/page.tsx", root), "utf8");
  const profile = await readFile(new URL("data/profile.ts", root), "utf8");
  const source = `${page}\n${profile}`;

  assert.doesNotMatch(source, /Ring event|camera feed|IP address|API key|access token/i);
  assert.match(source, /security details stay private/);
});

test("publishes only privacy-safe career dashboard aggregates", async () => {
  const snapshot = JSON.parse(
    await readFile(new URL("public/career-dashboard.json", root), "utf8"),
  );
  const source = JSON.stringify(snapshot);

  assert.deepEqual(
    snapshot.metrics.map(({ label }) => label),
    [
      "Roles assessed",
      "Qualified / advanced",
      "Intentionally skipped",
      "Closed / removed",
    ],
  );
  assert.deepEqual(
    snapshot.rates.map(({ label }) => label),
    ["Application rate", "Qualified lead rate", "Decision coverage"],
  );
  assert.doesNotMatch(
    source,
    /company|employer|job title|application link|salary|skip reason|notes/i,
  );
});
