$(function () {
    var loginName=localStorage.getItem('login');
    $('.userName').val(loginName);
    function add(that,wrong,success,message,emessage){
        if(that.val()==''){
            wrong.addClass('wrong');
            success.removeClass('success');
            message.html(emessage);
            that.addClass('red');
        }else{
            wrong.removeClass('wrong');
            message.html('');
            that.removeClass('red');
        }
    }

    $('.navl').addClass('active');
    $('.navl').click(function () {
        $(this).addClass('active');
        $('.navr').removeClass('active');
        $('.tabL').removeClass('t-hide');
        $('.tabR').addClass('t-hide');
    });
    $('.navr').click(function () {
        $(this).addClass('active');
        $('.navl').removeClass('active');
        $('.tabL').addClass('t-hide');
        $('.tabR').removeClass('t-hide');
    });


    $('.moreBtn').click(function () {
        $('.more').toggleClass('t-hide');
        $('.more-expand').toggleClass('t-hide');
        $('.more-collapse').toggleClass('t-hide');
    })

    $('.userName').blur(function () {
        var str='请输入登录名';
        add($(this),$('.user-wrong'),$('.user-success'),$('.emessage'),str);

    });

        $('.passWord').blur(function () {
            var str='请输入密码';
                add($(this),$('.pass-wrong'),$('.pass-success'),$('.pmessage'),str);
        });


    $('.login-form-btn').click(function () {
        var result=true;
        var num;
        if($('.userName')==''){
            $('.userName').blur();
            return false;
        }
        if($('.passWord')==''){
            $('.passWord').blur();
            return false;
        }

         var data=getDate();
         $.each(data,function (index,ele) {
             if (ele.userName == $('.userName').val()&&ele.passWord==$('.passWord').val()) {
                    $('.message').html('');
                 localStorage.setItem('login',$('.userName').val());
                    if(!$('.remUser').prop('checked')){
                        // num=index;
                        // data.splice(index,1);
                        localStorage.setItem('login','');
                    }

                  result=true;
                 return false;
             } else {
                  result=false;
             }
         })


        if(result){
            localStorage.setItem('user',JSON.stringify(data));
            var url=location.origin+"/wph/index";
            location.href=url;
        }else{
            $('.message').html('登录账号或密码错误，请重新输入');
        }
    })
    $('.registerBtn').click(function () {
        var url=location.origin+'/wph/register';
        location.href=url;
    })



    $('.tabL').hover(function () {
        $('.img-wrapper').css('left','30px');
        $('.guide-img').stop().show();
    },function () {
        $('.img-wrapper').css('left','94px');
        $('.guide-img').stop().hide();
    })
})
