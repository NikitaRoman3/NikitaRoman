let clock = document.getElementById('clock');
let color = document.getElementById('color');


function MyClock(){
    let time = new Date();
    let hour = (time.getHours() % 24).toString();
    let minute = time.getMinutes().toString();
    let second = time.getSeconds().toString();

    if (hour.length < 2) {
        hour = '0' + hour;
    }
    if (minute.length < 2) {
        minute = '0' + minute;
    }
    if (second.length < 2) {
        second = '0' + second;
    }
    
    let clockString = hour + ':' + minute + ':' + second;
    let colorString = '#' + hour + minute + second;

    clock.textContent = clockString;
    color.textContent = colorString;

    document.body.style.background = colorString;
}

MyClock();
setInterval(MyClock, 1000);