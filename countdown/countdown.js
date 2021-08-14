
function writeTime(){
    const fecha = new Date();
    const myBirt = moment(`${fecha.getFullYear()+1}-01-29`);
    const diff = myBirt.diff(fecha, 'Seconds');

    const days = Math.floor((diff/3600)/24);
    const hours = (Math.floor(diff/3600))-(days*24);
    const minutes = ((Math.floor(diff/60))-(hours*60)-(days*1440));
    const seconds = Math.floor(diff-(minutes*60)-(hours*3600)-((days*24)*3600));


    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;
}

writeTime();

setInterval(writeTime,1000);