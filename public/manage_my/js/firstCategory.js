$(function () {
    var pageNum = 1;
    var pageSize = 5;

    function getData() {
        $.ajax({
            url: '/category/queryTopCategoryPaging',
            data: {
                page: pageNum,
                pageSize: pageSize
            },
            success: function (backData) {
                console.log(backData);
                $('tbody').html(template('first', backData));
                // 添加分页
                $("#pagintor").bootstrapPaginator({
                    bootstrapMajorVersion: 3, //默认是2，如果是bootstrap3版本，这个参数必填
                    currentPage: pageNum, //当前页
                    totalPages: Math.ceil(backData.total / backData.size), //总页数
                    size: "small", //设置控件的大小，mini, small, normal,large
                    onPageClicked: function (event, originalEvent, type, page) {
                        //为按钮绑定点击事件 page:当前点击的按钮值
                        pageNum = page;
                        getData();
                    }
                });
            }
        })
    }
    getData();

    // 给点击添加设置事件 弹出模态框
    $('form').bootstrapValidator({
        // 设置样式 bootstrap
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        // 检验字段
        fields: {
            categoryName: {
                validators: {
                    // 用户名不能为空
                    notEmpty: {
                        message: '分类名不能为空'
                    }
                }
            }
        }
    }).on('success.form.bv', function (e) {
        e.preventDefault();
        // 开启精度条
        $.ajax({
            url: "/category/addTopCategory",
            // 创建以标准 URL 编码表示的文本字符串
            data: $("form").serialize(),
            type: 'post',
            success: function (backData) {
                // 隐藏模态框
               $('.modal-add').modal('hide');
            //    刷新页面
               getData();
            }
        })
    })

})