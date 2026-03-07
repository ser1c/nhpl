# Plan: Infrastructure

## Goal
Set up deployment, CI/CD, and tooling for the project.

## Current Status
Git repo live at https://github.com/ser1c/nhpl.git. Deployment not yet configured.

## Priorities (ordered)

1. GitHub Actions workflow for auto-deploy to GitHub Pages -- not started
2. Custom domain setup (nepalhealthpolicylab.org) -- not started
3. SEO basics (sitemap, Open Graph meta tags) -- not started

## Decisions & Reasoning

- GitHub Pages hosting (free, simple, sufficient for static site)
- GitHub Actions for CI/CD (auto-deploy on push to main)
- MIT license

## Open Questions

- Is the domain nepalhealthpolicylab.org already registered and DNS accessible?
- GitHub Pages custom domain requires DNS CNAME record -- who manages DNS?
