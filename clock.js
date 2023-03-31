function getCurrentTime () {
    let clock = document.getElementById("clock");
    let clock2 = document.getElementById("clock2");
    let clock3 = document.getElementById("clock3");

    let currentDate = new Date();
    let currentDate2 = new Date();
    let currentDate3 = new Date();

    currentDate2.setHours(currentDate2.getHours() + 8); // Tokyo
    currentDate3.setHours(currentDate3.getHours() + 2); // Bucharest

    // UTC 
    let utcHours = currentDate.getHours();
    // UTC+1
    let tokyoHours = currentDate2.getHours();
    // UTC+2
    let bucharestHours = currentDate3.getHours();

    let minutes = currentDate.getMinutes();
    let seconds = currentDate.getSeconds();

    // add a "0" before hours less than 10
    utcHours = utcHours < 10 ? `0${utcHours}` : utcHours;
    tokyoHours = tokyoHours < 10 ? `0${tokyoHours}` : tokyoHours;
    bucharestHours = bucharestHours < 10 ? `0${bucharestHours}` : bucharestHours;

    // add a "0" before minutes less than 10
    minutes = minutes < 10 ? `0${minutes}` : minutes;

    // add a "0" before seconds less than 10
    seconds = seconds < 10 ? `0${seconds}` : seconds;

    clock.innerText = `${utcHours} : ${minutes} : ${seconds}`;
    clock2.innerText = `${tokyoHours} : ${minutes} : ${seconds}`;
    clock3.innerText = `${bucharestHours} : ${minutes} : ${seconds}`;

    setTimeout(getCurrentTime, 1000);
}
getCurrentTime();


