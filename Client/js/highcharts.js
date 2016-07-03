$(document).ready(function () {


    var Highchartstheme = {
        colors: ["#fff", "#90ee7e", "#f45b5b", "#7798BF", "#aaeeee", "#ff0066", "#eeaaee",
            "#55BF3B", "#DF5353", "#7798BF", "#aaeeee"],
        chart: {
            backgroundColor: {
                linearGradient: {x1: 0, y1: 0, x2: 0, y2: 1},
                stops: [
                    [0, 'rgb(255, 215, 0)'],
                    [1, 'rgb(250, 140, 0)']
                ]
            },
            borderWidth: 0,
            borderRadius: 0,
            plotBackgroundColor: null,
            plotShadow: false,
            plotBorderWidth: 0
        }
    };
    Highcharts.setOptions(Highchartstheme);

    $('#chart1').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: 'BMI',
            align: 'left'
        },
        xAxis: {
            categories: ['0', '12', '24']
        },
        yAxis: {
            title: {
                enabled: false
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5]
        }]
    });
    $('#chart2').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: '体重',
            align: 'left'
        },
        xAxis: {
            categories: ['0', '12', '24']
        },
        yAxis: {
            title: {
                enabled: false
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5]
        }]
    });
    $('#chart3').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: '脂肪',
            align: 'left'
        },
        xAxis: {
            categories: ['0', '12', '24']
        },
        yAxis: {
            title: {
                enabled: false
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5]
        }]
    });
    $('#chart4').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: '蛋白质',
            align: 'left'
        },
        xAxis: {
            categories: ['0', '12', '24']
        },
        yAxis: {
            title: {
                enabled: false
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5]
        }]
    });
    $('#chart5').highcharts({
        chart: {
            type: 'line'
        },
        title: {
            text: '基础代谢',
            align: 'left'
        },
        xAxis: {
            categories: ['0', '12', '24']
        },
        yAxis: {
            title: {
                enabled: false
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        legend: {
            enabled: false
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'Tokyo',
            data: [7.0, 6.9, 9.5]
        }]
    });

});
