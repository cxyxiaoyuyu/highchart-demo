{
$(document).ready(function(){
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
    endDate: new Date(),
  }).on('changeDate',function(e){
    var endTime = e.date;
    $('#start').datetimepicker('setEndDate',endTime);
  });
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
  }
  //如果第一次打開，顯示前10天的數據
  getBeforeDate(10)
  
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
  
  //調用上一次到數據
  
  if(localStorage.getItem('x') != null && localStorage.getItem('y')  != null){
    //console.log('not first')
    $('#start').val(localStorage.getItem('start'))
    $('#end').val(localStorage.getItem('end'))
    $("#x_dropdown").html(localStorage.getItem('x'))
    $("#y_dropdown").html(localStorage.getItem('y'))
    
  }
  
  draw($('#start').val(),$('#end').val(),$('#xaxis').text(),$('#yaxis').text())
  
  /* 下拉框 */
  $('.wrapper-dropdown').click(function(){
    $(this).toggleClass('active');
    $(this).find('.dropdown').attr('max-height','400px');
  })
  
  $('.dropdown li').click(function(){
    var old_value = $(this).parent().parent().find('.aaxis').text();
    var new_value  = $(this).find('span').text();
    var icon = {
      'User': 'fa fa-user fa-1x',
      'Day': 'fa fa-sun-o fa-1x',
      'Click': 'fa fa-mouse-pointer fa-1x',
      'Hour': 'fa fa-hourglass fa-1x',
      'Week': 'fa fa-wikipedia-w fa-1x',
      'Month': 'fa fa-calendar fa-1x',
    }
    $(this).parent().parent().find('.aaxis').text(new_value);
    $(this).find('span').text(old_value);
    $(this).find('i').attr('class',icon[old_value]);
    
    localStorage.setItem('x',$('#x_dropdown').html())
    localStorage.setItem('y',$('#y_dropdown').html())
  })
  
  $('.dropdown').mouseleave(function(){
    $(this).parent().toggleClass('active');
  })
  
  //下拉框選項更改，畫圖
  $('.aaxis').bind('DOMNodeInserted',function(e){
    var start_time = $('#start').val()
    var end_time = $('#end').val()
    var x_value = $('#xaxis').text()
    var y_value = $('#yaxis').text()
    
    draw(start_time,end_time,x_value,y_value)
    
    localStorage.setItem('start',start_time)
    localStorage.setItem('end',end_time)
  })
  
  //如果時間選項更改，調用draw()函數
  $('.selected').change(function(){
    var start_time = $('#start').val()
    var end_time = $('#end').val()
    var x_value = $('#xaxis').text()
    var y_value = $('#yaxis').text()
    
    draw(start_time,end_time,x_value,y_value)
    
    //將修改的數據存儲起來
    localStorage.setItem('start',start_time)
    localStorage.setItem('end',end_time)
    localStorage.setItem('x',$('#x_dropdown').html())
    localStorage.setItem('y',$('#y_dropdown').html())
  });
  
  
  function draw(start_time,end_time,x_value,y_value){
    if(start_time != '' && end_time != '' && x_value!='xaxis' && y_value!='yaxis'){
      console.log('data is ready !!!!')
      console.log(start_time)
      console.log(end_time)
      data = {
        'start': start_time,
        'end': end_time,
        'x': x_value,
        'y': y_value
      }
      chart  = {
        backgroundColor: '#12194c',
        type: 'line'
      }
      var titles = {
        'system1': { text : 'system1',style:{color:'#00aef8',fontSize:'16px'}},
        'system2': { text : 'system2',style:{color:'#00aef8',fontSize:'16px'}},
        'system3': { text : 'system3',style:{color:'#00aef8',fontSize:'16px'}},
        'system4': { text : 'system4',style:{color:'#00aef8',fontSize:'16px'}},
      };
      
      //highcharts logo
      var credits = {
        enabled: false
      };
      
      //圖例選項
      var legend = {
        enabled: false
      };
      
      //X 軸
      var xAxis = {
        categories: [1,2,3,4,5,6,7,8],
        /*title: {
          text: 'By ' + $('#xaxis').val()
        },*/
        labels: {
          style: {
            color: '#00aef8'
          }
        },
        lineColor: '#00aef8'
      };
      //Y 軸
      var yAxis = {
        title: {
          text: $('#yaxis').text(),
          style: {
            color: '#00aef8'
          }
        },
        labels: {
          style: {
            color: '#00aef8'
          }
        },
        gridLineColor: '#12194c'
      }
      var plotOptions = {
        allowPointSelect: true,
        line: {
          dataLabels: {
            enabled: true,
            style: {
              color: 'white',
              fontSize: '10px',
              textOutline: 'nonw'
            }
          },
          enableMouseTracking: true,
          color: '#00aef8'
        }
      };
      var tooltip = {
        enabled: true,
        backgroundColor: 'white',
        borderColor: '#79bfe4',
        borderWidth: 2,
        formatter : function (){ // 提示框格式化字符串
          return '<span style="color:{'+this.series.color+'}">'+this.x+'</span><br/>'+
          this.series.name+': <b>'+this.y+'</b><br/>'
        },
      }
      
      //y軸數據
      var series = {
        'system1':[{name: $('#yaxis').text(),data: [1,7,4,4,5,3,10,5]}],
        'system2':[{name: $('#yaxis').text(),data: [34,1,3,50,9,16,4,13]}],
        'system3':[{name: $('#yaxis').text(),data: [23,45,11,46,78,24,67,100]}],
        'system4':[{name: $('#yaxis').text(),data: [34,56,78,23,45,65,42,12]}],
      };
      
      var jsons = {
        'system1':{},
        'system2':{},
        'system3':{},
        'system4':{},
      }
      
      for(var key in jsons){
        jsons[key].chart = chart;
        jsons[key].title = titles[key];
        jsons[key].xAxis = xAxis;
        jsons[key].yAxis = yAxis;
        jsons[key].plotOptions = plotOptions;
        jsons[key].tooltip = tooltip;
        jsons[key].credits = credits;
        jsons[key].legend = legend;
        jsons[key].series = series[key];
      }
      for(var key in jsons){
        $('#'+key).highcharts(jsons[key]);
      }
    }else{
    console.log('data is not ready')
  }
}
})
}