$(function () {
    $('.shop-list').mouseenter(function() {
        $('.list-menu').css('display','block')
    });
    $('.shop-list').mouseleave(function() {
        $('.list-menu').css('display','none')
    });
    $('.list-menu li').mouseenter(function() {
        $(this).addClass('current');
    });
    $('.list-menu li').mouseleave(function() {
        $(this).removeClass('current');
    })
    $('.more').hover(function() {
        $('.more ul').stop().slideDown()
        $('.more-a').addClass('shadow').children('a').css('color','#f10180');

    },function() {
        $('.more ul').stop().slideUp()
        $('.more-a').removeClass('shadow').children('a').css('color','')
    });
    $('.more li').hover(function () {
        $(this).addClass('pink')
    },function() {
        $(this).removeClass('pink')
    });
    $('.phone').hover(function() {
        $('.chat-shouji').stop().show()
    },function() {
        $('.chat-shouji').stop().hide()
    });
    $('.many').hover(function() {
        $(this).addClass('many-show').children('ul').show();
    },function() {
        $(this).removeClass('many-show').children('ul').hide();
    })
    $('.many').hover(function() {
        $(this).children('.many-i').show()
    },function() {
        $(this).children('.many-i').hide()
    })
    var juli = $('.divs').offset().top;
    $(document).scroll(function() {
        // 顶部固定导航栏效果
        if($(document).scrollTop() >= juli) {
            $('.divs').addClass('fix')
        }else {
            $('.divs').removeClass('fix')
        };
    });
    
    $('.back').on('click', function () {
       $('body, html').scrollTop(0) 
    }); 
    // 轮播图效果  
    jQuery(".slideBox").slide({mainCell:".bd ul",effect:"fold",autoPlay:true,trigger:"click",delayTime:3000});
    
    
    // 左边电梯导航效果
    var topJuli = $('.today-ddp').offset().top;
    // console.log(topJuli)
    $(document).scroll(function() {
        
       if ($('body, html').scrollTop() >= topJuli) {
            $('.left-nav').stop().show();
       }else {
            $('.left-nav').stop().hide();
       }
        $('.content .w').each(function (index) {
            if ($('body, html').scrollTop() >= $(this).offset().top) {
                $('.left-nav li').eq(index).addClass('bgp').siblings().removeClass('bgp');
            }
        });
    });
    // 电梯导航内部li鼠标进入效果
    $('.left-nav li').mouseenter(function (){
        $(this).addClass('bgp').siblings('li').removeClass('bgp') 
    });
    // 电梯导航内部li点击效果
    $('.left-nav li').click(function () {
        var jl = $('.content .w').eq($(this).index()).offset().top;
        $('body,html').scrollTop(jl)
        $(this).addClass('bgp').siblings('li').removeClass('bgp');
    })
    
   
    window.onresize = function () {
        // console.log($('body').width())
        if ($('body').width() <= 1500) {
            $('.left-nav').css('display','none')
        }else {
            $('.left-nav').css('display','block')
        }
    };
    // 顶部我的特卖效果
    $('.my').hover(function () {
        $(this).addClass('mysty').find('ul').css('display','block')
    },function(){
        $(this).removeClass('mysty').find('ul').css('display','none')
    });
    // 顶部客户服务效果
    $('.search').hover(function(){
        $(this).addClass('mysty').find('ul').css('display','block')
    },function() {
        $(this).removeClass('mysty').find('ul').css('display','none')
    })
    // 顶部会员俱乐部
    $('.club').hover(function () {
        $(this).addClass('mysty').find('ul').css('display','block')
    }, function() {
        $(this).removeClass('mysty').find('ul').css('display','none')
    })
    // 倒计时效果
    var hours = document.getElementById('hours');
    var minutes = document.getElementById('minutes');
    var seconds = document.getElementById('seconds');
    var h1 = document.getElementById('h1');
    var m1 = document.getElementById('m1');
    var s1 = document.getElementById('s1');
    var btn = document.getElementById('btn');
    time();
    var num = window.setInterval(function() {
        time();
    },1000)
    function time() {
        var now = new Date();
        // // console.log(now)
        var end = new Date('2019/6/21 23:00:00');
        // console.log(end)
        var temp = end - now;
        // console.log(temp)
        var h = parseInt(temp / 1000 / 60 / 60);
        // console.log(h)
        var m = parseInt(temp / 1000 / 60 % 60);
        // console.log(m);
        var s = parseInt(temp / 1000 % 60);
        // console.log(s)
        if(h < 10) {
            h = '0' + h;
        }
        if(m < 10) {
            m = '0' + m;
        }
        if(s < 10) {
            s = '0' + s;
        }
        hours.innerText = h;
        minutes.innerText = m;
        seconds.innerText = s;
        if (temp <= 0) {
            window.clearInterval(num);
            hours.innerText = '00';
            minutes.innerText = '00';
            seconds.innerText = '00';
        }  
    }
    // 商品下拉效果
    
    $(".list-menu li").mouseenter(function () {
        $(this).addClass("changeBgc").children("a").addClass("changeC");
        $(this).siblings("li").removeClass("changeBgc").children("a").removeClass("changeC");
    });
    $(".list-menu li").mouseenter(function () {
        var num = $(this).index() + 1;
        
        $('.detail-all .detail:nth-child(' + num + ')').show().siblings(".detail").hide();
        $(".detail-all").show();
    });
    $(".list-menu li").mouseleave(function () {
        var num = $(this).index()+ 1;
        $(".detail-all").hide();
        $(this).removeClass("changeBgc").children("a").removeClass("changeC");
    });
    $(".detail-all").mouseenter(function () {
        $(this).show();
        $(this).siblings(".shop-list").find('.list-menu').show();
    })
    $(".detail-all").mouseleave(function () {
        $(this).hide(); 
        $(this).siblings(".shop-list").find('.list-menu').hide();
    });


    // 右侧固定导航
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

    // 返回顶部
    $('.back').click(function () {
        $('body, html').scrollTop = 0;
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


    $('.toCateGory').click(function () {
        var url=location.origin+"/wph/category";
        window.open(url);
    })
})