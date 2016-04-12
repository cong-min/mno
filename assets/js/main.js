var iUp = (function() {
  var t = 0,
      d = 150,
      clean = function() {
        t = 0;
      },
      up = function(e) {
        setTimeout(function() {
          $(e).addClass("up")
        }, t);
        t += d;
      },
      down = function(e) {
        $(e).removeClass("up");
      },
      toggle = function(e){
        setTimeout(function() {
          $(e).toggleClass("up")
        }, t);
        t += d;
      };
  return {
    clean: clean,
    up: up,
    down: down,
    toggle: toggle
  }
})();
function xSlideIn() {
  $('.btn-mobile-menu').removeClass('hidden');
  $('.main-post-list').removeClass('hidden');
  $('.panel-cover').addClass('panel-cover--collapsed');
  $('.content-wrapper').addClass('animated slideInRight');
}
function xSlideOut() {
  $('.btn-mobile-menu').addClass('hidden');
  $('.main-post-list').addClass('hidden');
  $('.panel-cover').removeClass('panel-cover--collapsed');
  $('.content-wrapper').removeClass('animated slideInRight');
}
function ySlide() {
  var wrapper = $('.navigation-wrapper');
  if (wrapper.css('display') == "block") {
    wrapper.one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
      wrapper.toggleClass('visible animated bounceOutUp');
    });
    wrapper.toggleClass('animated bounceInDown animated bounceOutUp');
  } else {
    wrapper.toggleClass('visible animated bounceInDown');
  }
  $('.btn-mobile-menu__icon').toggleClass('fa fa-list fa fa-angle-up animated fadeIn');
}
$(function() {
  $(".navigation--btns .navigation__item:first a").addClass("index-button").attr('target', '_self');
  if(window.location.host == "i.congm.in") {
    xSlideIn();
  }else{
    xSlideOut();
  }
  $(".iUp").each(function(i, e) {
    iUp.up(e);
  });
  $(".btn-mobile-menu__icon").on("click", function(){
    ySlide();
  });
  $(".index-button").on("click", function(){
    if(window.location.host == "i.congm.in"){
      xSlideOut();
      setTimeout(function(){
        window.location.href = "https://congm.in";
      }, 600)
    }
  });
});
$(document.links).filter(function() {
    return (this.hostname != window.location.hostname) && (this.target != '_self');
}).attr('target', '_blank');