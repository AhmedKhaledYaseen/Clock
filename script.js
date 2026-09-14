function showTime(){
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let seconds = new Date().getSeconds();


    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    let time = hours + ':' + minutes + ':' + seconds;

    document.getElementById('clock').innerHTML = time; 
    
    setTimeout(showTime, 1000);
}

showTime();