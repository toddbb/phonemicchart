$(document).ready(function() {
  
  $('.phoneme').on('click', function() {
    var $ph = $(this);
    $ph.toggleClass('scalePhoneme');
    setTimeout(function() {
      $ph.toggleClass('scalePhoneme');
    },300);
    
  });
  
  
});