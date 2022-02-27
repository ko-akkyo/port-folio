$('.nav-link').on('click', (e) => {
  e.preventDefault();
  const speed = 700;
  const type = 'swing';
  const href= $(e.target).attr("href");
  const target = $(href == "#index" ? 'html' : href);
  const position = target.offset().top;
  $('body,html').animate({scrollTop: position}, speed, type);
  return false;
});



// ボタンの表示／非表示を切り替える
const updateButton = () => {
  if ($(window).scrollTop() >= 300) {
    // 300px以上スクロールされた
    $('.back-to-top').fadeIn();
  } else {
    $('.back-to-top').fadeOut();
  }
};

$(window).on('scroll', updateButton);

$('.back-to-top').on('click', (e) => {
  e.preventDefault();
  $('html, body').animate({ scrollTop: 0 }, 600);
});

// 途中でリロードされても、ボタンを表示
updateButton();




$('.animated').waypoint({
  handler(direction) {
    if (direction === 'down') {
      $(this.element).addClass('fade-in');
      $(this.element).removeClass('fade-out');
    } else if (direction === 'up') {
      $(this.element).addClass('fade-out');
      $(this.element).removeClass('fade-in');
    }
  },
  offset: '40%',
});