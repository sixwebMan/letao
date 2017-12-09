$(function () {
    var page = 1;
    var pageSize = 5;

    function getData() {
        $.ajax({
            url: '/user/queryUser',
            data: {
                page: page,
                pageSize: pageSize,
            },
            success: function (backData) {
                // console.log(backData);
                // 渲染模板引擎
                $('tbody').html(template('user',backData));
                // 需求2 插入分页
            }
        })
    }

    getData();
})