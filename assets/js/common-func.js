$(function(){
  $('.slides').slick({
  centerMode: true,
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true,
  lazyLoad: 'ondemand',
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});

$('a[href^="#"]').click(function(){
    var adjust = 0;
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top + adjust;
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    return false;
  });

  /*inview*/
  $('.inview').on('inview', function(event, isInView) {
    if (isInView) {
      $(this).addClass('on');
    } else {

    }
  });


});
