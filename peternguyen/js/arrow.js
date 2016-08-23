

$(window).scroll(function(){
  var h = $('#about').offset().top;
  if($(document).scrollTop() > h){//Here 200 may be not be exactly 200px
    $('.arrowdown').hide();
    $('.arrowup').show();
  }
  if($(document).scrollTop() < h){//Here 200 may be not be exactly 200px
    $('.arrowdown').show();
    $('.arrowup').hide();
  }
});

$(function() {
  // This will select everything with the class smoothScroll
  // This should prevent problems with carousel, scrollspy, etc...
  $('.smoothScroll').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000); // The number here represents the speed of the scroll in milliseconds
        return false;
      }
    }
  });
});

