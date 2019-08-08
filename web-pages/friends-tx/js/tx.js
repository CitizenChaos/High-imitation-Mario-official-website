
// 主题部分
$(function () {
    var $imgs = $('.topic .pic').children();

    function showHide() {
        $imgs.hide();
        $imgs.eq(0).fadeIn(1000).fadeOut(1000).siblings().hide(); // 动画队列：同时执行
        // 延时器：
        setTimeout(function () {
            $imgs.eq(1).fadeIn(1000).fadeOut(1000).siblings().hide(); // 动画队列：同时执行
        }, 2000)
        setTimeout(function () {
            $imgs.eq(2).fadeIn(1000).fadeOut(1000).siblings().hide(); // 动画队列：同时执行
        }, 4000)
    }


    showHide(); // 在定时器开启之前先调用一次函数

    // 正常执行showHide();函数
    setInterval(function () {
        showHide();
    }, 6000);

});


//  Friends轮播图-swiper插件：
$(function () {
    new Swiper('.swiper-container', {

        slidesPerView: 4,
        spaceBetween: 60,
        slidesPerGroup: 4,

        loop:true,

        loopFillGroupWithBlank: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
})


// 回到顶部功能：
$(function () {
    var $jump = $('.back .back-top');
    var $top = $('.back a');
    var over = document.body.scrollHeight - 345 - 180;// 剩余高度=页面全文高度-footer的高度-nav（固定导航的高度）


    $top.on('mouseenter', function () {
        $jump.css({height: 120});
    });

    $top.on('mouseleave', function () {
        $jump.css({height: 100});
    });


    // 注册点击事件：
    $top.on('click', function () {
        $('html').animate({
            scrollTop: 0
        }, 1000);
        
        
        // 让$img的高度慢慢的变高
        $jump.animate({height: over}, 1000, function () {
            $jump.animate({height: 100}, 6000);//到达顶部慢慢的降落到初始高度
        });
    });
});

