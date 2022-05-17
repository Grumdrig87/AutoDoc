jQuery(document).ready(function($) {
  if ($('[data-heart]').length > 0) {
    $('[data-heart]').on('click', function(){
      $(this).toggleClass('active');
    })
  }
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

  // upload
  //Скрипт на кастом добавления файла 
 
  if($('#addImages')) {
  
    var maxFileSize = 2 * 1024 * 1024; // (байт) Максимальный размер файла (2мб)
    var queue = {};
    var form = $('form#uploadImages');
    var imagesList = $('#uploadImagesList');
  
    var itemPreviewTemplate = imagesList.find('.item.template').clone();
    itemPreviewTemplate.removeClass('template');
    imagesList.find('.item.template').remove();
  
  
    $('#addImages').on('change', function () {
        var files = this.files;
  
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
  
            if ( !file.type.match(/image\/(jpeg|jpg|png|gif)/) ) {
                alert( 'Фотография должна быть в формате jpg, png или gif' );
                continue;
            }
  
            if ( file.size > maxFileSize ) {
                alert( 'Размер фотографии не должен превышать 2 Мб' );
                continue;
            }
  
            preview(files[i]);
        }
  
        this.value = '';
    });
  
    // Создание превью
    function preview(file) {
        var reader = new FileReader();
        reader.addEventListener('load', function(event) {
            var img = document.createElement('img');
  
            var itemPreview = itemPreviewTemplate.clone();
  
            itemPreview.find('.img-wrap img').attr('src', event.target.result);
            itemPreview.data('id', file.name);
  
            imagesList.append(itemPreview);
  
            queue[file.name] = file;
  
        });
        reader.readAsDataURL(file);
    }
  
    // Удаление фотографий
    imagesList.on('click', '.delete-link', function () {
        var item = $(this).closest('.item'),
            id = item.data('id');
  
        delete queue[id];
  
        item.remove();
    });
  
  
    // Отправка формы
    form.on('submit', function(event) {
  
        var formData = new FormData(this);
  
        for (var id in queue) {
            formData.append('images[]', queue[id]);
        }
  
        $.ajax({
            url: $(this).attr('action'),
            type: 'POST',
            data: formData,
            async: true,
            success: function (res) {
                alert(res)
            },
            cache: false,
            contentType: false,
            processData: false
        });
  
        return false;
    });
  }


  
 
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