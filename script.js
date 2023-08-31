 const inputBox=document.querySelector('.input-box');
 const searchBtn=document.getElementById('searchBtn');
 const weather_img=document.querySelector('.weather-img');
 const temperature=document.querySelector('.temperature');
 const description=document.querySelector('.description');
 const humidity=document.getElementById('humidity');
 const wind_speed=document.getElementById('wind-speed'); 
 const loc_not_found=document.querySelector('.loc-not-found');
 const loc_img=document.querySelector('.loc-img');
 const weather_body=document.querySelector('.weather-body');
 //we can use either  element id or query selector

 async function checkWeather(city){
    const api_key="e0951955a3c58a133a2258b130d8677a";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;
    const weather_data= await fetch(`${url}`).then(response => response.json());
    if(weather_data.cod ==='404'){
        loc_not_found.style.display="flex";
        weather_body.style.display="none";
        loc_img.style.display="flex";
        console.log("Error");
        return;
    }
    //console.log(weather_data);
    weather_body.style.display="flex";
    loc_not_found.style.display="none";
    loc_img.style.display="none";
    temperature.innerHTML=`${Math.round(weather_data.main.temp-273.15)}°C`;
    description.innerHTML=`${weather_data.weather[0].description}`;
    humidity.innerHTML=`${weather_data.main.humidity}%`;
    wind_speed.innerHTML=`${weather_data.wind.speed}Km/H`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
            weather_img.src="/assets/partsun.png";
            break;
        case 'Broken Clouds':
            weather_img.src="/assets/partsun.png";
            break;
        case 'Clear':
            weather_img.src="/assets/sun.png";
            break;
        case 'Rain':
            weather_img.src="/assets/rain.png";
            break;
        case 'Haze':
            weather_img.src="/assets/partsun.png";
            break;
        case 'Snow':
            weather_img.src="/assets/snow.png";
            break;
        case 'Thunderstrom':
            weather_img.src="/assets/thunder.png";
            break;
    }
    
 }

 searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value)
 });
