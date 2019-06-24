$(function () {
    $('.shop-list').mouseenter(function () {
        $('.list-menu').stop().slideDown()
    });
    $('.shop-list').mouseleave(function () {
        $('.list-menu').stop().slideUp()
    });
    $('.list-menu li').mouseenter(function () {
        $(this).addClass('current');
    });
    $('.list-menu li').mouseleave(function () {
        $(this).removeClass('current');
    })
    $('.more').hover(function () {
        $('.more ul').stop().slideDown()
        $('.more-a').addClass('shadow').children('a').css('color', '#f10180');

    }, function () {
        $('.more ul').hide()
        $('.more-a').removeClass('shadow').children('a').css('color', '')
    });
    $('.more li').hover(function () {
        $(this).addClass('pink')
    }, function () {
        $(this).removeClass('pink')
    });

    // 请登录
    $('.first1').mouseenter(function () {
        $('.first_please').stop().show();
    })
    $('.first_please').mouseleave(function () {
        $(this).stop().hide();
    })

    // 商品图片懒加载
    lazyLoadInit({
        coverColor: "white",
        offsetBottom: 0,
        offsetTopm: 0,
        showTime: 1000,
        onLoadBackEnd: function (i, e) {
            // console.log("onLoadBackEnd:" + i);
        }
        , onLoadBackStart: function (i, e) {
            // console.log("onLoadBackStart:" + i);
        }
    });


    // 选择日期
    $('#mydatepicker').dcalendarpicker();


    $('.yyy').mouseenter(function(){
        console.log();
        $(this).children('.loader-13').classs('');
    })

    // 轮播图
    jQuery(".slideBox").slide({
        mainCell: ".bd ul",
        effect: "left",
        autoPlay: true,
        easing: "easeInBack"
    });

    // 商品分类
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


    // 精选分类tab栏切换
    $('.tab_list ul li').click(function(){
        $(this).addClass('current').siblings().removeClass('current')
        var index = $(this).index();
        $('.tab_con .item').eq(index).show().siblings().hide();
    })

    // 精选分类的固定导航
    $(document).scroll(function(){
        if($(document).scrollTop() >= $('.choose').offset().top){
            $('.wp_mother').fadeIn();
        }else{
            $('.wp_mother').fadeOut();
        }
    })


    $('.mtm').mouseenter(function () {
        $('.tm-list').show();
        $('.t-icon').addClass('red');
    });
    $('.wp-tm').mouseleave(function () {
        $('.tm-list').hide();
        $('.t-icon').removeClass('red');
    })

    $('.wp-sign').hover(function () {
        $('.day').show();
    },function () {
        $('.day').hide();
    })

    $('.mber').mouseenter(function () {
        $('.mb-list').show();
        $('.m-icon').addClass('red');
    });

    $('.wp-member').mouseleave(function () {
        $('.mb-list').hide();
        $('.m-icon').removeClass('red');
    })

    $('.serv').mouseenter(function () {
        $('.sv-list').show();
        $('.sv-icon').addClass('red');
    })
    $('.wp-service').mouseleave(function () {
        $('.sv-list').hide();
        $('.sv-icon').removeClass('red');
    })

    $('.phone').mouseenter(function () {
        $('.phone-list').show();
        $('.zw').removeClass('list-hide');

    })
    $('.wp-phone').mouseleave(function () {
        $('.phone-list').hide();
        $('.zw').addClass('list-hide');
    })

    $('.mores').mouseenter(function () {
        $('.more-list').show();
        $('.mo-icon').addClass('red');
        $('.zwm').removeClass('list-hide');
    })

    $('.wp-more').mouseleave(function () {
        $('.more-list').hide();
        $('.mo-icon').removeClass('red');
        $('.zwm').addClass('list-hide');
    })



    $('.wp-my').hover(function () {
        $('.user-infor').show();
        $('.white').show()
    },function () {
        $('.user-infor').hide();
        $('.white').hide()
    })
    
    $(".loader").hover(function(){
        $(this).find(".myHeart").show();
    },function(){
        $(this).find(".myHeart").hide();
    });

   /*  $('.loader').hover(function(){
        // console.log(111)
        $(this).children('.myHeart').show()
    },function(){
        $(this).children('.myHeart').hide()
    }) */


    // 右侧导航区域
    $(".zh").hover(function () {
        $(this).siblings(".box").show();
        $(this).addClass("changeBgc1");
    }, function () {
            $(this).removeClass("changeBgc1");
            $(this).siblings(".box").hide();
        });
    $(".account .box").hover(function () {
        $(this).show().siblings(".zh").addClass("changeBgc1");
        
    }, function () {
        $(this).hide().siblings(".zh").removeClass("changeBgc1");
            
    });
    $(".account .box .zh-off").click(function () {
        $(this).parents(".box").hide();
        $(this).parents(".box").siblings(".zh").removeClass("changeBgc1");
    });
    $(".else > div").hover(function () {
        if ($(this).index() <= 3) {
            var index = $(this).index() + 1;
            $(this).addClass("changeBgc1").siblings("div").removeClass("changeBgc1");
            $(".else .box1 div:nth-child(" + index + ")").show().siblings("div").hide();
        }
    }, function () {
        if ($(this).index() <= 3) {
            var index = $(this).index() + 1;
            $(this).removeClass("changeBgc1");
            $(".else .box1 div:nth-child(" + index + ")").hide();
        }
        });
    $(".else .box1 > div").hover(function () {
        var index = $(this).index() + 1;
        $(".else div:nth-child("+index+")").addClass("changeBgc1").siblings("div").removeClass("changeBgc1");
        $(this).show().removeClass("changeBgc1");
    }, function () {
        var index = $(this).index() + 1;
        $(".else div:nth-child("+index+")").removeClass("changeBgc1");
        $(this).removeClass("changeBgc1").hide();
    });
    $(".rtTop > div").hover(function () {
        if ($(this).index() <= 1) {
            var index = $(this).index() + 1;
            $(this).addClass("changeBgc1").siblings("div").removeClass("changeBgc1");
            $(".rtTop .box2 div:nth-child(" + index + ")").show().siblings("div").hide();
        }
    }, function () {
        if ($(this).index() <= 1) {
            var index = $(this).index() + 1;
            $(this).removeClass("changeBgc1");
            $(".rtTop .box2 div:nth-child(" + index + ")").hide();
        }  
    });
    $(".rtTop .box2 > div").hover(function () {
        var index = $(this).index() + 1;
        $(".rtTop div:nth-child(" + index + ")").addClass("changeBgc1").siblings("div").removeClass("changeBgc1");
        $(this).show().removeClass("changeBgc1");
    }, function () {
        var index = $(this).index() + 1;
        $(".rtTop div:nth-child(" + index + ")").removeClass("changeBgc1");
        $(this).removeClass("changeBgc1").hide();
    });
    $(".rtTop .box2 div:last-child").click(function () {
        // $(document).offset().top 
        $("body,html").animate({ scrollTop: 0 });
    });

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
    $('.list-fenlei').on('click','li',function () {
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

