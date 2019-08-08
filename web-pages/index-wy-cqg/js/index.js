// pipes部分
$(function () {
    var pipes = $('.main .main_content .left .threepipes').children();
    pipes.mouseenter(function () {
        $(this).css({
            'top': 20,
            'transition': 'all .3s cubic-bezier(0.625, 0, 0.4, 1.52)',
        });
    });
    pipes.mouseleave(function () {
        $(this).css({
            'top': 45,
            'transition': 'all .3s cubic-bezier(0.625, 0, 0.4, 1.52)',
        });
    })
    pipes.eq(0).animate({
        top: 45
    }, function () {
        pipes.eq(1).animate({
            top: 45
        }, function () {
            pipes.eq(2).animate({
                top: 45
            })
        })
    })
});

// main部分人物动画
$(function () {
    var $one = $('.main .right .one img');
    var $two = $('.main .right .two img');
    var $three = $('.main .right .three img');
    $two.animate({
        width: 357,
        height: 746
    }, function () {
        $one.parent().animate({
            left: -120,
            opacity: 1
        }, 600);
        $three.parent().animate({
            left: 150,
            opacity: 1
        }, 600);
    });
});

// 视频部分
$(function () {
    $('.video .mp4').click(function () {
        $(this).children('video').css('display', 'block');
        $(this).children('.playout').css('display', 'none');
        $(this).children('video')[0].play();

    })
});

// game部分
$(function () {
    var gamecardhide = $('.game .items').children('div:odd');

    gamecardhide.mouseenter(function () {
        gamecardhide.eq(gamecardhide.index(this)).css({
            'opacity': '1',
            'transform': 'scale(1.1)',
            'transition': 'transform .3s'
        });
    });

    gamecardhide.mouseleave(function () {
        gamecardhide.eq(gamecardhide.index(this)).css({
            'opacity': '0',
            'transform': 'scale(1)',
            'transition': 'transform .3s'
        });
    });
});

// amiboo部分
$(function () {
    var $amiibo = $('.amiibo .box').children('div');
    $amiibo.mouseenter(function () {
        $amiibo.eq($amiibo.index(this)).css({
            'transform': 'scale(1.1)',
            'transition': 'all .3s'
        });
    });

    $amiibo.mouseleave(function () {
        $amiibo.eq($amiibo.index(this)).css({
            'transform': 'scale(1)',
            'transition': 'all .3s'
        });
    });
});

// active部分
$(function () {
    var box = $('.activity .content .box a').children();
    var rotate = $('.activity .content .box .wen p');
    box.on('mouseenter', function () {
        rotate.eq($(this).index()).css({
            transform: 'rotateX(360deg)',
            transition: 'all .4s'
        })
    });
    box.on('mouseleave', function () {
        rotate.eq($(this).index()).css({
            transform: 'rotateX(0deg)',
            transition: 'all .4s'
        })
    });
});

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