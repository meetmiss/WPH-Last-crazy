$(function () {
    $('.shop-list').mouseenter(function () {
        $('.list-menu').css('display', 'block')
    });
    /* $('.shop-list').mouseleave(function () {
        $('.list-menu').css('display', 'none')
    }); */
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
        $('.more ul').stop().slideUp()
        $('.more-a').removeClass('shadow').children('a').css('color', '')
    });
    $('.more li').hover(function () {
        $(this).addClass('pink')
    }, function () {
        $(this).removeClass('pink')
    });


    //商品分类切换
    $(".list-menu li").hover(function(){
        // console.log($(this).index());
        $(".list-right ul").eq($(this).index()).show().parent().siblings().children().hide();
    })
    $(".list").mouseleave(function(){
        $(".list-right ul").hide();
        $('.list-menu').css('display', 'none')

    })


    // 倒计时
    timer();
    var jsq = window.setInterval(function () {
        timer();
    }, 1000);

    function timer() {
        // 先获取
        var days = document.getElementById('days')
        var hours = document.getElementById('hours');
        var minutes = document.getElementById('minutes');
        var seconds = document.getElementById('seconds');
        // 限定开始结束时间，并求出差值
        var now = new Date();
        var end = new Date('2019/6/21 23:59:59');

        var sc = end - now;
        var d = parseInt(sc / 1000 / 60 / 60 / 24);
        var h = parseInt(sc / 1000 / 60 / 60 % 24);
        var m = parseInt(sc / 1000 / 60 % 60);
        var s = parseInt(sc / 1000 % 60);
        //  赋值之前判断一下。如果时分秒为为1为了，前面需要补位为0
        h = h < 10 ? '0' + h : h;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;

        //  算好的时分秒赋值给span的内容
        days.innerText = d;
        hours.innerText = h;
        minutes.innerText = m;
        seconds.innerText = s;
        //  时间到了之后需要关闭定时器，此时的时分秒状态为00
        if (sc <= 0) {
            window.clearInterval(jsq);
            days.innerText = '00';
            hours.innerText = '00';
            minutes.innerText = '00';
            seconds.innerText = '00';
        }
    };

    //   左侧导航栏   显示
    var rTop = $(".pinpai").offset().top;
    $(document).scroll(function () {
        if ($(document).scrollTop() >= rTop) {
            $('.fix-nav').fadeIn();
        } else {
            $('.fix-nav').fadeOut();
        }
    });
    // 导航栏回到顶部
    $('.fix-bot .back,.bot1, .dt-nav .back').click(function () {
        // animate  动画返回顶部  页面元素做动画
        $('body,html').animate({
            scrollTop: 0
        });
    })

    // 右边电梯导航栏
    var flag = true;
    // 1. 让电梯导航显示隐藏
    var rTop = $('.jsq').offset().top;
    $(document).scroll(function () {
        if ($(document).scrollTop() >= rTop) {
            $('.dt-nav').fadeIn();
        } else {
            $('.dt-nav').fadeOut();
        }
        // 滚动到某个区域  左侧的电梯导航小li跟随变化
        // 遍历 6个大盒子  拿到每个大盒子的 offset().top
        if (flag) {
            $('.floor>div').each(function (index) {
                if ($(document).scrollTop() >= $(this).offset().top) {
                    $('.dt-nav li').eq(index).addClass('current').siblings().removeClass('current');
                }
            });
        }
    })
    // 2. 点击电梯导航页面可以滚动到相应的位置
    $('.dt-nav li').click(function () {
    	if(!$(this).hasClass('back')){
    			flag = false;
        // console.log($(this).index());
        // 根据索引号选取右侧的大盒子
        var juli = $('.floor>div').eq($(this).index()).offset().top;
        $('body,html').animate({
            scrollTop: juli
        }, function () {
            // 动画执行完毕，说明就结束了 就开锁
            flag = true;
        });
        // 当前li 添加样式 current
        $(this).addClass('current').siblings('li').removeClass('current');
    	}

    });

    // 主体图片鼠标移入，移出
    $('.content li img').mouseenter(function () {

        $(this).css('transform','rotateY(180deg)').stop().fadeTo(500,0.5);
    })
    $('.content li img').mouseleave(function () {

        $(this).css('transform','rotateY(360deg)').stop().fadeTo(500, 1);
    })
//  当浏览器改变时，隐藏侧边栏
    window.onresize = function(){
        if($("body").width() <= 1350){
            $(".fix-nav, .dt-nav").css("display","none")
        }else{
            $(".fix-nav, .dt-nav").css("display","block")
        }
    }

// 清除浮动
    $(".b-pic").siblings().addClass("clearfix");

    // lazyLoadInit({
    //     coverColor:"white",
    //     coverDiv:"<h1>test</h1>",
    //     offsetBottom:0,
    //     offsetTopm:0,
    //     showTime:1000,
    //     onLoadBackEnd:function(i,e){
    //         console.log("onLoadBackEnd:"+i);
    //     }
    //     ,onLoadBackStart:function(i,e){
    //         console.log("onLoadBackStart:"+i);
    //     }
    // });


    // 头部


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
});

