jQuery(document).ready(function($) {

   if ($('#multiupload').length > 0) {
      $('#multiupload').fileapi({
         url: 'http://rubaxa.org/FileAPI/server/ctrl.php',
         multiple: true,
         elements: {
            empty: { show: '.b-upload__hint' },
            list: '.js-files',
            file: {
               tpl: '.js-file-tpl',
               preview: {
                  el: '.b-thumb__preview',
                  width: 150,
                  height: 120
               },
            }
         }
      });
      $('.addFile input').on('change', function () {
         $('.addFile-icon').appendTo('.b-upload__files');
         $('.b-upload__files').addClass('loaded');
      })
   };
   if ($('[data-proffoto]').length > 0) {
      $('[data-proffoto]').fileapi({
         url: 'http://rubaxa.org/FileAPI/server/ctrl.php',
         elements: {
            preview: {
               el: '.js-preview',
               width: 925,
               height: 250
            },
         },
      });
   }
   if ($('[data-proffotosm]').length > 0) {
      $('[data-proffotosm]').fileapi({
         url: 'http://rubaxa.org/FileAPI/server/ctrl.php',
         elements: {
            preview: {
               el: '.js-preview',
               width: 208,
               height: 208
            },
         },
      });
   }
})