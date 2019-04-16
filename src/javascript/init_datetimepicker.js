{
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
}
