# IEEE VR 2027 Website

This repository contains the IEEE VR 2027 conference website (Melbourne, Australia) built on Jekyll and the Minimal Mistakes theme.

## Local Development

Prerequisites:
- Ruby (3.x recommended)
- Bundler (`gem install bundler`)

Install dependencies:

```bash
bundle install
```

Run the site locally:

```bash
bundle exec jekyll serve --livereload --config _config.yml,_config.local.yml
```

The site will be available at `http://localhost:4000`.

## Content Workflow

- Most pages live in top-level folders (e.g., `attend/`, `program/`, `contribute/`).
- Pages are written in Markdown with YAML front matter.
- Draft content should use `published: false` until ready to launch.
- Navigation is driven by `navigation.main` in `_config.yml` and hides unpublished pages automatically.

## Contribution Guidelines

Best practices:
- Prefer Markdown and Liquid includes over large blocks of raw HTML.
- Keep shared values (dates, venue, deadlines, contact emails) in `_config.yml` or data files to avoid duplication.
- Avoid hard-coding year-specific assets and links. Use clear, year-agnostic names.
- Optimize images before adding them and remove any unused assets.
- Keep commits focused (one logical change per commit) with clear messages.

Suggested workflow:
1. Create a branch for your change.
2. Update content and verify locally.
3. Keep pages unpublished (`published: false`) until approved.
4. Submit a pull request with a short summary and screenshots when relevant.

## Structure Notes

- `index.html`: homepage content
- `_layouts/ieeevr-default.html`: primary layout and navigation
- `assets/`: images, CSS, and other assets
