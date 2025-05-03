 $(window).load(function(){  
             $(".loading").fadeOut()
            })  
			
/****/
$(document).ready(function(){
	var whei=$(window).width()
	$("html").css({fontSize:whei/20})
	$(window).resize(function(){
		var whei=$(window).width()
	 $("html").css({fontSize:whei/20})
});
	});


 $(window).load(function(){$(".loading").fadeOut()})  
$(function () {

echarts_3()
echarts_4()
bt01()
bt02()
bt03()
bt04()
bt05()

function echarts_4() {
 var myChart = echarts.init(document.getElementById('echart4'));
option1= {
  //  backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    legend: {
        data: ['发明', '文献'],
		top:'5%',
        textStyle: {
            color: "#fff",
		    fontSize: '12',

        },
 
        //itemGap: 35
    },
    grid: {
        left: '0%',
		top:'40px',
        right: '0%',
        bottom: '0',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
      		data: ['夏', '商', '周', '春秋战国', '秦汉', '三国两晋', '隋唐','宋元','明清'],
        axisLine: {
            show: true,
         lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
            },
        },
        axisTick: {
            show: false,
        },
		axisLabel:  {
                interval: 0,
               // rotate:50,
                show: true,
              //  splitNumber: 2,
                textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
            },
    }],
    yAxis: [
		{
        type: 'value',
        axisLabel: {
           //formatter: '{value} %'
			show:true,
			 textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
               color: "rgba(255,255,255,.1)",
            }
        }
    }],
    series: [
		
		{
        name: '发明',
        type: 'line',
		 smooth: true,
        data: [1,2,2,6,13,2,6,4,8],
		barWidth:'15',
       // barGap: 1,
        itemStyle: {
            normal: {
                color:'#62c98d',
                opacity: 1,
				barBorderRadius: 5,
            }
        }
    },
		{
        name: '文献',
        type: 'line',
 smooth: true,
        data: [2, 2, 2, 9, 4, 7,9,11,11],

        itemStyle: {
            normal: {
                color:'#ffc000',
                opacity: 1,
				
				barBorderRadius: 5,
            }
        }
    }
	]
};


        myChart.setOption(option1);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
	$(".sebtn a").click(function(){
$(this).addClass("active").siblings().removeClass("active")
})
$(".sebtn a").eq(0).click(function(){
	 myChart.setOption(option1);
})
$(".sebtn a").eq(1).click(function(){
	 myChart.setOption(option2);
})
$(".sebtn a").eq(2).click(function(){
	 myChart.setOption(option3);
})
	
    }
function echarts_3() {
 var myChart = echarts.init(document.getElementById('echart3'));
var spNum = 5,_max=100;
var legendData = ['已完成', '未完成'];
var y_data = ['天文学', '数学', '医学', '物理与工程'];

  var data1 = [4,3,4,3];
  var data2 = [1,1,1,2];
  
var fomatter_fn = function(v) {
    return (v.value / _max * 100).toFixed(0) 
}
var _label = {
    normal: {
        show: true,
        position: 'inside',
        formatter: fomatter_fn,
        textStyle: {
            color: '#fff',
            fontSize: 12
        }
    }
};
option = {

    grid: {
        containLabel: true,
        top: 10,
        left: 0,
        right: 15,
        bottom:-10
    },
    tooltip: {
        show: true,
        formatter:'{b}<br/>{a}:{c}'
    },
    xAxis: {
        splitNumber: spNum,
       // interval: _max / spNum,
        //max: _max,
        axisLabel: {
            show: false,
            formatter: function(v) {
                var _v = (v / _max * 100).toFixed(0);
                return _v == 0 ? _v : _v + '%';
            }
        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }

    },
    yAxis: [{
        data: y_data,
        axisLabel: {
            fontSize: 14,
            color: 'rgba(255,255,255,.6)'

        },
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    }, {
        show: false,
        data: y_data,
        axisLine: {
            show: false
        }
    }],
    series: [{
        type: 'bar',
        name: '已完成',
        stack: '2',
        label: _label,
        legendHoverLink: false, barWidth: '50%',
        itemStyle: {
            normal: {
                color: '#58c485'
            },
            emphasis: {
                color: '#58c485'
            }
        },
        data: data1
    }, {
        type: 'bar',
        name: '未完成',
        stack: '2',
        legendHoverLink: false, barWidth: '50%',
        label: _label,
        itemStyle: {
            normal: {
                color: '#ea7231'
            },
            emphasis: {
                color: '#ea7231'
            }
        },
        data: data2
    }]
};
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

//饼
function bt01() {
 var myChart = echarts.init(document.getElementById('bt01'));
	var data1=51//China
var data2=49//未完成
var data3=data1/(data1+data2)*100
option = {
    title: [{
          text: data3.toFixed(1)+'%',
        x: 'center', y: '54%',
        textStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            fontStyle: 'normal',
            color: '#fff'
        }
    }, {
        text: '中国成就',
        x: 'center', y: '68%',
        textStyle: {
            fontSize: 8,
            fontWeight: 'normal',
            fontStyle: 'normal',
            color: 'rgba(255,255,255,.6)'
        }

    }, {
        text: '公元前6世纪之前',
        x: 'center',  y: '20',
        textStyle: {
            fontSize: 10,
            fontWeight: 'bold',
            color: '#fff'
        }

    }],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    color: ['#58c485', '#ea7231'],
    series: [
		{
        name: '成就数（约）',
        type: 'pie', center: ['50%', '65%'], radius: ['45%', '60%'],
        startAngle: 360,
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: false,
                textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
                value: data1,
                name: '中国'
            },
            {
                value: data2,
                name: '国外'

            },


        ]

    }]

};
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function bt02() {
 var myChart = echarts.init(document.getElementById('bt02'));
var data1=89//己完成
var data2=65//未完成
var data3=data1/(data1+data2)*100
option = {
    title: [{
          text: data3.toFixed(1)+'%',
        x: 'center', y: '54%',
        textStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            fontStyle: 'normal',
            color: '#fff'
        }
    }, {
        text: '中国成就',
        x: 'center', y: '68%',
        textStyle: {
            fontSize: 8,
            fontWeight: 'normal',
            fontStyle: 'normal',
            color: 'rgba(255,255,255,.6)'
        }

    }, {
        text: '公元前6世纪至前1世纪',
         x: 'center',  y: '20',
        textStyle: {
            fontSize: 10,
            fontWeight: 'bold',
            color: '#fff'
        }

    }],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    color: ['#58c485', '#ea7231'],
    series: [
		{
        name: '成就数（约）',
        type: 'pie', center: ['50%', '65%'], radius: ['45%', '60%'],
        startAngle: 360,
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: false,
                textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
                value: data1,
                name: '中国'
            },
            {
                value: data2,
                name: '国外'

            },


        ]

    }]

};
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function bt03() {
 var myChart = echarts.init(document.getElementById('bt03'));
var data1=120//己完成
var data2=51//未完成
var data3=data1/(data1+data2)*100
option = {
    title: [ {
        text: data3.toFixed(1)+'%',
        x: 'center', y: '54%',
        textStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            fontStyle: 'normal',
            color: '#fff'
        }
    },
			{
        text: '中国成就',
        x: 'center', y: '68%',
        textStyle: {
            fontSize: 8,
            fontWeight: 'normal',
            fontStyle: 'normal',
            color: 'rgba(255,255,255,.6)'
        }

    }, {
        text: '公元401年至1000年',
         x: 'center',  y: '20',
        textStyle: {
            fontSize: 10,
            fontWeight: 'bold',
            color: '#fff'
        }

    }],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    color: ['#58c485', '#ea7231'],
    series: [
		{
        name: '成就数（约）',
        type: 'pie', center: ['50%', '65%'], radius: ['45%', '60%'],
        startAngle: 360,
        avoidLabelOverlap: false,
        label: {show: false,
           
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [
            {
                value: data1,
                name: '中国'

            },{
                value: data2,
                name: '国外'
            },
        ]

    }]

};
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }

