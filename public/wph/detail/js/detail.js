

$(function () {
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

    $('.more').mouseenter(function () {
        $('.more-list').show();
        $('.mo-icon').addClass('red');
        $('.zwm').removeClass('list-hide');
    })

    $('.wp-more').mouseleave(function () {
        $('.more-list').hide();
        $('.mo-icon').removeClass('red');
        $('.zwm').addClass('list-hide');
    })

    $('.nav-first').hover(function () {
        $('.nav-first ul').show()
    },function () {
        $('.nav-first ul').hide();
    })

    $(".nav-first li").mouseenter(function () {
        $(this).addClass("changeBgc").children("a").addClass("changeC");
        $(this).siblings("li").removeClass("changeBgc").children("a").removeClass("changeC");
    });
    $(".nav-first li").mouseenter(function () {
        var num = $(this).index() + 1;
        $(".detail-all").show();
        $('.detail-all .detail:nth-child(' + num + ')').show().siblings(".detail").hide();
    });
    $(".nav-first li").mouseleave(function () {
        var num = $(this).index() + 1;
        $(".detail-all").hide();
        $(this).removeClass("changeBgc").children("a").removeClass("changeC");
    });


    $(".detail-all").mouseenter(function () {
        $(this).show().siblings(".nav-first").children("ul").show();
    })
    $(".detail-all").mouseleave(function () {
        $(this).hide().siblings(".nav-first").children("ul").hide();
    });
    $('.more-nav').hover(function () {
        $('.more-nav-list').stop().slideDown();
    },function () {
        $('.more-nav-list').stop().slideUp();
    })

    $('.img-item').click(function () {

        var bigImg=$(this).children().attr('data-img');
        var midImg=bigImg+"_420x420_90.jpg";
        $(".my-foto").attr('src',midImg);
        $(".my-foto").attr('data-large',bigImg+".jpg");
    })

    $(".my-foto").imagezoomsl({

        zoomrange: [1, 12],
        zoomstart: 4,
        innerzoom: true,
        magnifierborder: "none"
    });


    $(".praise-u").on("click","li",function(event){
        var target = $(event.target);
        var index=$(this).index();
        target.addClass('praise-selected').siblings().removeClass('praise-selected');
        var imgSrc= $('.p-c-text').children().attr('src');
        var address=imgSrc.split('/')[0]+"/pl"+index+'.'+imgSrc.split('.')[1];
        $('.p-c-text').children().attr('src',address);
    });
    var swiper = new Swiper('.swiper-container', {
        pagination: {
            el: '.swiper-pagination',
            type: 'fraction',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    $('.ab-ul').on('click','li',function () {

        $(this).addClass('selected').siblings().removeClass('selected');

        var cname='au-top-'+$(this).index();
        $('.ab-title').attr('class','ab-title '+cname);

        var src=$('.ab-img').children().attr('src');
        var newSrc=src.split('/')[0]+'/au_img'+$(this).index()+"1.jpg";

        $('.ab-img').children().attr('src',newSrc);
    })



    $('.p-detail-kb').click(function () {
        $(this).addClass('p-selected').siblings().removeClass('p-selected');
        $('.praise').show().siblings().hide();
    })
    $('.p-detail').click(function () {
        $(this).addClass('p-selected').siblings().removeClass('p-selected');
        $('.detail-size').children().show();

    })

    $('.p-detail-QA').click(function () {
        $(this).addClass('p-selected').siblings().removeClass('p-selected');
        $('.problem').show().siblings().hide();
    })




    $('.about').click(function () {
        $(this).addClass('p-selected').siblings().removeClass('p-selected');
        $('.abouts').show().siblings().hide();
    })

    $(document).scroll(function () {
        var height=$('.d-nav').offset().top;
        if($(this).scrollTop() >=height){
            $('.fixed').show();
        }else{
            $('.fixed').hide();

        }
    })

    $('.list').on('click','li',function () {
        $(this).addClass('selected').siblings().removeClass('selected');
        var index=$(this).index();
        $('.fixed').hide();
        switch (index) {
            case 0:{
                $('.p-detail').click();
                break;
            }
            case 1:{
                $('.p-detail-kb').click();
                break;
            }
            case 2:{
                $('.p-detail-QA').click();
                break;
            }
            case 3:{
                $('.about').click();
                break;
            }
        }
    })

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

    $('.toTop').click(function () {
        // animate  动画返回顶部  页面元素做动画
        $('body,html').animate({
            scrollTop: 0
        });
    })

    $('.wp-my').hover(function () {
        $('.user-infor').show();
        $('.white').show()
    },function () {
        $('.user-infor').hide();
        $('.white').hide()
    })

    $('.tool').hover(function () {
        $('.tool-cn').show();
        $('.t-white').show();
    },function () {
        $('.tool-cn').hide();
        $('.t-white').hide();
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
    $('.side-item').on('click','a',function () {
        var className=$(this).attr('class');
        var url=location.origin+"/wph/";

        if(className.indexOf('index')!=-1){
            url=url+"index";
        }else if(className.indexOf('hd')!=-1||className.indexOf('more')!=-1){
            return false;
        }else{
            url=url+className;
        }
        window.open(url);
        return false;
    })


})
