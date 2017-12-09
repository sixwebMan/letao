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
    window.location='./login.html';
})

// 左侧栏目收起打开
$('.ad_aside .menu ul>li:eq(1)>a').click(function () {
    console.log('点击我')
  })