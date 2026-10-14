---
layout: page
permalink: /publications/
title: Publications
description: Publications and preprints on scientific generation, structured learning, and LLM reasoning.
nav: true
nav_order: 1
---

<div class="publication-tools" aria-label="Filter publications">
  <input type="search" id="publication-search" aria-label="Search publications" placeholder="Search title, author, or venue…">
  <div class="publication-status-buttons" aria-label="Publication status">
    <button type="button" data-publication-filter="all" aria-pressed="true">All</button>
    <button type="button" data-publication-filter="published" aria-pressed="false">Published</button>
    <button type="button" data-publication-filter="preprint" aria-pressed="false">Preprints</button>
  </div>
</div>
<div class="publications">

{% bibliography -f {{ site.scholar.bibliography }} %}

</div>
<p class="publication-filter-empty" id="publication-filter-empty" hidden>No publications match this search.</p>
<script src="{{ '/assets/js/publication-filters.js' | relative_url | bust_file_cache }}" defer></script>
