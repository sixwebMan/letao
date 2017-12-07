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

                }
            }
        }
    })

})