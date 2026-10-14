(() => {
  const search = document.querySelector('#publication-search');
  if (!search) return;
  const publications = document.querySelector('.publications');
  const entries = [...publications.querySelectorAll('.publication-entry')].map(entry => ({
    item: entry.closest('li'),
    status: entry.dataset.status,
    text: entry.textContent.toLocaleLowerCase()
  }));
  const groups = [...publications.querySelectorAll('h2.bibliography')].map(heading => ({
    heading,
    list: heading.nextElementSibling
  }));
  const buttons = [...document.querySelectorAll('[data-publication-filter]')];
  const empty = document.querySelector('#publication-filter-empty');
  let status = 'all';
  const filter = () => {
    const query = search.value.trim().toLocaleLowerCase();
    let shown = 0;
    for (const entry of entries) {
      const matches = (status === 'all' || entry.status === status) && entry.text.includes(query);
      entry.item.hidden = !matches;
      if (matches) shown++;
    }
    groups.forEach(({heading, list}) => {
      heading.hidden = !list.querySelector('li:not([hidden])');
    });
    empty.hidden = shown !== 0;
  };
  search.addEventListener('input', filter);
  buttons.forEach(button => button.addEventListener('click', () => {
    status = button.dataset.publicationFilter;
    buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button)));
    filter();
  }));
  filter();
})();
