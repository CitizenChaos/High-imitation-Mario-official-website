$(function () {

  // 回到顶部功能：

  // 先声明一个页面正文高度totalHeight，一进页面就有个值，就是全部折叠时的高度，这样如果我一个都不展开，也有正文页面的高度
  var totalHeight = document.body.scrollHeight

  var $ul = $('.tupian > ul');
  var $a = $('.tupian a');
  var $img9 = $('.img9');
  var $img8 = $('.img8');
  var $pi = $('.pi');
  var flag = true;
  $img9.fadeIn();
  $a.on('click', function () {
    if (flag) {
      flag = false;
      if ($(this).text().trim() === 'More') {
        var that = this
        $(this).text('Less');

        $(this).parent().parent().parent().animate({
          height: 559
        }, 100, function () {
          flag = true;
          totalHeight = document.body.scrollHeight
          $(that).parent().siblings('.img8').fadeIn(200).animate({
            left: 50,
            opacity: 1,
          }, 200)
        });

        $(this).parent().siblings('.img9').fadeOut(200);

        $(this).siblings('.pi').fadeIn(200);
        $(this).siblings('.pu').animate({
          paddingTop: 35,
        }, 200)
      } else {
        var that = this
        $(this).text('More');

        $(this).parent().parent().parent().animate({
          height: 294
        }, 100, function () {
          flag = true;
          totalHeight = document.body.scrollHeight
          $(that).parent().siblings('.img9').fadeIn(200);
        });
        $(this).parent().siblings('.img8').fadeOut(200).animate({
          left: 30,
          opacity: 0,
        })
        $(this).siblings('.pi').fadeOut(200);
        $(this).siblings('.pu').animate({
          paddingTop: 91,
        }, 200)
      }
    }
  });


  var $jump = $('.back .back-top');
  var $top = $('.back a');


  $top.on('mouseenter', function () {
    $jump.css({
      height: 120
    });
  });

  $top.on('mouseleave', function () {
    $jump.css({
      height: 100
    });
  });

  // 注册点击事件：
  $top.on('click', function () {
    $('html').animate({
      scrollTop: 0
    }, 1000);

    // 让$img的高度慢慢的变高
    $jump.animate({
      // 剩余高度=页面全文高度-footer的高度-nav（固定导航的高度）
      height: totalHeight - 345 - 200
    }, 1000, function () {
      $jump.animate({
        height: 100
      }, 6000); //到达顶部慢慢的降落到初始高度
    });
  });
});