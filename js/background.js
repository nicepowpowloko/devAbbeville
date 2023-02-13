$('.patch').click(function(){
  $(this).addClass('active');
  $('.patch').not($(this)).removeClass('active');
  $('body').attr('class',$(this).attr('class').split(' ')[1]);
});