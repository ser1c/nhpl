# Plan: Infrastructure

## Goal
Set up deployment, CI/CD, and tooling for the project.

## Current Status
Fully deployed. Site live at https://nepalhealthpolicylab.org.

## Priorities (ordered)

1. GitHub Actions workflow for auto-deploy to GitHub Pages -- done
2. Custom domain setup (nepalhealthpolicylab.org via Cloudflare DNS) -- done
3. Google Fonts (Inter + Noto Sans Devanagari) with preconnect -- done
4. Skip-to-content accessibility link -- done
5. SEO basics (sitemap, Open Graph meta tags) -- not started
6. Branded favicon -- not started

## Decisions & Reasoning

- GitHub Pages hosting (free, simple, sufficient for static site)
- GitHub Actions for CI/CD (auto-deploy on push to main)
- MIT license
- Cloudflare DNS with gray-cloud (DNS only) A records to GitHub Pages IPs
- Substack for newsletter distribution (decision pending account creation)
