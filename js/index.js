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
$(".nav-category li").mouseenter(function () {
    $(this).addClass("changeBgc").children("a").addClass("changeC");
    $(this).siblings("li").removeClass("changeBgc").children("a").removeClass("changeC");
});
$(".nav-category ul").mouseleave(function () {
    $(this).hide();
});
$(".nav-category li").hover(function () {
    var num = $(this).index() + 1;
    $(".detail-all").show();
    $('.detail-all .detail:nth-child(' + num + ')').show().siblings(".detail").hide();
}, function () {
    var num = $(this).index() + 1;
        $(".detail-all").hide();
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
    // $(".fbc-trigger-con i")[index].addClass("change").siblings().removeClass("change");
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
    // $(".fbc-trigger-con i")[index].addClass("change").siblings().removeClass("change");
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
    var dsq = window.setInterval(function () {
        right();
    },2000)
});









