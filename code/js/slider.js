$(document).ready(function() {
  let totalSlides = $('div.slide').length;
  let slider = $('.slides');
  let slideTime = 5000;
  let screenWidth = $(document).width();
  let pos = 0;

  text();
  counter();
  setInterval(slideRight, slideTime);
  setInterval(counter, slideTime);

  function slideRight() {
      text()
    slider.css('left', -(pos * screenWidth));
    pos++
    if (pos === totalSlides) {
      pos = 0;
    };
    slider.css('left', -(pos * screenWidth));
  };

  function counter() {
    $('.progress-bar0' ).animate({
      value: '100'
    }, slideTime, function() {
      $(this).val(100);
    });
    $('.progress-bar0' ).animate({
      value: '5'
    }, slideTime, function() {
      $(this).val(5);
    });

  };

  function text() {
    $('.desc').css('display', 'none');
    $('.desc').fadeIn(slideTime/2);
  }
});
