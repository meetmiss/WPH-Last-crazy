$(function () {
    var flag=false;
    var result=true;
    $('.user').blur(function () {
        if($(this).val().trim()!=""){
            var reg = /^1[3|4|5|7|8][0-9]{9}$/; //验证规则
            var flags = reg.test($(this).val());
            if(flags){
                $('.iuserError').removeClass('wrong');
                $('.iuserOk').addClass('success');
                $('.u-input-tip').html('');
                $(this).removeClass('red');
                $('#btn').css('cursor','pointer').addClass('ui-btn-secondary');
                flag=true;
            }else{
                $('.iuserError').addClass('wrong');
                $('.u-input-tip').html('请输入正确的手机号码');
                $(this).addClass('red');
                $('#btn').css('cursor','not-allowed').removeClass('ui-btn-secondary');
                flag=false;
            }
        }else{
            $('.iuserError').addClass('wrong');
            $('.iuserOk').removeClass('success');
            $('.u-input-tip').html('手机号不能为空');
            $('#btn').css('cursor','not-allowed').removeClass('ui-btn-secondary');
            $(this).addClass('red');
            flag=false;
        }

    });


    $('.toLogin').click(function () {
        var url=location.origin+"/wph/login";
        location.href=url;
    })
    var dsq;
    var a=0;

    $('#btn').click(function () {
        var str='';
        if(a>=1){
            return;
        }
        a++;
        clearInterval(dsq);
        if(flag){
            $(this).css('cursor','pointer');
            var time=Number.parseInt(Math.random()*10000);
            setTimeout(function () {
                var len=6;
                for(var i=0;i<len;i++){
                    str+=Number.parseInt(Math.random()*10);
                }
                $('.u-input-code').html('验证码已发送，注意查收');
                alert('您的验证码是：'+str);
                localStorage.setItem('str',str);
            },time);

            var num=60;
            dsq=  setInterval(function () {
              var str='<span>'+num+'</span>'+'秒后重新获取';
              $('#btn').html(str);
                num--;
                if(num==0){
                    $('#btn').html('获取验证码');
                    a=0;
                    clearInterval(dsq);
                    localStorage.setItem('str','');
                    return;
                }
            },1000)
        }

    })

    $('.code').blur(function () {
        if($(this).val().trim()!="") {
            var reg = /^\d{6}\b/;
            if(reg.test($(this).val())){
                var yzm=localStorage.getItem('str');
                if($(this).val()!=yzm){
                    $('.icodeOk').removeClass('success');
                    $('.icodeError').addClass('wrong');
                    $(this).addClass('red');
                    $('.u-input-code').html('请输入正确的手机验证码');
                }else{
                    $('.icodeOk').addClass('success');
                    $('.icodeError').removeClass('wrong');
                    $(this).removeClass('red');
                    $('.u-input-code').html('');
                }

            }else{
                $('.icodeOk').removeClass('success');
                $('.icodeError').addClass('wrong');
                $(this).addClass('red');
                $('.u-input-code').html('请输入6位数字手机验证码');
            }
        }else{
            $('.icodeOk').removeClass('success');
            $(this).addClass('red');
            $('.icodeError').addClass('wrong');
            $('.u-input-code').html('请输入6位数字手机验证码');
        }

    })

    $('.password').focus(function () {
        if($(this).val()==''){
            $('.password-tip').html('密码需要两种字符表示！');
        }

    });

    var pflag=false;
    $('.password').keyup(function () {
        var passWord=$(this).val();
        var regNumber = /\d+/; //验证0-9的任意数字最少出现1次。
        var regString = /[a-zA-Z]+/; //验证大小写26个字母任意字母最少出现1次。

        //验证第一个字符串
        if(passWord==""){
            $('.password-tip').html('密码不能为空');
            $('.lead').hide();
            pflag=false;
        }else{
            $('.lead').show();
            $('.l_bg').show();
            if(passWord.length<6){
                $('.password-tip').html('请输入6-20位密码');
                $('.text-weak').show().siblings('.indicator-text').hide();
                $('.l_body').removeClass('medium');
                $('.l_body').removeClass('strong');
                pflag=false;
            }else{
                if (regNumber.test(passWord) && regString.test(passWord)) {
                    if(passWord.length<12){
                        $('.password-tip').html('密码安全强度适中');
                        $('.text-medium').show().siblings('.indicator-text').hide();
                        $('.l_body').addClass('medium');
                        $('.l_body').removeClass('strong');
                        pflag=true;
                    }else if(passWord.length<18){
                        $('.password-tip').html('你的密码很安全');
                        $('.text-strong').show().siblings('.indicator-text').hide();
                        $('.l_body').addClass('strong');
                        $('.l_body').removeClass('medium');
                        pflag=true;
                    }else{
                        return;
                    }
                }else if (regString.test(passWord)||regNumber.test(passWord)){
                    $('.text-weak').show().siblings('.indicator-text').hide();
                    $('.password-tip').html('密码过于简单,请输入复杂密码');
                    pflag=false;
                }
            }
        }


    })

    $('.password').blur(function () {
            if(pflag){
                $('.pOk').addClass('success');
                $('.pError').removeClass('wrong');
                $(this).removeClass('red');
                $('.password-tip').css('color','#666');
            }else{
                $('.pOk').removeClass('success');
                $('.pError').addClass('wrong');
                $(this).addClass('red');
                $('.password-tip').css('color','#f64a4a');
            }
    });

    $('.confirmPassword').blur(function () {
        if($(this).val().trim()!=''){
                if($(this).val()!=$('.password').val()){
                    $('.cpassOk').removeClass('success');
                    $('.cpassError').addClass('wrong');
                    $(this).addClass('red');
                    $('.u-input-cpassword').html('两次输入的密码不一致，请重试');
                }else{
                    $('.cpassOk').addClass('success');
                    $('.cpassError').removeClass('wrong');
                    $(this).removeClass('red');
                    $('.u-input-cpassword').html('');
                }
        }else{
            $('.cpassOk').removeClass('success');
            $('.cpassError').addClass('wrong');
            $(this).addClass('red');
            $('.u-input-cpassword').html('请输入确认密码');
        }
    })

    $('.ui-checkbox-normal').change(function () {
        if(!$(this).prop('checked')){
            $('.u-input-agree').html('接受服务条款才能注册');
            result=false;
        }else{
            $('.u-input-agree').html('');
            result=true;
        }
    })

        $('.reg-form-btn').click(function () {
            if($('.user').val().trim()==''){
                $('.user').blur();
                return;
            }
            if($('.code').val().trim()==''){
                $('.code').blur();
                return;
            }
            if($('.password').val().trim()==''){
                $('.password').keyup();
                return;
            }
            if($('.confirmPassword').val().trim()==''){
                $('.confirmPassword').blur();
                return;
            }
            if(!$(this).prop('checked')){
                $('.ui-checkbox-normal').change();

            }
            var userName=$('.user').val();
            var passWord=$('.password').val();
           var data=getDate();
           var obj={
               'userName':userName,
               'passWord':passWord
           }


            $.each(data,function (index,ele) {
                if(ele.userName==userName){
                    alert('此用户已注册，请登录！');
                    result=false;
                    return false;
                }
            })
            if(result){
                data.push(obj);
                localStorage.setItem('user',JSON.stringify(data));
                var url=location.origin+"/wph/login/";
                location.href=url;
            }

        })




})
