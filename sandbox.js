p_tag = document.getElementById('content_p')

date = new Date().toDateString()
time = new Date().toLocaleTimeString()


fun_date_time = () => {
    date = new Date().toDateString()
    time = new Date().toLocaleTimeString()
    console.log(time+" on "+date)
    p_tag.innerHTML = time+"<br> on "+date  
}

setInterval(fun_date_time, 1000)