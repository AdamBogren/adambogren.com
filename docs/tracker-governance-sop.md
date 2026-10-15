# Job Application Tracker Maintenance SOP

Use this standard operating procedure when maintaining the connected Google Sheets workbook titled “Job Applications and Status.” It defines the workflow, data-quality rules, formatting standards, and verification checks required to keep the tracker accurate and consistent.

## Workbook Scope

* 2026 Job Application Tracker
* Verified Leads
* Reviewed
* 2026 Pivot
* 2026 Review Dashboard

## General Rules

1. Inspect the live workbook structure, headers, formulas, formatting, validation rules, filters, and nearby exemplar rows before editing.
2. Preserve existing formulas, dropdowns, hyperlinks, formatting, filter criteria, and table structure unless a correction is specifically needed.
3. Never create duplicate job records. Check the company, job title, application URL, and job ID across the relevant tabs before adding anything.
4. Use the employer’s official job posting whenever possible. Prefer the official employer site or official ATS over LinkedIn, aggregators, or reposting sites.
5. Do not invent missing job details. Use “Unknown,” “Not stated,” or an equivalent established workbook value when information cannot be verified.
6. Keep every populated row inside the applicable table or filter range.
7. Verify all changes after writing them.

## Multiple Applications to the Same Company

Use these rules when a strong match appears at a company where the user has already applied.
* Allow multiple applications to the same company when each role is a genuine fit and materially different in scope, function, level, or business unit.
* For similar roles, generally space applications by 30–45 days unless a recruiter encourages an earlier application.
* Evaluate concentration primarily using recent applications, normally those submitted within the previous 6–12 months. Give older, closed applications less weight.
* Do not count withdrawn, canceled, duplicate, or clearly expired applications the same as active or pending applications.
* When feedback is pending, favor waiting unless the new role is distinctly stronger or materially different.
* If the new role is a genuine match, add it to the tracker and document prior applications as a risk or gap, including their titles, dates, and current statuses when known.
* Treat the third active or recent application as a caution and review point. Explicitly assess role differentiation, timing, and pending statuses before applying.
* Treat a fourth or later active or recent application as a high-risk exception. Strongly flag it and require a compelling, documented reason before applying.
* Do not treat multiple applications to one company as an automatic rejection when the new role is a strong fit; treat concentration as a documented decision risk.
* For example, with two applications pending at a company, treat a third as a caution point. Proceed only if the role is materially different, distinctly stronger, or appropriately spaced; document the pending applications in Risks / Gaps. A fourth or later recent application is a high-risk exception.

## Application Workflow

Follow this workflow when the user confirms an application or when a Verified Leads row is marked “Move to Application Tracker.”
8. Add the job to 2026 Job Application Tracker.
9. Use the application date the user provides. If the user does not provide one, use the current date in America/Chicago.
10. Include the official application URL and all available job details.
11. Match the formatting, formulas, dropdowns, and validation of the surrounding application-tracker rows.
12. Ensure the new row is included in the main tracker’s filters and any applicable table range.
13. Add or retain the job on Reviewed as the historical review record.
14. Update its Reviewed status to indicate that it was moved to the application tracker, using the workbook’s approved status wording.
15. Remove the job from Verified Leads.
16. The same job must not remain on both Verified Leads and 2026 Job Application Tracker.
17. A job may appear on both 2026 Job Application Tracker and Reviewed because Reviewed is the historical archive.
18. Check whether the Pivot or Review Dashboard updates automatically. Preserve their formulas and source ranges.

## 2026 Job Application Tracker Column Standards


### Column G  Link to Job Description

* Display the complete job-description URL in the cell. Do not replace it with a shortened label, company name, “Apply,” or a smart chip.
* Keep the complete visible URL clickable.
* Prefer the official employer or ATS posting.
* Preserve the visible ATS hostname or domain so the system, such as Ashby, Greenhouse, Lever, or Workday, is identifiable at a glance.
* Remove unnecessary tracking parameters only when doing so does not break the posting URL or obscure the specific job.

## Verified Leads Rules

19. Verified Leads contains active leads that have not yet completed the review or application workflow.
20. Every lead should use an official, verified job posting whenever available.
21. If a lead is moved to the application tracker, remove it from Verified Leads after confirming the application and Reviewed records exist.
22. Do not leave stale copies or duplicates.
23. Preserve the tab’s established column order, validation, status choices, and formatting.

## Reviewed Tab Rules

24. Treat the first approximately 70 entries as the visual and structural standard.
25. Keep populated rows compact and single-line: Arial, 10-point font, vertically centered, clipped rather than wrapped, and a consistent compact row height.
26. Apply this formatting consistently across the entire populated range.
27. Keep the filter range extended through every populated Reviewed row.
28. Preserve job details, formulas, links, review decisions, and status values while cleaning formatting.
29. Do not remove Reviewed records merely because the job was applied to or skipped; Reviewed is the historical archive.
30. Avoid changing the meaning of a review decision during cleanup.

