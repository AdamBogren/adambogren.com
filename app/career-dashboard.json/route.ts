import { readDashboardSnapshot } from "../dashboard-snapshot";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    return Response.json(await readDashboardSnapshot(), {
      headers: { "Cache-Control": "no-store" },
    });
  } catch {
    return Response.json({ error: "Dashboard temporarily unavailable" }, {
      status: 503, headers: { "Cache-Control": "no-store" },
    });
  }
}
