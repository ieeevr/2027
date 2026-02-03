# IEEE VR 2027 Site TODO

## Initial Content For 2027
- Confirm conference dates, location, and host city copy; update `index.html` and site metadata.
- Replace placeholder branding with 2027 logo, favicon, and Open Graph image.
- Restore or create section landing pages (Attend, Program, Contribute, Awards, Committees, Resources, Sponsors, Store, Past Conferences).
- Add calls for participation (papers, posters, workshops, tutorials, demos, 3DUI contest, XR gallery, doctoral consortium, etc.).
- Rebuild the sponsor/exhibitor section with current sponsor assets and tiers.
- Reintroduce registration, accommodation, and travel information when ready.

## Navigation And Draft Control
- Decide which sections should be visible and set `show: true` in `navigation.main` entries in `_config.yml`.
- Remove `draft: true` and `published: false` from pages that are ready to go live.
- Add external links to `navigation.main` with `external: true` when needed.

## Structure And Maintainability
- Replace large blocks of raw HTML with Markdown + Liquid includes for reusable sections.
- Move repeated content (dates, venue, contact emails, deadlines) into a data file or `_config.yml` to avoid duplication.
- Convert schedule/program tables into structured data (CSV/JSON/YAML) rendered by includes.
- Introduce collections for recurring content (keynotes, workshops, tutorials, demos, awards).
- Remove unused assets, CSS, and JS; verify references after pruning.

## UX And QA
- Verify accessibility (contrast, headings, alt text, keyboard navigation).
- Review responsive layouts for the simplified nav and draft pages.
- Add analytics and verification tags once new accounts are created.
