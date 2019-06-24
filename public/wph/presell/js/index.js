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
    
})