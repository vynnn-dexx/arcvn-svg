# ARCVN.DEV

Monochrome developer portfolio + separated tools and scraper pages.

## Structure
- `/` portfolio homepage
- `/tools.html` reads `data/tools.json`
- `/scraper.html` reads `data/scraper.json`
- `/tools/<feature>.html` individual tools
- `/scrape/<feature>.html` individual scraper workspaces
- `assets/js/scrapers/` separate scraper source snippets

## Run locally
Because the dashboards fetch JSON, serve the folder over HTTP instead of opening `index.html` with `file://`.
Example:
```bash
python -m http.server 8000
```
Then open `http://localhost:8000`.

## Important
This is a front-end starter. Browser-side scraping of remote websites is subject to CORS. For remote scraping/downloads, connect a backend you control and follow site terms, robots rules, and access permissions. Downloader page validates a URL but does not pretend to download from every platform. Replace the background video at `assets/video/background.mp4` and update the profile/contact/skills with real details.
