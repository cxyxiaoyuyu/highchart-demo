(() => {
    let view = $('#server_container')
    let controller = {
        view: null,
        json: {
            chart: {
                type: 'column',
                events: {
                    load: function(){
                            var series = this.series
                            setInterval(function(){
                                var data = []
                                $.ajax({
                                    type: 'POST',
                                    url: '/get_server_data/',
                                    success: function(result){
                                        console.log(result[1])
                                        series.forEach(function(value){
                                            value.setData(result[1][value.name])
                                        })
                                    }
                                })
                            },2000)
                    }
                }
            },
            title: {
                text: 'Server Health Status'
            },
            xAxis: {
                categories: server_list,
                crosshair: true,
                labels: {
                    style: {
                        cursor: 'pointer',
                    }
                }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Use Rate(%)'
                }
            },
            tooltip: {
                headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
                pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                    '<td style="padding:0"><b>{point.y:.1f}%</b></td></tr>',
                footerFormat: '</table>',
                shared: true,
                useHTML: true,
            },
            plotOptions: {
                column: {
                    dataLabels: {
                        enabled: true,
                        formatter: function() {
                            return this.y + '%'
                        }
                    },
                    pointPadding: 0.2,
                    borderWidth: 0,
                    events: {
                        click: function(e){
                            server_ip = e.point.category
                            server = document.getElementById(server_ip)
                            scroll_top = $(server).position().top - 50
                            $("html,body").animate({scrollTop:scroll_top},500)
                        }
                    }
                },
            },
            credits: {
                enabled: false
            },
            series: [{
                name: 'CPU',
            },
            {
                name: 'Memory',
            },
            {
                name: 'Disk',
            }]
        },
        initial: function(view){
            this.view = view
            this.bindEvents()
        },
        bindEvents: function(){
            view = this.view
            json = this.json
            view.highcharts(json)

        }
    }
    controller.initial(view)

}).call()