function bt04() {
 var myChart = echarts.init(document.getElementById('bt04'));
var data1=151//己完成
var data2=108//未完成
var data3=data1/(data1+data2)*100
option = {
    title: [{
         text: data3.toFixed(1)+'%',
        x: 'center', y: '54%',
        textStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            fontStyle: 'normal',
            color: '#fff'
        }
    }, {
        text: '中国成就',
        x: 'center', y: '68%',
        textStyle: {
            fontSize: 8,
            fontWeight: 'normal',
            fontStyle: 'normal',
            color: 'rgba(255,255,255,.6)'
        }

    }, {
        text: '公元1001年至1500年',
         x: 'center',
        y: '20',
        textStyle: {
            fontSize: 10,
            fontWeight: 'bold',
            color: '#fff'
        }

    }],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    color: ['#58c485', '#ea7231'],
    series: [
		{
        name: '成就数（约）',
        type: 'pie',
        center: ['50%', '65%'], radius: ['45%', '60%'],
        startAngle: 360,
        avoidLabelOverlap: false,
        label: {
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: false,
                textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            }
        },
        labelLine: {
            normal: {
                show: false
            }
        },
        data: [{
                value: data1,
                name: '中国'
            },
            {
                value: data2,
                name: '国外'

            },


        ]

    }]

};
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
})

function bt05() {
 var myChart = echarts.init(document.getElementById('bt05'));
 var data1 = 201; // 中国成就数
 var data2 = 489; // 国外成就数
 var data3 = data1 / (data1 + data2) * 100;

 var option = {
    title: [{
        text: data3.toFixed(1) + '%',
        x: 'center', y: '54%',
        textStyle: {
            fontSize: 18,
            fontWeight: 'bold',
            color: '#fff'
        }
    }, {
        text: '中国成就',
        x: 'center', y: '68%',
        textStyle: {
            fontSize: 8,
            color: 'rgba(255,255,255,.6)'
        }
    }, {
        text: '公元1501年至1900年',
        x: 'center', y: '20',
        textStyle: {
            fontSize: 10,
            fontWeight: 'bold',
            color: '#fff'
        }
    }],
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    color: ['#58c485', '#ea7231'],
    series: [{
        name: '成就数（约）',
        type: 'pie',
        center: ['50%', '65%'], radius: ['45%', '60%'],
        startAngle: 360,
        avoidLabelOverlap: false,
        label: { show: false },
        labelLine: { show: false },
        data: [
            { value: data1, name: '中国' },
            { value: data2, name: '国外' }
        ]
    }]
 };

 myChart.setOption(option);
 window.addEventListener("resize", function () {
    myChart.resize();
 });
}





		
		
		


		



















