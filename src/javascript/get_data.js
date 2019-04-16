(() => {
    $.ajax({
        url: '/get_server_data/',
        type: 'POST',
        async: false,
    })
    .then(
        (data)=>{
            window.server_list = data[0]
            window.container_series = data[1]
        },
    )
}).call()
