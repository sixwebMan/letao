$(function () {

    // $('button[type=submit]').click(function (ecent) {
    //     // 阻止默认跳转
    //     event.preventDefault();
    //     $.ajax({
    //         url: "/employee/employeeLogin",
    //         // 创建以标准 URL 编码表示的文本字符串
    //         data: $("form").serialize(),
    //         type: 'post',
    //         success: function (backData) {
    //             console.log(backData);
    //         }
    //     })
    // })
    $('form').bootstrapValidator({
        // 设置样式 bootstrap
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        // 检验字段
        fields: {
            username: {
                validators: {
                    // 用户名不能为空
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                    //长度校验
                    stringLength: {
                        min: 3,
                        max: 12,
                        message: '用户名长度必须在3到12之间'
                    },
                    callback: {
                        message: '用户名不正确'
                    }

                }
            },
            password: {
                validators: {
                    // 密码不能为空
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    //长度校验
                    stringLength: {
                        min: 6,
                        max: 16,
                        message: '用户名长度必须在6到30之间'
                    },
                    callback: {
                        message: '密码错误'
                    }

                }
            }
        }
    }).on('success.form.bv', function (e) {
        e.preventDefault();
        // 开启精度条
        NProgress.start();
        $.ajax({
            url: "/employee/employeeLogin",
            // 创建以标准 URL 编码表示的文本字符串
            data: $("form").serialize(),
            type: 'post',
            success: function (backData) {
                // console.log(backData);
                //正确
                if (backData.success) {
                    window.location = './index.html';
                } else {
                    // 获取验证插件对象
                    var validator = $("form").data('bootstrapValidator');

                    if (backData.error == 1001) {
                        validator.updateStatus('password', 'INVALID', 'callback')

                    } else if (backData.error == 1000) {
                        validator.updateStatus('username', 'INVALID', 'callback')
                    }

                }
                setTimeout(function () {
                    // 收起进度条
                    NProgress.done();
                }, 1000)
            }
        })
    })

})