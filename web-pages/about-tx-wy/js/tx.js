// 懒加载：
$('img').lazyload({
    effect: "fadeIn",
    threshold: 5
});



// 轮播图功能：
$(function () {
    var $li = $('.list1 li');
    var $right = $('.next');
    var $left = $('.prev');
    var $points = $('.list2 li');
    var count = 0;
    var $powers = $('.power .powers')

    $points.eq(0).children().css({
        'backgroundColor': 'white'
    });
    // 右
    $right.click(function () {
        count++;
        if (count === $li.length) {
            count = 0;
        }
        $li.eq(count).addClass('show1').siblings().removeClass('show1');

        // 同步小圆点：
        $points.eq(count).children().css({
            'transform': 'scale(1.2)',
            'backgroundColor': 'white'
        });
        $points.eq(count).siblings().children().css({
            'transform': 'scale(1)',
            'backgroundColor': ''
        });
    });


    // 左
    $left.click(function () {
        count--;
        if (count === -1) {
            count = $li.length - 1;
        }
        $li.eq(count).addClass('show1').siblings().removeClass('show1');

        // 同步小圆点：
        $points.eq(count).children().css({
            'transform': 'scale(1.2)',
            'backgroundColor': 'white'
        });
        $points.eq(count).siblings().children().css({
            'transform': 'scale(1)',
            'backgroundColor': ''
        });

    });

    // 自动播放功能：
    // clearInterval(timeId)
    var timeId = setInterval(function () {
        $right.click();
    }, 2000);
    $powers.on('mouseenter', function () {
        clearInterval(timeId)
    })
    $powers.on('mouseleave', function () {
        timeId = setInterval(function () {
            $right.click();
        }, 2000);
    })

    // 圆点导航：
    $points.click(function () {
        var inx = $(this).index();
        $li.eq(inx).addClass('show1').siblings().removeClass('show1');

        count = inx;

        $(this).children().css({
            'transform': 'scale(1.2)',
            'backgroundColor': 'white'
        });
        $(this).siblings().children().css({
            'transform': 'scale(1)',
            'backgroundColor': ''
        });
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