## Reviewed Column Standards


### Column A  Archived Date

* Store dates as real spreadsheet date values.
* Display dates as m/d/yyyy.
* Use proper date validation, not a fixed list of old dates.
* Do not allow stale validation rules to flag newer legitimate dates as invalid.

### Column B  Date Found

* Store dates as real spreadsheet date values.
* Display dates as m/d/yyyy.
* Use proper date validation, not a fixed list of previously used dates.
* Do not display spreadsheet serial numbers.

### Column C  Company

* Display the company name.
* Make every populated company name a clickable hyperlink.
* Link to the employer’s official careers page, official job board, or official company page.
* Do not use an unrelated or incorrect destination.
* Reuse a verified company link already present elsewhere in the workbook when appropriate.

### Column D  Date Posted

* Store and display verified dates as m/d/yyyy.
* If the posting date cannot be verified, use the workbook’s established unknown-value convention.

### Column E  Days Open

* Preserve or extend the established formula.
* Display the result as a whole number.
* Do not replace formulas with manually calculated values.

### Column I  Career Lane

* Only use People Leader, Senior IC, or Either / Adjacent.
* Preserve the dropdown validation.
* Keep the formatting consistent throughout the populated range.
* Leave the cell blank when there is not enough evidence to categorize the position.

### Column J  Official Application Link

* Every populated URL must be a functional clickable hyperlink.
* Use the official employer or ATS posting whenever available.
* Preserve the visible URL unless the workbook’s established style uses another label.
* Do not fabricate a URL for genuinely missing or removed postings.
* Avoid tracking-heavy aggregator URLs when a clean official URL is available.

## Status and Dropdown Rules

31. Use only values permitted by the applicable dropdown or established workbook convention.
32. Do not create nearly identical status variants.
33. If the workbook contains conflicting wording such as “Move to Application Tracker” and “Moved to Application Tracker,” determine which wording represents an action still waiting to happen and which represents a completed historical action.
34. Update the validation list if necessary so legitimate completed statuses are not marked invalid.
35. Preserve the meaning of existing statuses during formatting cleanup.

## Hyperlink Audit Rules

36. Audit both the company-name link and official-application link.
37. A blue-looking cell is not sufficient; verify that the cell has a real hyperlink destination.
38. Repair missing links, plain-text URLs, incorrect destinations, links copied from another row, and links pointing to unrelated companies or postings.
39. Leave genuinely blank link cells blank rather than inventing information.

## Formatting and Data Quality Rules

40. Do not overwrite user data while copying formatting.
41. Do not copy a hyperlink format from one row in a way that changes other rows to the same destination.
42. Apply formatting fields selectively when links or formulas are present.
43. Normalize visible spreadsheet serial numbers into properly formatted dates.
44. Remove obsolete validation rules that cause valid entries to show warning markers.
45. Do not alter unrelated tabs or columns.
46. Avoid broad workbook-wide restyling.
47. Preserve intentional filters and filter criteria.
48. Extend ranges only as far as necessary to cover populated records.

## Decision Governance and Weekly Audit

- Deduplicate using the canonical official posting URL and employer job ID, checked across the workflow tabs. Titles alone are never sufficient: similar titles can represent different requisitions, and different URLs can represent the same job.
- Discovery alone does not authorize adding a row to Verified Leads. Verify the official posting and eligibility first; hold unclear geography or conflicting evidence for human review.
- Preserve human review for ambiguous matches, concentration exceptions, conflicting statuses, and other edge cases. Do not infer an application or decision from an automated discovery.
- Freeze decision-time metrics, including days open and evaluation inputs, when a review decision is made. Keep ongoing operational calculations separate so historical decision evidence does not drift.
- Audit the tracker weekly against this SOP, including duplicates, official links, statuses, workflow-tab reconciliation, filter coverage, formulas, and decision-time metrics.
- Record each correction and its cause. Update the applicable SOP rule or verification check to prevent the same error from recurring.

## Verification Checklist

- [ ] No duplicate job exists across active workflow tabs.
- [ ] Applied jobs are present in the application tracker.
- [ ] Applied jobs are removed from Verified Leads.
- [ ] Applied jobs remain recorded in Reviewed.
- [ ] New rows are inside table and filter ranges.
- [ ] Company names have correct hyperlinks.
- [ ] Populated application URLs are clickable and correct.
- [ ] Dates display as m/d/yyyy.
- [ ] No spreadsheet serial numbers are visible in date columns.
- [ ] No legitimate dates show invalid-value warnings.
- [ ] Career Lane values use only the approved choices.
- [ ] Formulas still work.
- [ ] Filters still work.
- [ ] The Reviewed tab remains compact and visually consistent.
- [ ] The Google-rendered spreadsheet is visually inspected after the changes.