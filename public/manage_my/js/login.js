$(function () {
    $('button[type=submit]').click(function (ecent) {
        // 阻止默认跳转
        event.preventDefault();
        $.ajax({
            url:"/employee/employeeLogin",
            // 创建以标准 URL 编码表示的文本字符串
            data:$("from").serialize(),
            type:'post',
            success:function (backData) {
                console.log(backData);
              }
        })
      })
  })