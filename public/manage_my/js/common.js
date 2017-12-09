$(function () {
    // 做出判定是否登录 
    $.ajax({
        url: '/employee/checkRootLogin',
        success: function (backData) {
            // console.log(backData);
            // 根据返回数据可知 error=400为未登录
            if(backData.error == 400){
                window.location='./login.html';
            }
        }
    })


    // 点击菜单按钮开启关闭侧边栏
    $('.main .main-header a').first().click(function () {
        $('.ad_aside').toggle();
        $('.main').toggleClass('fulltoggle');
    })

    // 点击出现模态框
    $('.main .main-header a.glyphicon-log-out').click(function () {
        $('.modalfull').modal('show');
    })
    // 点击确定退出用户且进入登录页
    $('.modalfull button.btn-danger').click(function () {
        $('.modalfull').modal('hide');
        $.ajax({
            url: '/employee/employeeLogout',
            success: function (backData) {
                // 登出页面进入登录页面
                window.location = './login.html';
            }
        })

    })

    // 左侧栏目收起打开
    $('.ad_aside .menu ul>li:eq(1)>a').click(function () {
        console.log('点击我')
    })


})