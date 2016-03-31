function xSlide() {
  $('.main-post-list').toggleClass('hidden');
  $('.panel-cover').toggleClass('panel-cover--collapsed');
  $('.content-wrapper').toggleClass('animated slideInRight');
}
function ySlide(str) {
  var wrapper = $('.navigation-wrapper');
  if (wrapper.css('display') == "block") {
    wrapper.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      wrapper.toggleClass('visible animated bounceOutUp');
    });
    wrapper.toggleClass('animated bounceInDown animated bounceOutUp');
  } else {
    if(str == "mobile") {
      wrapper.toggleClass('visible animated bounceInDown');
    }
  }
  $('.btn-mobile-menu__icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
}
$(document).ready(function() {
  if ((window.location.hash == "#blog" || document.body.offsetWidth <= 960) && !$('.panel-cover').hasClass('panel-cover--collapsed')) {
    xSlide();
  }
  $('a.blog-button').click(function() {
    xSlide();
  });
  $('.btn-mobile-menu__icon').click(function() {
    ySlide("mobile");
  });
  $('.navigation-wrapper .blog-button').click(function() {
    ySlide();
  });
  $('.panel-cover__logo').click(function(){
    xSlide();
  });
});
$(document.links).filter(function() {
    return this.hostname != window.location.hostname;
}).attr('target', '_blank');
