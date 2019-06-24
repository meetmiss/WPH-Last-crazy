
$(function (){

    $('.dian li').click(function (){
        var index=$(this).index();
        $('.dian-right').eq(index).css('z-index',1);
        $('.dian-right').eq(index).siblings().css('z-index',0);
        $(this).addClass('red').siblings().removeClass('red');
    })
    $('.allpic li').mouseover(function () {
        $(this).find('.allpic1').show().siblings("li").find(".allpic1").hide();
    });
    $('.allpic li').mouseout(function () {
        $(this).find('.allpic1').hide();
    })
    $('.allpic1').mouseover(function() {
        $(this).css('backgroundColor', '#f10180').children().css('color','#fff')  
    })
    $('.allpic1').mouseout(function(){
        $(this).css('backgroundColor', '').children().css('color','')
    })

    $('.foot-xia li').mouseover(function() {
        $(this).children().find('a').css('color','#f10180')
    })
    $('.foot-xia li').mouseout(function() {
        $(this).children().find('a').css('color','')
    })

    $('.nav-xiala1').mouseover(function() {
        $(this).find('.lis').css('backgroundColor',"#fff").children().css('border','1px solid #cc')
    }) 
    $('.nav-xiala1 li').mouseout(function() {
        $(this).find('.lis').css('backgroundColor',"").children().css('')
    })

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

// 轮播图
var index = 0;
function right() {
    index++; 
    if (index >= 3) {
        index = 1;
    } 
    $(".fbc-trigger-con i:nth-child(" + index + ")").addClass("change").siblings().removeClass("change");
    $(".focus-banner-con ul").css({
        left : -1350 * index + 'px',
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
        left : -1350 * index + 'px',
    })
});
$(".fbc-trigger-con i").click(function () {
    $(this).addClass("change").siblings().removeClass("change");
    if ($(this).index() == 0) {
        $(".focus-banner-con ul").css({
            left : -1350 * 2 + 'px',
        })
    } else if ($(this).index() == 1) {
        $(".focus-banner-con ul").css({
            left : -1350 * 1 + 'px',
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


















































