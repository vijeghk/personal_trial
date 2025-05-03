fetch('./中国_省.geojson')
        .then(res => res.json())
        .then(geoJson => {
            echarts.registerMap('china', geoJson);
            initMap();
        });

    function initMap() {
        var myChart = echarts.init(document.getElementById('map_1'));

        var data = [
            {name: '上海', value: 100},
            {name: '重庆', value: 100},
            {name: '河北', value: 100},
            {name: '河南', value: 100},
            {name: '云南', value: 100},
            {name: '辽宁', value: 100},
            {name: '黑龙江', value: 100},
            {name: '湖南', value: 100},
            {name: '安徽', value: 100},
            {name: '山东', value: 100},
            {name: '新疆', value: 100},
            {name: '江苏', value: 100},
            {name: '浙江', value: 100},
            {name: '江西', value: 100},
            {name: '湖北', value: 100},
            {name: '广西', value: 100},
            {name: '甘肃', value: 100},
            {name: '山西', value: 100},
            {name: '内蒙古', value: 100},
            {name: '贵州', value: 100},
            {name: '广东', value: 100},
            {name: '青海', value: 100},
            {name: '西藏', value: 100},
            {name: '四川', value: 100},
            {name: '宁夏', value: 100},
            {name: '海南', value: 100},
            {name: '陕西', value: 100},
            {name: '吉林', value: 100}
        ];

        var toolTipData = [
            {name: "河北", value: [{name: "科学成就", value: "郭守敬《授时历》，张衡地动仪"}]},
            {name: "河南", value: [{name: "科学成就", value: "《齐民要术》，地动仪，司母戊鼎"}]},
            {name: "云南", value: [{name: "科学成就", value: "东川铜矿，金沙江考察，傣族医药"}]},
            {name: "辽宁", value: [{name: "科学成就", value: "冶铁，曲辕犁，辽阳海运"}]},
            {name: "黑龙江", value: [{name: "科学成就", value: "女真农业，耶律楚材地图法"}]},
            {name: "湖南", value: [{name: "科学成就", value: "楚文化发源地"}]},
            {name: "安徽", value: [{name: "科学成就", value: "华佗麻沸散，郭守敬历法"}]},
            {name: "山东", value: [{name: "科学成就", value: "毕昇活字印刷，贾思勰《齐民要术》"}]},
            {name: "新疆", value: [{name: "科学成就", value: "坎儿井，《回鹘药方》，《福乐智慧》"}]},
            {name: "江苏", value: [{name: "科学成就", value: "《梦溪笔谈》，祖冲之圆周率"}]},
            {name: "浙江", value: [{name: "科学成就", value: "苏轼西湖疏浚，秦九韶方程"}]},
            {name: "湖北", value: [{name: "科学成就", value: "《本草纲目》，芍陂工程"}]},
            {name: "甘肃", value: [{name: "科学成就", value: "《开元占经》，坎儿井，冶铁"}]},
            {name: "内蒙古", value: [{name: "科学成就", value: "游牧技术，璇玑玉衡"}]},
            {name: "贵州", value: [{name: "科学成就", value: "龙场九驿，万山汞矿"}]},
            {name: "广东", value: [{name: "科学成就", value: "蒲氏造船，屈大均农业"}]},
            {name: "青海", value: [{name: "科学成就", value: "《四部医典》，高原水利"}]},
            {name: "西藏", value: [{name: "科学成就", value: "藏医，时轮历，布达拉宫"}]},
            {name: "四川", value: [{name: "科学成就", value: "都江堰，邛崃天然气"}]},
            {name: "海南", value: [{name: "科学成就", value: "占城稻推广，黎医藤药"}]},
            {name: "陕西", value: [{name: "科学成就", value: "都江堰引水，《九章算术》"}]}
        ];

        var geoCoordMap = {
            '上海': [121.472644, 31.231706],
            '重庆': [106.551556, 29.56301],
            '河北': [115.502461, 39.045474],
            '河南': [113.665412, 34.757975],
            '云南': [102.712251, 25.040609],
            '辽宁': [123.429096, 41.796767],
            '黑龙江': [126.642464, 45.756967],
            '湖南': [111.482279, 28.19409],
            '安徽': [117.183042, 31.86119],
            '山东': [117.000923, 36.675807],
            '新疆': [87.617733, 43.792818],
            '江苏': [119.790825, 33.061636],
            '浙江': [120.153576, 29.287459],
            '江西': [115.892151, 28.676493],
            '湖北': [113.298572, 30.584355],
            '广西': [108.320004, 22.82402],
            '甘肃': [103.823557, 36.058039],
            '山西': [112.535555, 37.869529],
            '内蒙古': [111.670801, 40.818311],
            '贵州': [106.713478, 26.578343],
            '广东': [113.263802, 23.138215],
            '青海': [95.778916, 36.617144],
            '西藏': [91.132212, 29.660361],
            '四川': [103.0668, 30.5728],
            '宁夏': [106.278179, 37.46637],
            '海南': [110.33119, 19.331971],
            '陕西': [108.954065, 34.3457],
            '吉林': [125.3245, 43.8868]
        };

        function convertData(data) {
            var res = [];
            for (var i = 0; i < data.length; i++) {
                var geoCoord = geoCoordMap[data[i].name];
                if (geoCoord) {
                    res.push({
                        name: data[i].name,
                        value: geoCoord.concat(data[i].value)
                    });
                }
            }
            return res;
        }

        var option = {
            tooltip: {
                backgroundColor: '#333',
                borderColor: '#fff',
                borderWidth: 2,
                padding: [6, 8],
                textStyle: {
                    color: '#fff',
                    fontSize: 10,
                    fontFamily: 'Arial'
                },
                extraCssText: 'max-width: 240px; word-break: break-word;',
                trigger: 'item',
                formatter: function (params) {
                    let tooltipHtml = '';
                    for (let i = 0; i < toolTipData.length; i++) {
                        if (params.name === toolTipData[i].name) {
                            tooltipHtml += `<strong>${toolTipData[i].name}</strong><br>`;
                            for (let j = 0; j < toolTipData[i].value.length; j++) {
                                tooltipHtml += `${toolTipData[i].value[j].name}：${toolTipData[i].value[j].value}<br>`;
                            }
                            break;
                        }
                    }
                    return tooltipHtml || params.name;
                }
            },
            geo: {
                map: 'china',
                roam: true,
                label: { show: false },
                itemStyle: {
                    normal: {
                        areaColor: '#FFF8DC',
                        borderColor: '#002097'
                    },
                    emphasis: {
                        areaColor: '#fff'
                    }
                }
            },
            series: [{
                name: '',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: convertData(data),
                symbolSize: function (val) {
                    return val[2] / 15;
                },
                showEffectOn: 'render',
                rippleEffect: { brushType: 'stroke' },
                hoverAnimation: true,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'right',
                        show: true,
                        textStyle: {
                            fontSize: 8,
                            color: '#000'
                        }
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#ffeb7b'
                    }
                }
            }]
        };

        myChart.setOption(option);
        window.addEventListener("resize", function () {
            myChart.resize();
        });
    }