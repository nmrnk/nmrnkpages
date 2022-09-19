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

  $('.mvTxt').fadeIn(3000);

  $('.tab > div:not(' + $('a.selected').attr('href') + ')').hide();

  $('#tabPages a').click(function () {
    $('#tabPages a').removeClass('selected');
    $(this).addClass('selected');
    $('.work_page').hide();
    $($(this).attr('href')).show();
    return false;
  });

  // twenty
  $('#twenty').click(function () {
    $('.twentyImg').twentytwenty();
  });

  // modal
  $('.modal-open').each(function () {
    $(this).click(function () {
      const target = $(this).attr('href');
      const modal = document.getElementById(target);
      $(modal).fadeIn();
      return false;
    });
    $('.js-modal-close, .modal_bg').click(function () {
      $('.js-modal').fadeOut();
      return false;
    });
  });

  // skillグラフ
  //値をグラフに表示させる
  Chart.plugins.register({
    afterDatasetsDraw: function (chart, easing) {
      var ctx = chart.ctx;

      chart.data.datasets.forEach(function (dataset, i) {
        var meta = chart.getDatasetMeta(i);
        if (!meta.hidden) {
          meta.data.forEach(function (element, index) {
            // 値の表示
            ctx.fillStyle = 'rgb(77, 72, 84,1)'; //文字の色
            var fontSize = 16; //フォントサイズ
            var fontStyle = 'normal'; //フォントスタイル
            var fontFamily = 'Arial'; //フォントファミリー
            ctx.font = Chart.helpers.fontString(
              fontSize,
              fontStyle,
              fontFamily
            );

            var dataString = dataset.data[index].toString();

            // 値の位置
            ctx.textAlign = 'center'; //テキストを中央寄せ
            ctx.textBaseline = 'middle'; //テキストベースラインの位置を中央揃え

            var padding = 5; //余白
            var position = element.tooltipPosition();
            ctx.fillText(
              dataString,
              position.x,
              position.y - fontSize / 2 - padding
            );
          });
        }
      });
    },
  });

  //=========== 円グラフ ============//
  $('#chart01').on('inview', function (event, isInView) {
    //画面上に入ったらグラフを描画
    if (isInView) {
      var ctx = document.getElementById('chart01'); //グラフを描画したい場所のid
      var chart = new Chart(ctx, {
        type: 'pie', //グラフのタイプ
        data: {
          //グラフのデータ
          labels: ['Coading', 'Design', 'Direction'], //データの名前
          datasets: [
            {
              label: '職種別比率', //グラフのタイトル
              backgroundColor: ['#fb8877', '#9aa9ba', '#60a0f2'], //グラフの背景色
              data: ['45', '40', '15'], //データ
            },
          ],
        },

        options: {
          //グラフのオプション
          maintainAspectRatio: false, //CSSで大きさを調整するため、自動縮小をさせない
          legend: {
            display: true, //グラフの説明を表示
          },
          tooltips: {
            //グラフへカーソルを合わせた際の詳細表示の設定
            callbacks: {
              label: function (tooltipItem, data) {
                return (
                  data.labels[tooltipItem.index] +
                  ': ' +
                  data.datasets[0].data[tooltipItem.index] +
                  '%'
                ); //%を最後につける
              },
            },
          },
          title: {
            //上部タイトル表示の設定
            display: true,
            fontSize: 16,
            text: '単位：%',
          },
        },
      });
    }
  });

  const target = $('#skill');
  const el = target.offset().top;
  $(window).scroll(function () {
    const scroll = $(this).scrollTop();
    if (scroll + 550 > el) {
      target.addClass('active');
    }
  });

  // mv slick
  $('.slick01').slick({
    autoplay: true,
    arrows: true,
    autoplaySpeed: 2500,
    slidesToShow: 2,
    centerMode: true,
    dots: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
