$(function(){
    // $('.shop-list').mouseenter(function () {
    //     $('.list-menu').stop().slideDown()
    // });
    // $('.shop-list').mouseleave(function () {
    //     $('.list-menu').stop().slideUp()
    // });
    // $('.list-menu li').mouseenter(function () {
    //     $(this).addClass('current');
    // });
    // $('.list-menu li').mouseleave(function () {
    //     $(this).removeClass('current');
    // })
    // $('.more').hover(function () {
    //     $('.more ul').stop().slideDown()
    //     $('.more-a').addClass('shadow').children('a').css('color', '#f10180');

    // }, function () {
    //     $('.more ul').hide()
    //     $('.more-a').removeClass('shadow').children('a').css('color', '')
    // });
    // $('.more li').hover(function () {
    //     $(this).addClass('pink')
    // }, function () {
    //     $(this).removeClass('pink')
    // });
    // $('.R-nav .a1').hover(function() {
    //     $(this).children('.a4').show();
    // }, function() {
    //     $(this).children('.a4').hide();
    // });
    
    // 顶部导航
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

    // 品牌开始
    $('.tb').mouseenter(function(){
        $('.logo_img').hide().siblings('.nike').show();
    })
    $('.tb').mouseleave(function(){
        $('.nike').hide().siblings('.logo_img').show();
    })

    // 运动男鞋
    $(".size .duo").click(function () {
        $(this).siblings(".cima").show().siblings(".head").hide(); 
    });
    $(".cima .qx").click(function () {
        $(this).parents(".cima").hide().siblings(".head").show(); 
    });

    $(".color .duo").click(function () {
        $(this).siblings(".cima1").show().siblings(".head1").hide(); 
    });
    $(".color .qx").click(function () {
        $(this).parents(".cima1").hide().siblings(".head1").show(); 
    });

    $(".useMore .duo").click(function () {
        $(this).siblings(".cima2").show().siblings(".head2").hide(); 
    });
    $(".useMore .qx").click(function () {
        $(this).parents(".cima2").hide().siblings(".head2").show(); 
    });


    // 右侧固定导航区域
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

    $('.kobe').click(function () {
        var url=location.origin+"/wph/detail";
        window.open(url);
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