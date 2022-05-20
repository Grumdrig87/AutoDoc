jQuery(document).ready(function($) {

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

  
})