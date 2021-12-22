$(function () {
  // スマホハンバーガーメニュー
  $('#menuBtn, .nav_sp').click(function () {
    if ($('#menuBtn').hasClass('active')) {
      $('#nav, #menuBg').stop().animate({ right: '-100vw' }, 500);
      $('#menuBtn').removeClass('active');
    } else {
      $('#nav, #menuBg').stop().animate({ right: '0' }, 500);
      $('#menuBtn').addClass('active');
    }
  });

  // mvスライド
  $('.bg-slider').bgSwitcher({
    images: [
      '/img/main1.jpg',
      '/img/main2.jpg',
      '/img/main3.jpg',
      '/img/main4.jpg',
    ], // 切り替える背景画像を指定
    interval: 3000,
  });

  $('#mvTxt').fadeIn(3000);

  // profile
  // const targetAnime = $('#profile');
  // const twitter = $('.twitter');
  // const elAnime = targetAnime.offset().top;
  // $(window).scroll(function () {
  //   const scroll = $(this).scrollTop();
  //   if (scroll > elAnime) {
  //     twitter.addClass('');
  //   }
  // });

  // skill図
  const target = $('#skill');
  const el = target.offset().top;
  $(window).scroll(function () {
    const scroll = $(this).scrollTop();
    if (scroll > el - 80) {
      target.addClass('active');
    }
  });
});
