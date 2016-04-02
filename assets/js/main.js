document.domain = "congm.in";
var ToIndex = {
  status: false,
  init: function(){
    ToIndex.status = true;
    ToIndex.state("https://congm.in");
    ToIndex.stateListen();
  },
  state: function(url){
    if(!window.history.pushState){
      location.href = url;
    }else{
      xSlideOut();
      window.history.pushState({status: "xSlideOut"}, "", url);
    }
  },
  stateListen: function(){
    window.addEventListener('popstate', function(e){
      if(!e.state){
        ToIndex.status = false;
        xSlideIn();
      }else{
        switch(e.state.status){
          case "xSlideOut":
            xSlideOut();
            break;
        }
      }
    }, false);
  }
};
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
  $('.main-post-list').removeClass('hidden');
  $('.panel-cover').addClass('panel-cover--collapsed');
  $('.content-wrapper').addClass('animated slideInRight');
}
function xSlideOut() {
  $('.main-post-list').addClass('hidden');
  $('.panel-cover').removeClass('panel-cover--collapsed');
  $('.content-wrapper').removeClass('animated slideInRight');
}
function ySlide(str) {
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
$(document).ready(function() {
  xSlideIn();
  $(".iUp").each(function(i, e) {
    iUp.up(e);
  });
  $(".btn-mobile-menu__icon").click(function(){
    ySlide();
  });
  $(".index-button").click(function(){
    if(!ToIndex.status){
      ToIndex.init();
    }
  });
  $(".blog-button").click(function(){
    // TODO
    xSlideOut();
    setTimeout(function(){

    });
  });
});
$(document.links).filter(function() {
    return (this.hostname != window.location.hostname) && (this.target != '_self');
}).attr('target', '_blank');
