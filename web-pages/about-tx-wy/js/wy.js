$(function () {
    var $aboutmario = $('.aboutmario .inner .right');

    $aboutmario.animate({
        top: 0,
        opacity: 1,
        width: 665,
        height: 528,
    }, 500);
})


$(function () {
    var $one = $('.skills .char-stage1');
    var $two = $('.skills .char-stage2');

    var $marioshell = $('.skills .char-stage1 .marioshell');
    var $marioswim = $('.skills .char-stage1 .marioswim');
    var $stage1txtone = $('.skills .char-stage1 .txtone');
    var $stage1txttwo = $('.skills .char-stage1 .txttwo');
    var $stage1txtthree = $('.skills .char-stage1 .txtthree');

    var $mariorun = $('.skills .char-stage2 .mariorun');
    var $pipe = $('.skills .char-stage2 .pipe');
    var $mushroom = $('.skills .char-stage2 .mushroom');
    var $stage2txtone = $('.skills .char-stage2 .txtone');
    var $stage2txttwo = $('.skills .char-stage2 .txttwo');
    var $stage2txtthree = $('.skills .char-stage2 .txtthree');

    // skills两个部分切换效果
    function showhide() {
        if ($one.hasClass('aa')) {
            $one.removeClass('aa').addClass('bb');
            stage1animate();
        } else {
            $one.removeClass('bb').addClass('aa');
            stage1animate();
        };

        if ($two.hasClass('aa')) {
            $two.removeClass('aa').addClass('bb');
            stage2animate()
        } else {
            $two.removeClass('bb').addClass('aa');
            stage2animate()
        };
    }

    // 一进页面就调用第一个的动画
    stage1animate();
    setInterval(showhide, 3000);

    // 第一个skills动画效果
    function stage1animate() {
        if ($one.hasClass('aa')) {
            $marioshell.animate({
                right: 0,
                opacity: 1
            });
            $marioswim.animate({
                bottom: 120,
                left: 150,
                opacity: 1
            });
            setTimeout(function () {
                $stage1txtone.animate({
                    top: 250,
                    opacity: 1
                });
            }, 600);
            setTimeout(function () {
                $stage1txttwo.animate({
                    top: 345,
                    opacity: 1
                });
            }, 500);
            setTimeout(function () {
                $stage1txtthree.animate({
                    top: 436,
                    opacity: 1
                });
            }, 400);

        } else {
            $marioshell.css({
                right: 400,
                opacity: 0
            });
            $marioswim.css({
                bottom: 0,
                left: 0,
                opacity: 0
            });
            $stage1txtone.css({
                top: 260,
                opacity: 0
            });
            $stage1txttwo.css({
                top: 355,
                opacity: 0
            });
            $stage1txtthree.css({
                top: 446,
                opacity: 0
            });
        }
    }

    // 第二个skills动画效果
    function stage2animate() {
        if ($two.hasClass('aa')) {
            $mariorun.animate({
                left: 65,
                opacity: 1
            }, 600);
            $pipe.animate({
                bottom: 65,
                opacity: 1
            }, 500).animate({
                bottom: 55
            }, 200);
            setTimeout(function () {
                $mushroom.animate({
                    top: 0,
                },1000, 'linear');
            }, 1000);
            setTimeout(function () {
                $stage2txtone.animate({
                    bottom: 508,
                    opacity: 1
                });
            }, 600);
            setTimeout(function () {
                $stage2txttwo.animate({
                    bottom: 415,
                    opacity: 1
                });
            }, 500);
            setTimeout(function () {
                $stage2txtthree.animate({
                    bottom: 314,
                    opacity: 1
                });
            }, 400);

        } else {
            $mariorun.css({
                left: 0,
                opacity: 0
            });
            $pipe.css({
                bottom: -60,
                opacity: 0
            });
            $mushroom.css({
                top: 76,
            });
            $stage2txtone.css({
                bottom: 498,
                opacity: 0
            });
            $stage2txttwo.css({
                bottom: 405,
                opacity: 0
            });
            $stage2txtthree.css({
                bottom: 304,
                opacity: 0
            });
        }
    }
});