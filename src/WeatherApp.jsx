import React, { useState } from 'react';
import InfoBox from './InfoBox';
import Searchbox from './Searchbox';

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelslike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });

  let updateInfo=(info)=>{
    setWeatherInfo(info);
  }
   
  return (
    <div style={{ textAlign: "center" }}>
      <div>
        <h2>Weather App By Saurabh</h2>
        <Searchbox updateInfo={updateInfo}/>
        <InfoBox info={weatherInfo} />
      </div>
    </div>
  );
}
