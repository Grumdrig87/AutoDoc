jQuery(document).ready(function($) {
  
  // burger
  $('[data-burger]').click(function() {
      $('html').toggleClass("open");
      $(this).toggleClass("open");
      $('[data-nav]').toggleClass("open");
      $('body').toggleClass('open');
  });
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  // select
function select (data,set,dropclass) {
  if (jQuery(data).length > 0) {
    jQuery(data).select2({
      minimumResultsForSearch: Infinity,
      width: set,
      dropdownAutoWidth: true,
      dropdownCssClass: dropclass
    });
  }
}
select ('[data-brand]','100%',"main-drop");
select ('[data-model]','100%',"main-drop");
select ('[data-engine]','100%',"main-drop");

$('.main__search-item select').on("change", function(e) { 
  $(this).parent().addClass('selected');
});

})