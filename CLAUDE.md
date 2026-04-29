# Claude Project Rules

This file lives at the root of every Longnewton Web Design client repo. Claude Code reads it automatically. Do not edit without checking with Joe first.

---

## Project Context

This project is built from the latest CodeStitch starter kit.

The CodeStitch repo is cloned fresh for each new website because CodeStitch updates frequently. Do not assume previous project structure is identical.

Before making changes:
- Inspect the current repo structure
- Follow the existing CodeStitch patterns
- Do not rely on old assumptions

---

## Stack

- HTML
- LESS / CSS
- JavaScript
- Eleventy (11ty) with Nunjucks templating
- esbuild for JS bundling
- Decap CMS (blog only)
- Netlify hosting
- CodeStitch components

---

## Objective

- Fast builds
- Clean code
- Consistent structure
- Minimal manual work

---

## File Structure (Key Locations)

- `src/index.html` is the home page (not `src/content/pages/index.html`)
- `src/_data/client.js` is the single source of truth for client info
- `src/assets/less/root.less` holds global design tokens (colours, fonts)
- `src/_includes/sections/header.html` and `footer.html` are global includes
- `src/content/pages/` contains all non-home pages
- `src/assets/less/` contains page-specific LESS files
- `public/` is the build output. NEVER edit it. It gets overwritten on every build

---

## Non-Negotiable Rules

- Never edit anything in `public/`
- Do not rename CodeStitch IDs or classes (`cs-` prefix is required globally)
- Do not create new IDs/classes unless necessary
- Do not rebuild sections that can be adapted
- Do not change base structure
- Do not introduce new frameworks, libraries, or dependencies
- Do not hardcode colour values. Use CSS variables from `root.less`
- Do not overengineer
- Mobile first, always

---

## Build Process

1. Inspect existing code first
2. Find the closest existing component
3. Adapt it
4. Make minimal changes
5. Keep structure consistent with the rest of the repo
6. Build mobile first
7. Check responsiveness at 375px, 768px, and desktop

---

## Page Front Matter Requirement

Every page in `src/content/pages/` must have front matter in this format:

```
---
description: "Meta description, 1-2 sentences with service + location"
eleventyComputed:
  title: "[Service] in [Town] | [Business Name]"
  permalink: "/page-slug/"
---
```

H1 on every page should match or closely reflect the title tag.

---

## Approval Rule

Stop and ask Joe before:
- Creating new IDs/classes
- Changing base structure
- Rewriting working sections
- Introducing components not from the blueprint
- Major layout changes
- Adding any new dependency

---

## Debugging Rule

- Find the root cause first
- Make minimal changes only
- Do not rewrite working code to fix unrelated issues
- Confirm the fix works locally before pushing

---

## Nav Link Rule

When adding a nav link in `header.html`, mirror the change in `footer.html`. Always use trailing slashes in active state checks (`page.url == '/about/'` not `'/about'`).

---

## Principle

Speed and consistency over creativity.
Follow CodeStitch.
Mobile first.
Ask before changing structure.
