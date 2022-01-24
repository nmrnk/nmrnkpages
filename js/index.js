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
      // 'https://nmrnk.github.io/nmrnkpages/img/main1.jpg',
      // 'https://nmrnk.github.io/nmrnkpages/img/main2.jpg',
      // 'https://nmrnk.github.io/nmrnkpages/img/main3.jpg',
      // 'https://nmrnk.github.io/nmrnkpages/img/main4.jpg',
      '../img/main1.jpg',
      '../img/main2.jpg',
      '../img/main3.jpg',
      '../img/main4.jpg',
    ], // 切り替える背景画像を指定
    interval: 3000,
  });

  $('.mvTxt').fadeIn(3000);

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

$(function () {
  $('.tab > div:not(' + $('a.selected').attr('href') + ')').hide();

  $('#tabPages a').click(function () {
    $('#tabPages a').removeClass('selected');
    $(this).addClass('selected');
    $('.work_page').hide();
    $($(this).attr('href')).show();
    return false;

    // const selectedWork = $(this).data('image');
    // if ($('.work_icon_img').hasClass('selectedWork')) {
    //   this.addClass('scale');
    // }
  });

  // twenty
  $('#twenty').click(function () {
    $('.twentyImg').twentytwenty();
  });

  // modal
  $('.modal-open').each(function () {
    $(this).click(function () {
      const target = $(this).attr('href');
      console.log(target);
      const modal = document.getElementById(target);
      $(modal).fadeIn();
      return false;
    });
    $('.js-modal-close, .modal_bg').click(function () {
      $('.js-modal').fadeOut();
      return false;
    });
  });

  $('#aa').click(function () {
    alert('re');
  });
});
