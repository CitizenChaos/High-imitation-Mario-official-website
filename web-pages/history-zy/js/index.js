// 顶蘑菇
window.onload = function () {
  $(function () {
    var $banner_01 = $('#banner_01');
    var $banner_02 = $('#banner_02');
    var $banner_03 = $('#banner_03');
    var $banner_04 = $('#banner_04');
    var $banner_05 = $('#banner_05');

    $banner_02.animate({
      top: 0,
      opacity: 1
    }, 400, 'linear');

    $banner_01.animate({
      left: 0,
      opacity: 1
    }, 800, 'linear');

    $banner_03.animate({
      right: 0,
      opacity: 1
    }, 800, 'linear');

    setInterval(function () {

      $banner_03.animate({
        top: 82
      }, 1000, 'linear', function () {

        $banner_04.animate({
          opacity: 1
        }, function () {
          $banner_05.animate({
            top: 0,
          }, 200).animate({
            opacity: 1,
            right: -150,
          }, 1800, 'linear')
        })
      });

      $banner_03.animate({
        top: 190
      }, 2000, 'linear', function () {

        $banner_05.css({
          right: 0,
          opacity: 1,
          top: 40
        })

        $banner_05.animate({
          opacity: 1,
          right: 0
        }, 1, 'linear')
      })
    })
  })
}

// old的lunbo的显示与隐藏
$(function () {
  var $content_active = $('#oldContent #content_active');
  var $a_click = $('#oldContent .a_click');
  var $lunbo = $('#oldContent .lunbo');
  var $close = $('#oldContent #close');
  var $left_arrow = $('#oldContent #left_arrow');
  var $right_arrow = $('#oldContent #right_arrow');
  var $lunbo_ul = $('#oldContent #lunbo_ul');
  var $lunbo_li = $('#oldContent #lunbo_li');

  var n = 0
  $content_active.on('click', function () {
    n = $content_active.index($(this));
    // console.log(n);

    var x = $lunbo_li.width();
    $lunbo.fadeIn();
    $lunbo_li.eq(n).fadeIn().siblings().fadeOut();

    if (n === 18) {
      $right_arrow.css({
        opacity: .5
      })
    } else {
      $right_arrow.css({
        opacity: 1
      })
    }

    if (n === 0) {
      $left_arrow.css({
        opacity: .5
      })
    } else {
      $left_arrow.css({
        opacity: 1
      })
    }

  })

  // /===============
  // 右箭头事件
  $right_arrow.on('click', function () {
    if (n >= 18) {
      n = 18
    } else {
      n++;
    }

    if (n === 18) {
      $right_arrow.css({
        opacity: .5
      })
    } else {
      $right_arrow.css({
        opacity: 1
      })
    }

    if (n === 0) {
      $left_arrow.css({
        opacity: .5
      })
    } else {
      $left_arrow.css({
        opacity: 1
      })
    }

    // console.log(n);


    $lunbo_li.eq(n).fadeIn().siblings().fadeOut();

  })

  $right_arrow.on('mouseenter', function () {
    $right_arrow.css({
      transform: 'translateY(-50%)' + 'scale(1.2)',
      transition: '.3s'
    })
  })

  $right_arrow.on('mouseleave', function () {
    $right_arrow.css({
      transform: 'translateY(-50%)' + 'scale(1)',
      transition: '.3s'
    })
  })


  // 左箭头事件
  $left_arrow.on('click', function () {
    if (n <= 0) {
      n = 0
    } else {
      n--;
    }

    if (n === 18) {
      $right_arrow.css({
        opacity: .5
      })
    } else {
      $right_arrow.css({
        opacity: 1
      })
    }

    if (n === 0) {
      $left_arrow.css({
        opacity: .5
      })
    } else {
      $left_arrow.css({
        opacity: 1
      })
    }

    // console.log(n);

    $lunbo_li.eq(n).fadeIn().siblings().fadeOut();
  })


  $left_arrow.on('mouseenter', function () {
    $left_arrow.css({
      transform: 'translateY(-50%)' + 'scale(1.2)',
      transition: '.3s'
    })
  })

  $left_arrow.on('mouseleave', function () {
    $left_arrow.css({
      transform: 'translateY(-50%)' + 'scale(1)',
      transition: '.3s'
    })
  })
  // =============

  $close.on('click', function () {
    $lunbo.fadeOut();
  })

  $(document).on('keyup', function (e) {
    var code = e.keyCode;
    if (code === 27) {
      $lunbo.fadeOut();
    }
  })




})
// new的lunbo的显示与隐藏
$(function () {
  var $content_active02 = $('#newContent #content_active');
  var $a_click02 = $('#newContent .a_click');
  var $lunbo02 = $('#newContent .lunbo');
  var $close02 = $('#newContent #close');
  var $left_arrow02 = $('#newContent #left_arrow');
  var $right_arrow02 = $('#newContent #right_arrow');
  var $lunbo_ul02 = $('#newContent #lunbo_ul');
  var $lunbo_li02 = $('#newContent #lunbo_li');

  var n = 0
  $content_active02.on('click', function () {
    n = $content_active02.index($(this));
    var x = $lunbo_li02.width();
    $lunbo02.fadeIn();
    $lunbo_li02.eq(n).fadeIn().siblings().fadeOut();

    if (n === 18) {
      $right_arrow02.css({
        opacity: .5
      })
    } else {
      $right_arrow02.css({
        opacity: 1
      })
    }

    if (n === 0) {
      $left_arrow02.css({
        opacity: .5
      })
    } else {
      $left_arrow02.css({
        opacity: 1
      })
    }

  })
  // ======================右箭头事件
  $right_arrow02.on('click', function () {
    if (n >= 18) {
      n = 18
    } else {
      n++;
    }

    if (n === 18) {
      $right_arrow02.css({
        opacity: .5
      })
    } else {
      $right_arrow02.css({
        opacity: 1
      })
    }

    if (n === 0) {
      $left_arrow02.css({
        opacity: .5
      })
    } else {
      $left_arrow02.css({
        opacity: 1
      })
    }

    $lunbo_li02.eq(n).fadeIn().siblings().fadeOut();
  })

  $right_arrow02.on('mouseenter', function () {
    $right_arrow02.css({
      transform: 'translateY(-50%)' + 'scale(1.2)',
      transition: '.3s'
    })
  })

  $right_arrow02.on('mouseleave', function () {
    $right_arrow02.css({
      transform: 'translateY(-50%)' + 'scale(1)',
      transition: '.3s'
    })
  })

  // 作箭头事件====================
  $left_arrow02.on('click', function () {

    if (n <= 0) {
      n = 0
    } else {
      n--;
    }

    if (n === 18) {
      $right_arrow02.css({
        opacity: .5
      })
    } else {
      $right_arrow02.css({
        opacity: 1
      })
    }

    if (n === 0) {
      $left_arrow02.css({
        opacity: .5
      })
    } else {
      $left_arrow02.css({
        opacity: 1
      })
    }

    $lunbo_li02.eq(n).fadeIn().siblings().fadeOut();
  })

  $left_arrow02.on('mouseenter', function () {
    $left_arrow02.css({
      transform: 'translateY(-50%)' + 'scale(1.2)',
      transition: '.3s'
    })
  })

  $left_arrow02.on('mouseleave', function () {
    $left_arrow02.css({
      transform: 'translateY(-50%)' + 'scale(1)',
      transition: '.3s'
    })
  })
  // ==========================


  $close02.on('click', function () {
    $lunbo02.fadeOut();
  })

  $(document).on('keyup', function (e) {
    var code = e.keyCode;
    if (code === 27) {
      $lunbo02.fadeOut();
    }
  })
})

