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

  
  if (jQuery('[data-dropzone]').length > 0) {
    var dropZone = $('[data-dropzone]'),
          maxFileSize = 10000000; // максимальный размер фалйа - 10 мб.
      
      // Проверка поддержки браузером
      if (typeof(window.FileReader) == 'undefined') {
          dropZone.text('Не поддерживается браузером!');
          dropZone.addClass('error');
      }
      
      // Добавляем класс hover при наведении
      dropZone[0].ondragover = function() {
          dropZone.addClass('hover');
          return false;
      };
      
      // Убираем класс hover
      dropZone[0].ondragleave = function() {
          dropZone.removeClass('hover');
          return false;
      };
      
      // Обрабатываем событие Drop
      dropZone[0].ondrop = function(event) {
          event.preventDefault();
          dropZone.removeClass('hover');
          dropZone.addClass('drop');
          
          var file = event.dataTransfer.files[0];
          
          // Проверяем размер файла
          if (file.size > maxFileSize) {
              dropZone.find('.addnew__drop').text('Файл слишком большой!');
              dropZone.addClass('error');
              return false;
          }
          
          // Создаем запрос
          var xhr = new XMLHttpRequest();
          xhr.upload.addEventListener('progress', uploadProgress, false);
          xhr.onreadystatechange = stateChange;
          xhr.open('POST', '/upload.php');
          xhr.setRequestHeader('X-FILE-NAME', file.name);
          xhr.send(file);
      };
      
      // Показываем процент загрузки
      function uploadProgress(event) {
          var percent = parseInt(event.loaded / event.total * 100);
          dropZone.find('.addnew__drop').text('Загрузка: ' + percent + '%');
      }
      
      // Пост обрабочик
      function stateChange(event) {
          if (event.target.readyState == 4) {
              if (event.target.status == 200) {
                  dropZone.find('.addnew__drop').text('Загрузка успешно завершена!');
              } else {
                  dropZone.find('.addnew__drop').text('Произошла ошибка!');
                  dropZone.addClass('error');
              }
          }
      }
    }
    if ($('[data-file]').length > 0) {
      $('[data-file]').on('change', function() {
        // var fileBuffer=[];
        // Array.prototype.push.apply( fileBuffer, $('[data-file]').get(0).files );
        var name_file = []; 
        
          for(var i = 0; i < $(this).get(0).files.length; ++i) {
            var reader = new FileReader();
            $("[data-dropfoto]").append('<div><img src="" alt="" class="image" data-index="'+i+'"></div>');
            
            reader.onload = function (e) {
              name_file.push(e.target.result);
            };
            reader.readAsDataURL($(this).get(0).files[i])
            $('[data-index="'+i+'"]').attr('src', $(this).get(0).files[i])
          } 
          console.log(name_file);
          // $("[data-dropfoto]").html(name_file); 
          $('span.del').click(function(){
            $(this).parent().hide();
            var spanId = $(this).parent().index();
            for(var i = 0; i < fileBuffer.length; ++i) {
              delete fileBuffer[spanId];
            } 
          })
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