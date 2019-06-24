$(function(){
    // 快捷导航区域
    $(".wp-user").hover(function () {
        $(this).addClass("mouseenter-user").children("div").show().siblings("span").children(".line").hide();
    }, function () {
        $(this).removeClass("mouseenter-user").children("div").hide().siblings("span").children(".line").show();
        });
    $(".wp-sign").hover(function () {
        $(this).children(".day").show();
    }, function () {
            $(this).children(".day").hide();
        });
    $(".sellAll").hover(function () {
        $(".wp-order").children("span").hide();
        $(this).children("p").show().siblings("span").children(".line").hide();
        $(this).addClass("mouseenter-sell").children("p").show();
        $(this).find(".arrow-bot").addClass("arrow-top").removeClass("arrow-bot");
    }, function () {
        $(".wp-order").children("span").show();
        $(this).children("p").show().siblings("span").children(".line").show();        
        $(this).removeClass("mouseenter-sell").children("p").hide();
        $(this).find(".arrow-top").addClass("arrow-bot").removeClass("arrow-top")
    });
    $(".memberAll").hover(function () {
        $(".sellAll").find(".line").hide();
        $(this).children("p").show().siblings("span").children(".line").hide();
        $(this).addClass("mouseenter-sell").children("p").show();
        $(this).find(".arrow-bot").addClass("arrow-top").removeClass("arrow-bot");
    }, function () {
        $(".sellAll").find(".line").show();
        $(this).children("p").show().siblings("span").children(".line").show();        
        $(this).removeClass("mouseenter-sell").children("p").hide();
        $(this).find(".arrow-top").addClass("arrow-bot").removeClass("arrow-top")        
    });
    $(".customerAll").hover(function () {
        $(".memberAll").find(".line").hide();
        $(this).children("p").show().siblings("span").children(".line").hide();
        $(this).addClass("mouseenter-sell").children("p").show();
        $(this).find(".arrow-bot").addClass("arrow-top").removeClass("arrow-bot");
    }, function () {
        $(".memberAll").find(".line").show();
        $(this).children("p").show().siblings("span").children(".line").show();        
        $(this).removeClass("mouseenter-sell").children("p").hide();
        $(this).find(".arrow-top").addClass("arrow-bot").removeClass("arrow-top")        
    });
    $(".wp-phone").hover(function () {
        $(".customerAll").find(".line").hide();
        $(this).find(".line").hide();
        $(this).addClass("mouseenter-sell").children("div").show();
    }, function () {
        $(".customerAll").find(".line").show();
        $(this).find (".line").show();        
        $(this).removeClass("mouseenter-sell").children("div").hide();
    });
    $(".moreAll").hover(function () {
        $(".wp-phone").find(".line").hide();
        $(this).addClass("mouseenter-sell").children("div").show();
        $(this).find(".arrow-bot").addClass("arrow-top").removeClass("arrow-bot");
        $(this).siblings("li").find(".space").hide();
    }, function () {
        $(".wp-phone").find(".line").show();
        $(this).removeClass("mouseenter-sell").children("div").hide();
        $(this).find(".arrow-top").addClass("arrow-bot").removeClass("arrow-top")        
        $(this).siblings("li").find(".space").show();
    });

    // 主导航区域
    $(".nav-category").mouseenter(function () {
        $(this).children("ul").show();
    });
    $(".nav-category").click(function () {
        $(this).children("ul").show();
    });
    $(".nav-category").mouseleave(function () {
        $(this).children("ul").hide();
    });
    $(".nav-category li").mouseenter(function () {
        $(this).addClass("changeBgc").children("a").addClass("changeC");
        $(this).siblings("li").removeClass("changeBgc").children("a").removeClass("changeC");
    });
    $(".nav-category li").mouseenter(function () {
        var num = $(this).index() + 1;
        $(".detail-all").show();
        $('.detail-all .detail:nth-child(' + num + ')').show().siblings(".detail").hide();
    });
    $(".nav-category li").mouseleave(function () {
        var num = $(this).index() + 1;
        $(".detail-all").hide();
        $(this).removeClass("changeBgc").children("a").removeClass("changeC");
    });
    $(".detail-all").mouseenter(function () {
        $(this).show().siblings(".nav-category").children("ul").show();
    })
    $(".detail-all").mouseleave(function () {
        $(this).hide().siblings(".nav-category").children("ul").hide();
    });
    
    
    // 购物袋
    $(".c-shopcar").hover(function () {
        $(this).addClass("change");
        $(this).children("div").show();
    }, function () {
        $(this).removeClass("change");
        $(this).children("div").hide();    
    });


//   固定 time按钮
    var juli = $('.main').height();
    $(document).scroll(function(){
        if($(document).scrollTop() >= juli) {
            var fixed ={
                position:'fixed',
                top: 0,
                left: 0,
                right: 0
            }
            $('.time').css(fixed);
        } else {
            $('.time').css('position', '');

        }
    });
    // 点击time按钮 换色
    $('.time li').click(function(){
        $(this).addClass('color').siblings('li').removeClass('color');
    })


    // 点击更多按钮
    $('.nav-top .more').mouseenter(function(){
        $(this).children('ul').stop().show();
    });
    
    $( '.nav-top .more' ).mouseleave(function() {
        $(this).children('ul').stop().fadeOut();
    });

    // 右侧电梯导航显示
    var flag = true;
    var jl =$('.box-bottom .last').offset().top;
    $(document).scroll(function() {
        if($(document).scrollTop() >= jl) {
            $('.nav-right').show();
        } else {
            $('.nav-right').hide();
        }
        // 1 页面滚动电梯导航滑动到相应位置
        if(flag){
            $('.selction').each(function(index){
                if ($(document).scrollTop() >= $(this).offset().top) {
                    $('.nav-right li').eq(index).addClass('current').siblings('li').removeClass('current');
                }
            })
        };
        
    });

    // 2 点击电梯导航页面可以滚动到相应的位置
    $('.nav-right li').click(function(){
        flag = false;
        var jl = $('.selction').eq($(this).index()).offset().top;
        $('body, html').animate({
            scrollTop : jl
        }, function(){
            flag = true;
        });
        $(this).addClass('current').siblings().removeClass('current');
    });
    
    $('.back').click(function(){
        $('body, html').animate({
            scrollTop : 0
        });
    });
    $('.nav-right li').on('mouseover', function(){
        $(this).css('color', '#d64094').siblings('li').css('color', '');
    })
    $('.nav-right li').on('mouseout', function(){
        $(this).css('color', '');
    })

    $('.z-login').click(function () {
        var url=location.origin+"/wph/login";
        location.href=url;
        return false;
    })
    $('.z-register').click(function () {
        var url=location.origin+"/wph/register";
        location.href=url;
        return false;
    })
    $('.nav-group ul').on('click','li',function () {
        var className=$(this).children().attr('class');
        var url=location.origin+"/wph/";

        if(className.indexOf('index')!=-1){
            url=url+"index";
        }else{
            url=url+className;
        }
        window.open(url);
        return false;
    })




})