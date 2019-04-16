(() => {
    //datetime
    $("#start").datetimepicker({
        format: 'yyyy-mm-dd hh:00',
        minView: 1,
        autoclose: true,
        todayHighlight: true,
        endDate: new Date()
    }).on('changeDate',function(e){
        var startTime = e.date
            $('#end').datetimepicker('setStartDate',startTime);
    });
    $("#end").datetimepicker({
        format: 'yyyy-mm-dd hh:00',
        minView: 1,
        autoclose: true,
        todayHighlight: true,
        endDate: new Date(new Date().getTime() + 1 * 60 * 60 * 1000)
    }).on('changeDate',function(e){
        var endTime = e.date;
        $('#start').datetimepicker('setEndDate',endTime);
    });


    let view = $('#server_detail')
    let controller = {
        view: null,
        json: function(){
            return {
                title: (function(){
                    let obj = {}
                    server_list.forEach(function(server){
                        obj[server] = {'text': server}
                    })
                    return obj
                }).call(),

                xAxis: xAxis,

                yAxis: {
                    title: {
                        text: 'Use Rate (%)'
                    }
                },
                tooltip: {
                    valueSuffix: '%',
                },
                plotOptions: {
                    line: {
                        dataLabels: {
                            enabled: false
                        },
                        enableMouseTracking: true
                    },
                    series: {
                        marker: {
                            enabled: false,
                            radius: 5,
                        },
                    },
                },
                credits: {
                    enabled: false
                },
                series: detail_series
            }
        },
        initial: function(view){
            this.view = view
                this.bindEvents()
        },
        bindEvents: function(){
            view = this.view
                json = this.json()
                server_list.forEach(function(server){
                    $(document.getElementById(server)).highcharts({
                        title: json.title[server],
                        xAxis: json.xAxis[server],
                        yAxis: json.yAxis,
                        plotOptions: json.plotOptions,
                        series: json.series[server],
                        tooltip: json.tooltip,
                        credits: json.credits
                    })
                })
        }
    }

    function getBeforeDate(n) {
        var n = n;
        var d = new Date();
        var year = d.getFullYear();
        var mon = d.getMonth() + 1;
        var day = d.getDate();
        if(day <= n) {
            if(mon > 1) {
                mon = mon - 1;
            } else {
                year = year - 1;
                mon = 12;
            }
        }
        d.setDate(d.getDate() - n);
        year = d.getFullYear();
        mon = d.getMonth() + 1;
        day = d.getDate();
        mon = mon < 10 ? ('0' + mon) : mon;
        day = day < 10 ? ('0' + day) : day;
        s = year + "-" + (mon < 10 ? ('0' + mon) : mon) + "-" + (day < 10 ? ('0' + day) : day);
        $("#start").attr('value',year+'-'+mon+'-'+day+' '+d.getHours()+':00')

        var mydate = new Date
        year = mydate.getFullYear()
        month = mydate.getMonth() + 1
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        date = mydate.getDate()
        if (date >= 0 && date <= 9) {
            date = '0' + date;
        }
        hour = mydate.getHours()
        $("#end").attr('value',year+'-'+month+'-'+date+' '+hour+':00')
    }

    getBeforeDate(1)
    draw()

    function draw(){
        let start_time = $('#start').val()
        let end_time = $('#end').val()

        console.log('draw')
        console.log(start_time,end_time)

        if(start_time!=='' && end_time!==''){
            data = {'start':start_time,'end':end_time}
            get_detail_data(data)
        }
    }

    function get_detail_data(data){
        $.ajax({
            url: '/get_detail_data/',
            type: 'POST',
            data: data
        }).then( (result)=>{
                window.time_list = result[0]
                console.log(time_list)

                var raw_detail_series = result[1]
                console.log(raw_detail_series)

                window.xAxis = {}
            server_list.forEach(function(server){
                console.log(time_list[server].length)
                    console.log(parseInt(time_list[server].length/8))
                    xAxis[server] = {
                        'categories': time_list[server],
                        'type': 'datetime',
                        'labels':{ "step": parseInt(time_list[server].length/7) }

                    }
            })

            window.detail_series = {}
            server_list.forEach(function(server){
                detail_series[server] = []
                    for(name in raw_detail_series){
                        try{
                            detail_series[server].push({
                                'name': name,
                                'data': raw_detail_series[name][server].map((value)=>{return parseFloat(value)})
                            })
                        }
                        catch{
                            console.log('error')
                        }
                    }
            })
            controller.initial(view)
        })
    }

    $('.selected').change(function(){
        console.log('change')
        draw()
    })

}).call()

