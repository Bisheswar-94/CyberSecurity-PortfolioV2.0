// =======================================
// Threat Monitor Simulation
// =======================================

const threatLevels = [
    "LOW",
    "MEDIUM",
    "HIGH"
];

const threatColors = [
    "green",
    "blue",
    "red"
];

function updateThreatMonitor(){

    const packets = document.getElementById("packets");
    const level = document.getElementById("threatLevel");

    packets.textContent =
        Math.floor(Math.random()*900000)+100000;

    const index = Math.floor(Math.random()*3);

    level.textContent = threatLevels[index];

    level.className = "status " + threatColors[index];

}

updateThreatMonitor();

setInterval(updateThreatMonitor,3000);