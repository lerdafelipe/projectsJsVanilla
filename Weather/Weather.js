//Geolocation
if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(getPosition);
}else{
    alert('If you don`t give us permissions to use your location, we can`t show you the weather');
}
//DOM Ubication
const ubication = document.getElementById('location');
//DOM condition
const condition = document.getElementById('condition');
//DOM Humidity
const humidity = document.getElementById('humidity');
//DOM Temperature
const temp = document.getElementById('temp');
//DOM Wind direction
const windDir = document.getElementById('wind_dir');
//DOM Wind velocity
const windVel = document.getElementById('wind_vel');
//DOM Weather icon
const icon = document.getElementById('condition_icon');
//DOM date
const day = document.getElementById('day');
//DOM Precipitations
const precipitation = document.getElementById('precipitation');
//DOM Pressure
const pressure = document.getElementById('pressure');

//Function to get date
const fecha = new Date();

//Funcion to get Location
function getPosition (position) {
    fetch(`https://api.weatherapi.com/v1/current.json?key=fea31ced3c9745528e092413213108&q=${position.coords.latitude},${position.coords.longitude}`)
    .then(res=>res.json())
    .then(data=>deploy(data.location, data.current));
}


//Function to show the data in the HTML
const deploy = (location, current)=>{
    //Show icon
    icon.src = current.condition.icon;
    //Show date
    day.innerHTML = `Date:${fecha.getUTCDate()}/${fecha.getMonth()+1}/${fecha.getFullYear()}`;
    //Show ubication
    ubication.innerHTML = `${location.name},${location.region}, ${location.country}`;
    //Show condition
    condition.innerHTML = current.condition.text;
    //Show humidity
    humidity.innerHTML = `${current.humidity}%`;
    //Show temperature
    temp.innerHTML = current.temp_c;
    //Show wind direction
    windDir.innerHTML = current.wind_dir;
    //Show wind velocity
    windVel.innerHTML = `${current.wind_kph} km/h`;
    //Show precipitation
    precipitation.innerHTML = `${current.precip_mm}mm`;
    //Show pressure
    pressure.innerHTML = current.pressure_mb;
}