// old和new的切换++++++++++++hover

$(function () {
  var $old = $('.main #old');
  var $new = $('.main #new');
  var $oldContent = $('.main #oldContent');
  var $newContent = $('.main #newContent');

  // new的点击事件
  $new.on('click', function () {
    $newContent.fadeIn();
    $oldContent.fadeOut();
    $(this).css({
      color: '#E60012',
      backgroundColor: '#fff'
    });

    // 清楚new的houver
    $new.off('mouseenter');
    $new.off('mouseleave');

    $old.css({
      color: '#fff',
      backgroundColor: '#E60012'
    });

    $old.on('mouseenter', function () {
      $(this).css({
        color: '#E60012',
        backgroundColor: '#fff'
      })
    });

    $old.on('mouseleave', function () {
      $(this).css({
        color: '#fff',
        backgroundColor: '#E60012'
      })
    });


  })

  // old的点击事件
  $old.on('click', function () {
    $oldContent.fadeIn();
    $newContent.fadeOut();

    $old.off('mouseenter');
    $old.off('mouseleave');


    $new.css({
      color: '#fff',
      backgroundColor: '#E60012'
    });

    $new.on('mouseenter', function () {
      $(this).css({
        color: '#E60012',
        backgroundColor: '#fff'
      })
    });

    $new.on('mouseleave', function () {
      $(this).css({
        color: '#fff',
        backgroundColor: '#E60012'
      })
    })

  })

  // new的hover事件
  $new.on('mouseenter', function () {
    $(this).css({
      color: '#E60012',
      backgroundColor: '#fff'
    })
  });

  $new.on('mouseleave', function () {
    $(this).css({
      color: '#fff',
      backgroundColor: '#E60012'
    })
  })


})

// 回到顶部功能：
$(function () {
  var $jump = $('.back .back-top');
  var $top = $('.back a');
  var over = document.body.scrollHeight - 345 - 200; // 剩余高度=页面全文高度-footer的高度-nav（固定导航的高度）


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
      height: over
    }, 1000, function () {
      $jump.animate({
        height: 100
      }, 6000); //到达顶部慢慢的降落到初始高度
    });
  });
});