// =======================================
// Cyber Command Center
// =======================================

function random(min,max){

    return Math.floor(Math.random()*(max-min+1))+min;

}

function updateDashboard(){

    document.getElementById("cpu").innerText =
    random(18,45)+"%";

    document.getElementById("memory").innerText =
    random(40,72)+"%";

}

setInterval(updateDashboard,2000);

updateDashboard();

// Live Clock

function updateClock(){

    const now=new Date();

    document.getElementById("clock").innerText=
    now.toLocaleTimeString();

}

setInterval(updateClock,1000);

updateClock();