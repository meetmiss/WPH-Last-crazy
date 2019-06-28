// 顶部
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


// 购物袋
$(".c-shopcar").hover(function () {
    $(this).addClass("change");
    $(this).children("div").show();
}, function () {
    $(this).removeClass("change");
    $(this).children("div").hide();    
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
    var num = $(this).index() + 1;
    $(".detail-all").show();
    $('.detail-all .detail:nth-child(' + num + ')').show().siblings(".detail").hide();

});
$(".nav-category li").mouseleave(function () {
    var num = $(this).index() + 1;
    $(".detail-all").hide();
    $(this).removeClass("changeBgc").children("a").removeClass("changeC");
   /*  if ($(".detail-all").mouseenter()) {
        $(this).addClass("changeBgc").children("a").addClass("changeC");
    } 
    else {
        $(".detail-all").hide();
        $(this).removeClass("changeBgc").children("a").removeClass("changeC");        
    } */
});
$(".detail-all").mouseenter(function () { 
    // var num = $(this).children('.detail').index() + 1;
    // $('.nav-category').find('li:nth-child('+num+')').addClass("changeBgc");
    $(this).show().siblings(".nav-category").children("ul").show();
})
$(".detail-all").mouseleave(function () {
    $(this).hide().siblings(".nav-category").children("ul").hide();
});
// 电梯导航
$(".brand-wrap li").hover(function () {
    $(this).find("p").show().parents("li").siblings("li").find("p").hide(); 
}, function () {
    $(this).find("p").hide();
});
$(".brand-ready li").mouseenter(function () {
    $(this).children("p").show().parent("li").siblings("li").children("p").hide();    
});
$(".brand-ready li").mouseleave(function () {
    $(this).find(".brand-mes").show().parents("a").siblings("p").hide(); 
});
$(".brand-ready button").click(function () {
    $(".d-denglu").stop().fadeIn(); 
});
// 登录框
$(".dl-top .off").click(function () {
    $(this).parents(".d-denglu").stop().fadeOut();
});
$(".d-denglu .dl-top span").click(function () {
    $(this).addClass("current").siblings("span").removeClass("current");
    if ($(this).html() == "扫码登录" ) {
        $('.denglu .dl-bd1').show().siblings('.dl-bd2').hide();    
    } else if ( $(this).html() == "账户登录" ){
        $('.denglu .dl-bd2').show().siblings('.dl-bd1').hide();
    }
});
$(".dl-bd1").hover(function () {
    $(this).children(".erweima").addClass("move").siblings(".soyisao").stop().fadeIn();
}, function () {
    $(this).children(".erweima").removeClass("move").siblings(".soyisao").stop().fadeOut();
});
// 轮播图
var index = 0;
function right() {
    index++; 
    if (index >= 3) {
        index = 1;
    } 
    $(".fbc-trigger-con i:nth-child(" + index + ")").addClass("change").siblings().removeClass("change");
    $(".focus-banner-con ul").css({
        left : -1920 * index - 285 + 'px',
    })
}
$(".arrow-r").click(function () {
    right();
});
$(".arrow-l").click(function () {
    if (index <= 0) {
        index = 2;
    }
    index--;
    // $(".else .box1 div:nth-child(" + index + ")").hide();
    $(".fbc-trigger-conn i:nth-child(" + index + ")").addClass("change").siblings().removeClass("change");
    $(".focus-banner-con ul").css({
        left : -1920 * index - 285 + 'px',
    })
});
$(".fbc-trigger-con i").click(function () {
    $(this).addClass("change").siblings().removeClass("change");
    if ($(this).index() == 0) {
        $(".focus-banner-con ul").css({
            left : -1920 * 2 - 285 + 'px',
        })
    } else if ($(this).index() == 1) {
        $(".focus-banner-con ul").css({
            left : -1920 * 1 - 285 + 'px',
        })
    }
});
var dsq = window.setInterval(function () {
    right();
},2000)
$(".focus-banner").hover(function () {
    clearInterval(dsq);
}, function () {
    dsq = window.setInterval(function () {
        right();
    },2000)
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





