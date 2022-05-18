jQuery(document).ready(function($) {
  if ($('[data-heart]').length > 0) {
    $('[data-heart]').on('click', function(){
      $(this).toggleClass('active');
    })
  }

  // upload
  
 
  // burger
  $('[data-burger]').click(function() {
      $('html').toggleClass("open");
      $(this).toggleClass("open");
      $('[data-nav]').toggleClass("open");
      $('body').toggleClass('open');
  });
  //miss click burger
  function closeBurger () {
    $(document).mouseup(function (e){ // событие клика по веб-документу
      var div = $("[data-blkscr]"); // тут указываем ID элемента
      if (div.is(e.target)) { // и не по его дочерним элементам
        $('body').removeClass('open');
        $('html').removeClass("open");
        $('[data-burger]').removeClass("open");
        $('[data-nav]').removeClass("open");
      }
    });
  };
  closeBurger();
  //slider
  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  const moreads = new Swiper('[data-moreads]', {
    slidesPerView: 7,
    freeMode: true,
  });
  const wheelSlide = new Swiper('[data-selectsSlide]', {
    slidesPerView: 'auto',
    freeMode: true,
    spaceBetween: 10,
    initialSlide : 2,
    grid: {
      rows: 2,
      fill: 'row',
    },
  });
  //adaptive
  if ($(window).width() < 994) {
    $('[data-top]').appendTo('[data-nav]');
    $('[data-tech]').appendTo('[data-nav]');
    $('[data-logo]').after('<div class="wrap__adaptive df aic" data-adaptivewrap></div>');
    $('[data-lang]').appendTo('[data-adaptivewrap]');
    $('[data-favorite]').appendTo('[data-adaptivewrap]');
    $('[data-login]').appendTo('[data-adaptivewrap]');
    closeBurger ();
  }
// tabs
if ($('[data-fotoprev]').length > 0) {
  $('[data-fotoprev]').on('click', function() {
    $(this).addClass('active').siblings().removeClass('active')
      .closest('.product__foto').find('div.product__foto-bigitem').removeClass('active').eq($(this).index()).addClass('active');
    });
  }
  if ($('[data-tab]').length > 0) {
    $('[data-tab]').on('click', function() {
      $(this).addClass('active').siblings().removeClass('active')
        .closest('.autodoc__catalog').find('div.autodoc__content-item').removeClass('active').eq($(this).index()).addClass('active');
      });
    }
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
  select ('[data-selects]','100%',"wheel-drop");

$('.main__search-item select').on("change", function(e) { 
  $(this).parent().addClass('selected');
});

})