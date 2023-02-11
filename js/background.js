$(document).ready(function()
{
  $("#boutons a").on('click', function(){
    var idx = $(this).attr('id');
    idx = idx.replace('bt','');
    $('.fixed').not('#fixed'+idx).fadeOut(1000);
    $('#fixed'+idx).fadeIn(1000);
    $('#boutons').removeClass().addClass('bts'+idx);
  });
});