$(function (){
	// 开售隐藏提示
	$('.main .bd li').hover (function (){
		$(this).children('.last').stop().fadeIn(200).siblings('.first').stop().fadeOut(200)
	},function (){
		$(this).children('.last').stop().fadeOut(200).siblings('.first').stop().fadeIn(200);
		$(this).children('.hide').hide()
	})
	// 左侧电梯控制
	var flag=true;
	$(document).scroll(function (){
		// 左侧定位转换
		
		var rTop=$('.main').offset().top;
		if ($(this).scrollTop()>=rTop){
			$('.left-floor').css({
				position:'fixed',
				top: 150,
				left:$('.left-floor').offset().left
			})
		}else {
			$('.left-floor').css({
				position:'absolute',
				top:72,
				left:30
			})
		};
		// 滚动决定左边li
		if (flag){
			$('.main .w').each(function (index){
			if ($(document).scrollTop()>=$(this).offset().top){
				$('.left-floor li').eq(index).addClass('left-change').siblings('li').removeClass('left-change')
			}
		})
		}

	});


	// 左侧控制右边位置
		$('.left-floor li').click(function (){
			flag=false;
			var index=$(this).index();
			var juli=$('.main .w').eq(index).offset().top;
			$('body,html').animate({
				scrollTop:juli
			},200,function (){
				flag=true
			});
			$(this).addClass('left-change').siblings('li').removeClass('left-change')

		})

		// 左侧文字变化
		$('.left-floor li').hover(function (){
			var change=$(this).prop('class')
			if (change){
				return
			}else {
				$(this).addClass('hover').siblings('li').removeClass('hover')
			}
		},function (){
			$(this).removeClass('hover')
		});
		// 输入内容
		$('.main .last input').focus(function(){
			if ($(this).val()==''){
				$(this).parent('.last').siblings('.hide').show()
			}else if($(this).val()!=''){
				$(this).parent('.last').siblings('.hide').hide()
			}
		});
		$('.main .last input').keydown(function (e){
			$(this).parent('.last').siblings('.hide').hide()
					if (e.keyCode==13){
						$('.d-denglu').stop().fadeIn()
					}
		})
		// 登录出现
		$('.main .last .btn').click(function (){
					$('.d-denglu').stop().fadeIn()
		})
		// 登录关闭
		$('.denglu .off').click(function (){
			$(this).parents('.d-denglu').hide()
		})
		// // 切换身体
		$('.denglu .dl-top span').click(function (){
			$(this).addClass('current').siblings('span').removeClass('current');
			console.log($(this).index())
			if ($(this).index()==1){
				$('.denglu .dl-bd1').show().siblings('.dl-bd2').hide()
			}else{
				$('.denglu .dl-bd2').show().siblings('.dl-bd1').hide()
			}
		})
		// 二维码移动
		$('.denglu .dl-bd1').hover(function (){
			$(this).children('.erweima').css({
				transform:'translate(-90px)'
			}).siblings('.soyisao').stop().fadeIn(1000)
		},function (){
			$(this).children('.soyisao').stop().fadeOut().siblings('.erweima').css({
				transform:'translate(0px)'
			})
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