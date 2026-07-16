# adambogren.com

Adam Bogren's public career portfolio and the front door to Adam's AI Lab.

The site preserves Adam's Talent Acquisition case studies, outcomes, capabilities, and career timeline while documenting practical work with AI, automation, data, and process design.

## Site structure

- Hero: the bridge between Talent Acquisition and practical operating systems
- Selected outcomes: supportable career evidence
- Systems perspective: how Adam approaches operating problems
- Adam's AI Lab: current projects with honest status labels
- Career evidence: Talent Acquisition case studies
- Capabilities and experience
- About and contact

## Local development

Requires Node.js 22.13 or newer.

```bash
npm install
npm run dev
npm run build
npm test
npm run lint
```

The site is built with React, Next.js-compatible app routes, vinext, and Vite. It has no database, user accounts, forms, or runtime secrets.

## Content updates

- Career facts, outcomes, projects, and status labels: `data/profile.ts`
- Page structure and copy: `app/page.tsx`
- Visual system and responsive behavior: `app/globals.css`
- Search/social metadata: `app/layout.tsx`
- Sitemap and crawler policy: `app/sitemap.ts` and `app/robots.ts`

Never publish credentials, job-search records, family information, home-network details, addresses, security routines, camera/event information, or private repository links.

## Deployment

The production project is declared in `.openai/hosting.json` and hosted through OpenAI Sites.

1. Run the build, test, lint, and responsive visual checks.
2. Commit the exact tested source state.
3. Push that commit to the Sites source repository.
4. Save a Sites version using that commit SHA.
5. Deploy the saved version. Owner-only versions may be deployed privately; public access requires explicit approval.
6. Verify the live URL, HTTPS, mobile layout, links, metadata, and console.

See [DEPLOYMENT.md](DEPLOYMENT.md) for the production and custom-domain runbook.
