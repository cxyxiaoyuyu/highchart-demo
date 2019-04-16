{
    draw()
        $('.selected').change(function(){
            draw()
        })
    function draw(arg){
        var start_time = $('#start').val()
            var end_time = $('#end').val()
            console.log(start_time,end_time)
            if (end_time != '' && start_time != ''){
                console.log('data is ready')
                    data = {
                        'start' : start_time,
                        'end' : end_time,
                    }
                $.ajax({
                    type: 'post',
                    url: '/get_all_data/',
                    data: data,
                    success: function(data){
                        console.log(data['click&user']['system'])

                        var chart = {
                            type: 'bar'
                        }
                        var title = {
                            text: 'Clicks/Users'
                        }
                        var subtitle = {
                            text: 'Clicks/Users of System Usage',
                        }
                        // data categories clicks/users
                        var xAxis = {
                            categories: data['click&user']['system'],
                            title: {
                                //text: 'Systems'
                            },
                            labels: {
                                style: {
                                    fontSize: '12px',
                                    color: 'black'
                                }
                            }
                        }
                        var yAxis = {
                            min: 0,
                            title: {
                                text: 'Clicks/Users',
                                align: 'high'
                            },
                            labels: {
                                overflow: 'justify',
                                style: {
                                    fontSize: '12px',
                                    color: 'black'
                                }
                            }
                        }
                        var tooltip = {
                            valuesuffix: ''
                        };
                        var plotOptions = {
                            bar: {
                                dataLabels: {
                                    enabled: true,
                                    style: {
                                        color: 'black',
                                        fontSize: '9px'
                                    }
                                }
                            }
                        }
                        var cblackits = {
                            enabled: false
                        }
                        var series= [
                        {
                            name: 'Clicks',
                            // data clicks
                            data: data['click&user']['clicktimes']
                        },
                        {
                            name: 'Users',
                            // data users
                            data: data['click&user']['usercount']
                        }]
                        var credits = {
                            enabled: false
                        };
                        $('#clicks').highcharts({
                            chart,
                            title,
                            subtitle,
                            tooltip,
                            xAxis,
                            yAxis,
                            series,
                            credits,
                            plotOptions,
                            cblackits
                        })


                        Highcharts.chart('function', {
                            chart: {
                                type: 'bar',
                            },
                            title: {
                                text: 'Functions'
                            },
                            subtitle: {
                                text: 'Function usage of each system'
                            },
                            credits: {
                                enabled: false,
                            },
                            xAxis: {
                                type: 'category',
                                labels: {
                                    style: {
                                        color: 'black'
                                    }
                                },
                            },
                            yAxis: {
                                title: {
                                    text: 'clicks',
                                    style: {
                                        color: 'black'
                                    },
                                },
                                labels: {
                                    style: {
                                        color: 'black'
                                    }
                                },
                                gridLineColor: 'transparent'
                            },
                            legend: {
                                enabled: false
                            },
                            plotOptions: {
                                bar: {
                                    borderWidth: 0,
                                    dataLabels: {
                                        enabled: true,
                                        style: {
                                            color: 'black',
                                            fontSize: '10px',
                                            textOutline: 'none'
                                        },
                                        color: 'black',
                                    },
                                },
                                series: {
                                    color: 'black',
                                    style: {
                                        color: 'black',
                                    }
                                }
                            },
                            lang: {
                                drillUpText: 'Back To Function',
                                color: '#00b37e'
                            },
                            tooltip: {
                                headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
                                pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> of total<br/>'
                            },
                            "series": [
                            {
                                "name": "System",
                                "colorByPoint": true,
                                // data
                                "data": data['functionseries']
                            }
                            ],
                            "drilldown": {
                                drillUpButton: {
                                    position: {
                                        align: 'right',
                                        verticalAlign: 'top',
                                        x: 0,
                                        y: -40
                                    }
                                },
                                "series":data['functiondrilldown']
                            }
                        });

                        var chart = {
                            type: 'bar'
                        }
                        var title = {
                            text: 'Clicks/Users'
                        }
                        var subtitle = {
                            text: 'Clicks/Users of System Usage',
                        }
                        // data categories clicks/users
                        var xAxis = {
                            categories: data['click&user']['system'],
                            title: {
                                //text: 'Systems'
                            },
                            labels: {
                                style: {
                                    fontSize: '12px',
                                    color: 'black'
                                }
                            }
                        }
                        var yAxis = {
                            min: 0,
                            title: {
                                text: 'Clicks/Users',
                                align: 'high'
                            },
                            labels: {
                                overflow: 'justify',
                                style: {
                                    fontSize: '12px',
                                    color: 'black'
                                }
                            }
                        }
                        var tooltip = {
                            valuesuffix: ''
                        };
                        var plotOptions = {
                            bar: {
                                dataLabels: {
                                    enabled: true,
                                    style: {
                                        color: 'black',
                                        fontSize: '9px'
                                    }
                                }
                            },
                            series: {
                                stacking: 'normal'
                            }
                        }
                        var cblackits = {
                            enabled: false
                        }
                        var series= [
                        {
                            name: '非常不滿意',
                            data: [1,4,6,2,1],
                            color: 'black'
                        },
                        {
                            name: '不滿意',
                            data: [1,4,3,2,1],
                            color: 'blue'
                        },
                        {
                            name: '滿意',
                            data: [1,4,6,8,1],
                            color: 'purple'
                        },
                        {
                            name: '很滿意',
                            data: [1,4,5,1,1],
                            color: 'orange'
                        },
                        {
                            name: '非常滿意',
                            data: [1,3,4,6,7],
                            color: 'red'
                        }]
                        var credits = {
                            enabled: false
                        };
                        $('#questionnaire').highcharts({
                            chart,
                            title,
                            subtitle,
                            tooltip,
                            xAxis,
                            yAxis,
                            series,
                            credits,
                            plotOptions,
                            cblackits
                        })
                    }
                });
            }
    }
}
