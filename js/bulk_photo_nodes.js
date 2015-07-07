jQuery(document).ready(function($) {
  $('#bpn-flickr-form').ajaxStart(function(){
    $('#edit-override-fields-finish').attr('disabled', 'disabled');
  });
  $('#bpn-flickr-form').ajaxSuccess(function(){
    $('#edit-override-fields-finish').removeAttr('disabled');
  });
  // Lock form during ajax process.
  $('#bpn-upload-form')
    .ajaxStart(function(){
      $(this).append('<div class="ajax-overlay" /><div class="ajax-progress-throbber" />')
    })
    .ajaxComplete(function(){
      $('.ajax-overlay, .ajax-progress-throbber', $(this)).remove();
    })
    .ajaxStop(function(){
      $('.ajax-overlay, .ajax-progress-throbber', $(this)).remove();
    });
});
