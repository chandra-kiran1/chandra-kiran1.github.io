
function run(){
    var date = new Date();
    var hours = date.getHours();
    var min = date.getMinutes();
    var seconds = date.getSeconds();
    var Box = document.getElementById('box');
    var m = "Am";
    
    if(hours > 12){
        hours-=12
        m="PM"
    }
    if(hours == 0 ){
        hours=12;
        m="AM"
    }
    hours = hours < 10 ? "0"+ hours : hours ;
    min = min < 10 ? "0"+ min : min ;
    seconds = seconds < 10 ? "0"+ seconds : seconds ;
    
    Box.innerHTML = `${hours} : ${ min } : ${ seconds } ${m} `;
}

run();
setInterval(run , 1000)