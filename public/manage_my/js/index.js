$(function () {
    // 基于准备好的dom，初始化echarts实例
    var myChartLeft = echarts.init(document.getElementById('main-left'));

    // 指定图表的配置项和数据
    var optionLeft = {
        title: {
            text: '2017年注册人数'
        },
        tooltip: {},
        legend: {
            data: ['人数']
        },
        xAxis: {
            data: ["1月", "2月", "3月", "4月", "5月", "6月"]
        },
        yAxis: {},
        series: [{
            name: '销量',
            type: 'bar',
            data: [1000, 2000, 3600, 1400, 1200, 2300]
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    myChartLeft.setOption(optionLeft);



    var myChartRight = echarts.init(document.getElementById('main-right'));
    optionRight = {
        title : {
            text: '某站点用户访问来源',
            subtext: '纯属虚构',
            x:'center'
        },
        tooltip : {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            left: 'left',
            data: ['阿迪','安踏','百伦','李宁','耐克']
        },
        series : [
            {
                name: '访问来源',
                type: 'pie',
                radius : '55%',
                center: ['50%', '60%'],
                data:[
                    {value:335, name:'阿迪'},
                    {value:310, name:'安踏'},
                    {value:234, name:'百伦'},
                    {value:135, name:'李宁'},
                    {value:1548, name:'耐克'}
                ],
                itemStyle: {
                    emphasis: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    myChartRight.setOption( optionRight);
})
