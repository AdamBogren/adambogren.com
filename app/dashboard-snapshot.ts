export const dashboardSnapshotUrl =
  "https://raw.githubusercontent.com/AdamBogren/adambogren.com/main/public/career-dashboard.json";

export async function readDashboardSnapshot() {
  const response = await fetch(dashboardSnapshotUrl, {
    headers: { Accept: "application/json" },
    cache: "no-store",
    signal: AbortSignal.timeout(10000),
  });
  if (!response.ok) throw new Error("Dashboard source unavailable");
  const data = await response.json();
  const metricLabels = ["Roles assessed", "Qualified / advanced", "Intentionally skipped", "Closed / removed"];
  const rateLabels = ["Application rate", "Qualified lead rate", "Decision coverage"];
  if (!Number.isFinite(Date.parse(data.updatedAt)) ||
      Date.parse(data.updatedAt) > Date.now() + 300000 ||
      !Array.isArray(data.metrics) || data.metrics.length !== 4 ||
      !Array.isArray(data.rates) || data.rates.length !== 3 ||
      data.metrics.some((m: {label: string; value: string}, i: number) => m.label !== metricLabels[i] || !/^\d+$/.test(m.value)) ||
      data.rates.some((r: {label: string; value: string}, i: number) => r.label !== rateLabels[i] || !/^\d+(\.\d+)?%$/.test(r.value) || Number(r.value.slice(0, -1)) > 100)) {
    throw new Error("Invalid dashboard snapshot");
  }
  // Explicit allowlist: never forward additional source fields to visitors.
  return {
    updatedAt: data.updatedAt as string,
    metrics: data.metrics.map((m: {value: string; label: string; tone: string}, i: number) => ({value: String(m.value), label: metricLabels[i], tone: ["navy", "blue", "orange", "crimson"][i]})),
    rates: data.rates.map((r: {value: string; label: string}, i: number) => ({value: String(r.value), label: rateLabels[i]})),
  };
}
