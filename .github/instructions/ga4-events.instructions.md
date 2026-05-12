---
applyTo: "src/**/*.ts,src/**/*.html"
---

# GA4 / GTM Event Tracking — portfolioNearshoreWesIA

## Mandatory: always audit events before any CTA / interactive change

When adding, removing, or modifying any interactive element (button, link, carousel, form, language toggle),
you MUST verify the full event inventory below and update it if the change affects coverage.

---

## Current Event Inventory

### CTA clicks — fired via global `data-gtm-event` handler in `app.ts`

| `data-gtm-event` value    | Element / location                        |
|---------------------------|-------------------------------------------|
| `cv_download_docx`        | hero — Download CV (Word) button          |
| `hero_schedule_interview` | hero — Schedule an Interview email link   |
| `footer_phone`            | footer — phone link                       |
| `footer_email`            | footer — email link                       |
| `footer_whatsapp`         | footer — WhatsApp link                    |
| `footer_linkedin`         | footer — LinkedIn link                    |
| `footer_github`           | footer — GitHub link                      |
| `contact_phone`           | contact section — phone                   |
| `contact_whatsapp`        | contact section — WhatsApp                |
| `contact_email`           | contact section — email                   |
| `contact_linkedin`        | contact section — LinkedIn                |
| `contact_github`          | contact section — GitHub                  |
| `about_personal_link`     | about section — personal link             |

### Programmatic `gtag('event', ...)` calls

| Event name          | File                              | Parameters                                              |
|---------------------|-----------------------------------|---------------------------------------------------------|
| `scroll_depth`      | `app.ts`                          | `event_label: "25%"…"100%"`, `value: milestone`        |
| `nav_click`         | `header/header.ts`                | `event_label: section`                                  |
| `project_navigate`  | `about/about.ts` — next/previous  | `event_label: "next"/"previous"`, `value: index`        |
| `project_like`      | `about/about.ts` — likeProject()  | `event_label: project title`                            |
| `generate_lead`     | `contact/contact.ts`              | `event_category: "contact"`                             |
| `generate_lead`     | `nearshore-proposal/...ts`        | `event_category: "nearshore_proposal"`, `event_label`   |
| `proposal_print`    | `nearshore-proposal/...ts`        | `event_category: "nearshore_proposal"`                  |
| `ab_assignment`     | `services/ab-test.service.ts`     | `event_label: experiment + variant`                     |
| `location_maps_click` | `location/location.ts`          | `event_category: "location"`                            |

---

## Rules

1. **Every clickable CTA must have `data-gtm-event`** — no exceptions.
   - Naming convention: `{section}_{action}` (snake_case, lowercase)
   - Examples: `hero_schedule_interview`, `footer_whatsapp`, `contact_linkedin`

2. **Programmatic events** use `gtag('event', name, { event_category, event_label, value })`.
   - Always guard: `if (typeof gtag !== 'undefined') { ... }`

3. **When you add a new interactive element**, immediately:
   - Add `data-gtm-event="section_action"` to the element
   - Add the entry to the inventory table above
   - Confirm GTM has a matching trigger or that the global click handler in `app.ts` covers it

4. **Never remove a `data-gtm-event`** attribute without noting it here and confirming the event
   is either deprecated or replaced.

5. **Swipe vs click distinction**: `project_navigate` fires for both button clicks and touch swipes.
   If segmentation is needed, pass `event_label: 'swipe_next'` / `'swipe_previous'` from `onTouchEnd()`.

---

## Known gaps (to implement if needed)

| Interaction                        | Suggested event name    |
|------------------------------------|-------------------------|
| Language toggle (PT ↔ EN)          | `language_switch`       |
| Proof strip item impression/rotate | `proof_strip_view`      |
| Dot navigation click (projects)    | `project_dot_click`     |
| Swipe (distinct from button click) | `project_swipe`         |
