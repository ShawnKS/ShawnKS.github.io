# Xiaozhuang Song's Homepage

Personal academic website built with Jekyll and al-folio.

## Content

- Introduction: `_pages/about.md`
- Teaching and academic service: `_includes/homepage/community.html` and `_data/cv.yml`
- Publications: `_bibliography/papers.bib`
- Published CV PDFs: `assets/pdf/`
- Site configuration: `_config.yml`

## Build

With Ruby and Bundler installed:

```sh
bundle install
bundle exec jekyll serve
```

For a production build:

```sh
JEKYLL_ENV=production bundle exec jekyll build
```

GitHub Pages deployment is configured in `.github/workflows/deploy.yml`. See `LICENSE` for the theme license.
