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



    //图片改变透明度 收藏
    $('.icon img,i').mouseenter(function (){
        $(this).stop().fadeTo(200, 0.7).parent().siblings('i').show();

    });
    $('.icon img,i').mouseleave(function (){
        $(this).stop().fadeTo(200, 1).parent().siblings('i').hide();

    });
    //鼠标移入改变i的背景颜色
    $('.icon i').mouseenter(function (){
        $(this).css('background-color','hotpink');
    })
    $('.icon i').mouseleave(function (){
        $(this).css('background-color','');
    })


    // 卷起显示隐藏
    var rTop = $('.today-ddp').offset().top;
     $(document).scroll(function () {
         if ($(document).scrollTop() >= rTop) {
             $('.sort').fadeIn();

         } else {
             $('.sort').fadeOut();

         }
     });

   //倒计时
    timer();
    var jsq = window.setInterval(function () {
    timer();
    }, 1000);
     function timer() {
        // 获取元素
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

        h = h < 10 ? '0' + h : h;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;

        days.innerText = d;
        hours.innerText = h;
        minutes.innerText = m;
        seconds.innerText = s;


        if (sc <= 0) {
            window.clearInterval(jsq);
            hours.innerText = '00';
            minutes.innerText = '00';
            seconds.innerText = '00';
        }
    };

//  固定定位卷起距离
 var rTop = $('.today-ddp').offset().top;
 $(document).scroll(function () {
     if ($(document).scrollTop() >= rTop) {
         $('.fiend').fadeIn();
     } else {
         $('.fiend').fadeOut();
     }
 });

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

    $('.list-fenlei ul').on('click','li',function () {
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
