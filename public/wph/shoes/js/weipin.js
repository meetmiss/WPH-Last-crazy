$(function() {
    // $('.R-nav .a1').hover(function() {
    //     $(this).children('.a4').show();
    // }, function() {
    //     $(this).children('.a4').hide();
    // });
    // // 我的特卖
    // $('.R-nav .b1').hover(function() {
    //     $(this).children('.a7').show();
    // },function() {
    //     $(this).children('.a7').hide();
    // });
    // // 会员俱乐部
    // $('.R-nav .b2').hover(function() {
    //     $(this).children('.a8').show();
    // },function() {
    //     $(this).children('.a8').hide();
    // });
    // // 客户服务
    // $('.R-nav .b3').hover(function() {
    //     $(this).children('.a9').show();
    // },function() {
    //     $(this).children('.a9').hide();
    // });
    // // 签到有礼下面盒子
    // $('.R-nav .b8').hover(function() {
    //     $(this).children('.a6').show();
    // },function() {
    //     $(this).children('.a6').hide();
    // });
    // // 手机下二维码
    // $('.R-nav .b9').hover(function() {
    //     $(this).children('.b10').slideDown();
    // },function() {
    //     $(this).children('.b10').slideUp();
    // });
    // // 更多下盒子
    // $('.nav-group .a14').hover(function() {
    //     $(this).children('.a14-2').show();
    // },function() {
    //     $(this).children('.a14-2').hide();
    // });
    // logo
    // 购物袋下盒子
    $('.logo .a12').hover(function() {
        $(this).children('.a13').show();
    },function() {
        $(this).children('.a13').hide();
    });
    // 主导航区域
    // $(".nav-category").mouseenter(function () {
    // $(this).children("ul").show();
    // });
    // $(".nav-category li").mouseenter(function () {
    //     $(this).addClass("changeBgc").children("a").addClass("changeC");
    //     $(this).siblings("li").removeClass("changeBgc").children("a").removeClass("changeC");
    // });
    // $(".nav-category ul").mouseleave(function () {
    //     $(this).hide();
    // });
    // $(".nav-category li").hover(function () {
    //     var num = $(this).index() + 1;
    //     $(".detail-all").show();
    //     $('.detail-all .detail:nth-child(' + num + ')').show().siblings(".detail").hide();
    // }, function () {
    //     var num = $(this).index() + 1;
    //         $(".detail-all").hide();
    // });
    // 右侧菜单
    $('.a14 .b12 li').hover(function() {
        $(this).children('.b13').show();
    },function() {
        $(this).children('.b13').hide();
    });

    // 左侧电梯导航
    $('.b18 a').hover(function() {
        $(this).toggleClass('red');
    })
    // 固定导航栏
    var topNum = $('.b17').offset().top;
    $(document).scroll(function() {       
        if($(document).scrollTop() >= topNum) {
            $('.b17').addClass('arr');
        }else {
            $('.b17').removeClass('arr');
        }
    })
    // 点击b19返回顶部 
    $('.b19').click(function () {
        // animate  动画返回顶部  页面元素做动画  
        $('body,html').animate({
            scrollTop: 0
        });
    })
    $('.b22').click(function (e) {
       
        // animate  动画返回顶部  页面元素做动画  
        $('body,html').animate({
            scrollTop: 0
        })
        // e.stopPropagation();
        
    })


    // 右侧导航栏
    var flag = true;// 互斥锁
    var rTop = $('.a16').offset().top;
    a();
    function a(){
        if($(document).scrollTop() >= rTop) {
            $('.b20').fadeIn();
        }else {
            $('.b20').fadeOut();
        }
        // 滚动到某个区域  左侧的电梯导航小li跟随变化
        // 遍历 4个大盒子  拿到每个大盒子的 offset().top
        if(flag) {

            $('.c-0 .c0').each(function(index) {
                
                if (Math.ceil($(document).scrollTop()) >= Math.floor($(this).offset().top)) {
                    console.log(index);
                    $('.b20 li').eq(index).addClass('current').siblings().removeClass('current');
                }
            });
        }
    }
    // 显示
    $(document).scroll(function () {
        a();
    })
        // 2. 点击电梯导航页面可以滚动到相应的位置
        $('.b20 li').click(function() {
            if(!$(this).hasClass('b22')){ //判断有没有.b22 
                flag = false;
                // 根据索引号选取右侧的大盒子
                var jl = parseInt($('.c-0 .c0').eq($(this).index()).offset().top);
                $('body,html').animate({
                    scrollTop: jl
                }, function () {
                     // 动画执行完毕，说明就结束了 就开锁
                    flag = true;
                })
                // 当前li 添加样式 current
                $(this).addClass('current').siblings('li').removeClass('current');
            }

            
        })


    








})