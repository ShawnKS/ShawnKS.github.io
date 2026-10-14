$(document).ready(function() {
  $('a').removeClass('waves-effect waves-light');

  $('table').each(function() {
    $(this).toggleClass('table-dark', document.documentElement.getAttribute('data-theme') === 'dark');
    if (!$(this).closest('.news, .card, code').length) {
      $(this).addClass('table-hover');
      if ($.fn.bootstrapTable) $(this).bootstrapTable();
    }
  });

  // bootstrap-toc
  if($('#toc-sidebar').length){
    var navSelector = "#toc-sidebar";
    var $myNav = $(navSelector);
    Toc.init($myNav);
    $("body").scrollspy({
      target: navSelector,
    });
  }

});

