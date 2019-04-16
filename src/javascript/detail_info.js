{
  draw()
  $('.selected').change(function(){
    draw('all')
  })
  
  function draw(){
    //datetime
    $("#start").datetimepicker({
      format: 'yyyy-mm-dd hh:00',
      minView: 1,
      autoclose: true,
      todayHighlight: true,
      endDate: new Date()
    }).on('changeDate',function(e){
      var startTime = e.date;
      $('#end').datetimepicker('setStartDate',startTime);
    });
    $("#end").datetimepicker({
      format: 'yyyy-mm-dd hh:00',
      minView: 1,
      autoclose: true,
      todayHighlight: true,
      endDate: new Date(new Date().getTime() + 1 * 60 * 60 * 1000)
    }).on('changeDate',function(e){
      console.log(e)
      var endTime = e.date;
      console.log(endTime)
      $('#start').datetimepicker('setEndDate',endTime);
    });
    
    
    Highcharts.chart('function', {
      chart: {
        type: 'column',
        backgroundColor: '#12194c'
      },
      title: {
        text: 'Function(drilldown)',
        style: {
          color: 'white',
          fontSize: '16px'
        }
      },
      subtitle: {
        text: 'function usage detail',
        style: {
          color: 'white',
          fontSize: '13px'
        }
      },
      xAxis: {
        type: 'category',
        labels: {
          style: {
            color: 'white'
          }
        }
      },
      yAxis: {
        title: {
          text: 'Clicks',
          style: {
            color: 'white'
          }
        },
        labels: {
          style: {
            color: 'white'
          }
        },
        gridLineColor: '#12194c'
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        column: {
          borderWidth: 0,
          dataLabels: {
            enabled: true,
            style: {
              color: 'white',
              fontSize: '10px',
              textOutline: 'none'
            }
          },
        },
      },
      tooltip: {
        backgroundColor: '#fff',
        borderWidth: 2,
        enabled : true,
      },
      lang: {
        drillUpText: 'Back To Function',
        color: '#00b37e'
      },      
      series: [
        {
          name: "Browsers",
          colorByPoint: true,
          data: [
            {
              name: "Chrome",
              y: 62.74,
              drilldown: "Chrome"
            },
            {
              name: "Firefox",
              y: 10.57,
              drilldown: "Firefox"
            },
            {
              name: "Internet Explorer",
              y: 7.23,
              drilldown: "Internet Explorer"
            },
            {
              name: "Safari",
              y: 5.58,
              drilldown: "Safari"
            },
            {
              name: "Edge",
              y: 4.02,
              drilldown: "Edge"
            },
            {
              name: "Opera",
              y: 1.92,
              drilldown: "Opera"
            },
            {
              name: "Other",
              y: 7.62,
              drilldown: null
            }
          ]
        }
      ],
      credits: {
        enabled: false
      },
      drilldown: {
        series: [
          {
            name: "Chrome",
            id: "Chrome",
            data: [
              [
                "v65.0",
                0.1
              ],
              [
                "v64.0",
                1.3
              ],
              [
                "v63.0",
                53.02
              ],
              [
                "v62.0",
                1.4
              ],
              [
                "v61.0",
                0.88
              ],
              [
                "v60.0",
                0.56
              ],
              [
                "v59.0",
                0.45
              ],
              [
                "v58.0",
                0.49
              ],
              [
                "v57.0",
                0.32
              ],
              [
                "v56.0",
                0.29
              ],
              [
                "v55.0",
                0.79
              ],
              [
                "v54.0",
                0.18
              ],
              [
                "v51.0",
                0.13
              ],
              [
                "v49.0",
                2.16
              ],
              [
                "v48.0",
                0.13
              ],
              [
                "v47.0",
                0.11
              ],
              [
                "v43.0",
                0.17
              ],
              [
                "v29.0",
                0.26
              ]
            ]
          },
          {
            name: "Firefox",
            id: "Firefox",
            data: [
              [
                "v58.0",
                1.02
              ],
              [
                "v57.0",
                7.36
              ],
              [
                "v56.0",
                0.35
              ],
              [
                "v55.0",
                0.11
              ],
              [
                "v54.0",
                0.1
              ],
              [
                "v52.0",
                0.95
              ],
              [
                "v51.0",
                0.15
              ],
              [
                "v50.0",
                0.1
              ],
              [
                "v48.0",
                0.31
              ],
              [
                "v47.0",
                0.12
              ]
            ]
          },
          {
            name: "Internet Explorer",
            id: "Internet Explorer",
            data: [
              [
                "v11.0",
                6.2
              ],
              [
                "v10.0",
                0.29
              ],
              [
                "v9.0",
                0.27
              ],
              [
                "v8.0",
                0.47
              ]
            ]
          },
          {
            name: "Safari",
            id: "Safari",
            data: [
              [
                "v11.0",
                3.39
              ],
              [
                "v10.1",
                0.96
              ],
              [
                "v10.0",
                0.36
              ],
              [
                "v9.1",
                0.54
              ],
              [
                "v9.0",
                0.13
              ],
              [
                "v5.1",
                0.2
              ]
            ]
          },
          {
            name: "Edge",
            id: "Edge",
            data: [
              [
                "v16",
                2.6
              ],
              [
                "v15",
                0.92
              ],
              [
                "v14",
                0.4
              ],
              [
                "v13",
                0.1
              ]
            ]
          },
          {
            name: "Opera",
            id: "Opera",
            data: [
              [
                "v50.0",
                0.96
              ],
              [
                "v49.0",
                0.82
              ],
              [
                "v12.1",
                0.14
              ]
            ]
          }
        ]
      }
    })
    
    
    $('#user').highcharts({
      chart: {
        type: 'column',
        backgroundColor: '#12194c'
      },
      title: {
        text: 'User',
        style: {
          color: 'white',
          fontSize: '16px'
        }
      },
      xAxis: {
        categories: [1,2,3,4,5,6,7,8],
        labels: {
          style: {
            color: 'white'
          }
        },
        lineColor: 'white'
      },
      yAxis: {
        title: {
          text: 'Clicks',
          style: {
            color: 'white'
          }
        },
        labels: {
          style: {
            color: 'white'
          }
        },
        gridLineColor: '#12194c'
      },
      tooltip: {
        enabled : true,
        backgroundColor: '#fff',
        borderWidth: 2,
        formatter : function(){
          return '<span style="color:{'+this.series.color+'}">'+this.x+
          '</span><br/>'+this.series.name+': <b>'+this.y+'</b><br/>'
        }
      },
      plotOptions: {
        column: {
          dataLabels: {
            enabled: true,
            style: {
              color: 'white',
              fontSize: '10px',
              textOutline: 'none'
            },
          },
        }
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Tokyo',
        data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
      }, {
        name: 'New York',
        color: 'yellow',
        data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]
      }]
    })
    
    $('#team').highcharts({
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        backgroundColor: '#12194c'
      },
      title: {
        text: 'Team',
        style: {
          color: 'white',
          fontSize: '16px'
        }
      },
      tooltip: {
        borderWidth: 2,
        formatter : function(){
          return '<span style="color:#000;"><b>'+this.point.name+'<br>'+this.series.name+':'+this.y+'</span>'
        }
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            style: {
              color: 'white',
              fontSize: '10px',
              textOutline: 'none'
            },
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          }
        }
      },
      credits: {
        enabled: false
      },
      series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
          name: 'Chrome',
          y: 61.41,
          sliced: true,
          selected: true
        }, {
          name: 'Internet Explorer',
          y: 11.84
        }, {
          name: 'Firefox',
          y: 10.85
        }, {
          name: 'Edge',
          y: 4.67
        }, {
          name: 'Safari',
          y: 4.18
        }, {
          name: 'Sogou Explorer',
          y: 1.64
        }, {
          name: 'Opera',
          y: 1.6
        }, {
          name: 'QQ',
          y: 1.2
        }, {
          name: 'Other',
          y: 2.61
        }]
      }]
    })
  }
}