function start() {
    document.getElementById("data").rows["seconds"].innerHTML = "Reading Data...";
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
}
function stop() {
    document.getElementById("data").rows["seconds"].innerHTML = "";
    document.getElementById("stopButton").disabled = true;
    document.getElementById("startButton").disabled = false;
}
function missionStat() {
    alert("test");
}
function updateDisplay(){
    theTime = new Date();
    console.log("The time is: "+theTime.getHours()+":"
    +(theTime.getMinutes() < 10 ? "0" +theTime.getMinutes() : theTime.getMinutes()) +":"
    +(theTime.getSeconds() < 10 ? "0"+ theTime.getSeconds(): theTime.getSeconds()));
}
//create classtest
class classtest {
    constructor (test1){
        this.test1 = test1;
    }
}
class Mission {
    constructor(spaceCraftName, launchDateDay, launchDateMonth, launchDateYear, numOfAstronauts){
        this.spaceCraftName = spaceCraftName;
        this.launchDateDay = launchDateDay;
        this.launchDateMonth = launchDateMonth;
        this.launchDateYear = launchDateYear;
        this.numOfAstronauts = numOfAstronauts;
    }
}
class InputData {
    constructor(
        time_seconds, 
        latitude, 
        longitude,
        gps_altitude, 
        bmpSensor_altitude, 
        bmpSensor_pressure, 
        bmpSensor_temp,
        digSensor_temp,
        cssSensor_temp,
        cssTemp_eCO2,
        cssTemp_TVOC,
        UV,
        accelX,
        accelY,
        accelZ,
        magneticX,
        magneticY,
        magneticZ,
        gyroX,
        gyroY,
        gyroZ,
        ){
            this.time_seconds = time_seconds;
            this.latitude = latitude;
            this.longitude = longitude;
            this.gps_altitude = gps_altitude;
            this.bmpSensor_altitude = bmpSensor_altitude;
            this.bmpSensor_pressure = bmpSensor_pressure;
            this.bmpSensor_temp = bmpSensor_temp;
            this.digSensor_temp = digSensor_temp;
            this.cssSensor_temp = cssSensor_temp;
            this.cssTemp_TVOC = cssTemp_TVOC;
            this.cssTemp_eCO2 = cssTemp_eCO2;
            this.UV = UV;
            this.accelX = accelX;
            this.accelY = accelY;
            this.accelZ = accelZ;
            this.magneticX = magneticX;
            this.magneticY = magneticY;
            this.magneticZ = magneticZ;
            this.gyroX = gyroX;
            this.gyroY = gyroY;
            this.gyroZ = gyroZ;
        }
}

function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    //this.sound.setAttribute("preload", "auto");
    //this.sounds.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function() {
        this.sound.play();
    }
    this.stop = function(){
        this.sound.pause();
    }
}
function playSpaceSnd(){
    mySound = new sound("us-lab-background.mp3");
    mySound.play();
}