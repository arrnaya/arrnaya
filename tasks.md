# TASKS — Daily Operations & Checklist
## Arrnaya.com Publishing System

---

## Daily Routine (When Triggered)

### Pre-Generation (Before Writing)
- [ ] Read `memory.md` — check last published post, current streak, next pillar
- [ ] Read `soul.md` — reaffirm voice, authority, and design philosophy
- [ ] Review last 3 published posts for voice drift detection
- [ ] Check **Topic Coverage Map** in memory.md — confirm topic is not duplicate
- [ ] Reference **Blog Aesthetic Pattern** — determine light vs dark theme for next post

### Content Generation
- [ ] Select topic from Available — High Priority list (or user-provided)
- [ ] Generate blog post with:
  - [ ] Enhanced SEO metadata (title, description, keywords, OG tags)
  - [ ] JSON-LD schema (BlogPosting + FAQPage)
  - [ ] Semantic HTML structure (H1 → H2 → H3 hierarchy)
  - [ ] TOC with anchor links
  - [ ] Data tables, code blocks, formulas as needed
  - [ ] Pull quotes and callout boxes
  - [ ] FAQ section with 4–8 questions
  - [ ] Related reading links to internal posts
  - [ ] Post footer with date and disclaimer

### Post-Generation (Before Publishing)
- [ ] Verify slug is URL-safe and consistent
- [ ] Create `/app/blog/[slug]/page.tsx` following established structure
- [ ] Update `/app/blog/page.tsx` — add new post to `posts` array
- [ ] Update `/app/sitemap.ts` — add new URL with `lastModified: today`
- [ ] Update `/lib/schema.ts` if new topic area requires `knowsAbout` additions
- [ ] Run `npm run build` and verify no errors
- [ ] Update `memory.md` — add to Published Posts Log, update Topic Coverage Map
- [ ] Update `tasks.md` — mark completion, note any blockers

### Weekly (Every 7 Days)
- [ ] Review all internal links are valid (no 404s)
- [ ] Check sitemap is complete against published posts
- [ ] Verify JSON-LD schemas render correctly in Google Rich Results Test
- [ ] Update Topic Coverage Map — move covered topics to "Already Covered"

### Monthly (First of Month)
- [ ] Audit `memory.md` for outdated entries — archive with [ARCHIVED] tag
- [ ] Review **Available — High Priority** list — add emerging topics
- [ ] Assess design pattern rotation — ensure visual variety maintained
- [ ] Check build output and performance metrics

---

## Active Task Queue

| Priority | Task | Status | Due |
|----------|------|--------|-----|
| P0 | Publish The Learning Loop Moat: AI Agents in Finance and Treasury | ✅ Done | 2026-06-16 |
| P1 | Update memory.md with new post + topic map | ✅ Done | 2026-06-16 |
| P2 | Build verification (npm run build) | ✅ Done | 2026-06-16 |
| P3 | Next blog topic selection | ⏳ Pending | 2026-06-17 |

---

*Version: 1.1 | Updated: 2026-05-05*
