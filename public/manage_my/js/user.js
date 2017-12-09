$(function () {
    var pageNum = 1;
    var pageSize = 5;

    function getData() {
        $.ajax({
            url: '/user/queryUser',
            data: {
                page: pageNum,
                pageSize: pageSize,
            },
            success: function (backData) {
                console.log(backData);
                // 渲染模板引擎
                $('tbody').html(template('user', backData));
                // 需求2 插入分页
                $("#pagintor").bootstrapPaginator({
                    bootstrapMajorVersion: 3, //默认是2，如果是bootstrap3版本，这个参数必填
                    currentPage: pageNum, //当前页
                    totalPages: Math.ceil(backData.total / backData.size), //总页数
                    size: "small", //设置控件的大小，mini, small, normal,large
                    onPageClicked: function (event, originalEvent, type, page) {
                        //为按钮绑定点击事件 page:当前点击的按钮值
                        //   console.log(page);
                        pageNum = page;
                        getData();

                    }
                });
            }
        })
    }

    getData();

    // 给禁用启用按钮提供点击事件
    $('tbody').on('click', 'button', function () {
        // console.log('click');
        // 获取上传的自定义属性
        var myId = $(this).parent().attr('data-id');
        //   console.log(id)
        var isDelete = undefined;
        if ($(this).html()=='启用') {
            // 如果是启用的改为禁用
            isDelete = 0;
        }else{
            isDelete = 1;
        }
        $.ajax({
            url:'/user/updateUser',
            data:{
                id:myId,
                isDelete:isDelete
            },
            type:'post',
            success: function (backData) {

                getData();
              }

        })
    })
})