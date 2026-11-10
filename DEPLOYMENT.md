# Deployment and domain runbook

## Production configuration

- Hosting: OpenAI Sites
- Project ID: read from `.openai/hosting.json` (treat as opaque)
- Production branch: `main`
- Build: `vinext build`
- Runtime secrets: none
- Canonical hostname: `adambogren.com`
- Redirect hostname: `www.adambogren.com`
- Registrar and initial DNS provider: Spaceship

## Release checklist

## Automatic dashboard data

The Pi refreshes the public, aggregate-only GitHub snapshot nightly. Both the
homepage and `/career-dashboard.json` fetch that source at runtime with no-store
caching and a 10-second timeout. No Sites deployment is needed for metric updates.
The JSON endpoint returns 503 when the source fails; the page shows unavailable
values rather than substituting old totals. Snapshots older than 36 hours show an
overdue warning. The tracked public/career-dashboard.json is the GitHub source snapshot. The build
excludes that file from deployed static assets so it cannot shadow the runtime endpoint. Qualitative source changes still require a Sites deployment.

## Release checks

- Production build succeeds.
- Source tests and lint pass.
- Desktop and 390px phone views have no horizontal overflow.
- Mobile navigation and hero actions are usable by touch.
- All local navigation and external links work.
- No credentials or sensitive job-search, family, network, or security data are present.
- Metadata, sitemap, robots, favicon, and social image are present.
- The tested commit is pushed before a version is saved.
- The saved version is deployed and the deployment reaches `succeeded`.

## Custom domain

1. Add `adambogren.com` and `www.adambogren.com` to the Sites project.
2. Copy the exact DNS records returned by Sites into Spaceship Advanced DNS.
3. Preserve all unrelated records, especially MX and TXT records.
4. Use `adambogren.com` as canonical and redirect `www` when supported.
5. Wait for DNS and certificate validation, then verify both HTTPS addresses.

DNS values are intentionally not hard-coded here. The Sites domain response is the authority for current A, CNAME, and validation records.

## Rollback

Redeploy the previously verified Sites version. Do not alter DNS for an application-only rollback.

## How Adam updates the site later

Ask Codex to update the existing adambogren.com project. Codex should edit the relevant content, run the same checks, show representative desktop/mobile previews when the change is visual, then save and deploy a new version. Adam should only need to approve public or otherwise externally visible changes when required.
