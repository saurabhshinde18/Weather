import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const INIT_URL = "https://images.pexels.com/photos/531756/pexels-photo-531756.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const HOT_URL = "https://www.treehugger.com/thmb/emVFfdc5Dwzu-u531n2zOSyvkLc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__mnn__images__2018__07__palm_trees_hot_sun-f8e20b86425b492f9d777d92db46db49.jpg";
  const COLD_URL = "https://www.tidalhealth.org/sites/default/files/styles/max_650x650/public/site_media/2024-01/istock-868098786.jpg?itok=o94f7LCH";
  const RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.jpg?s=612x612&w=0&k=20&c=lNvbIw1wReb-owe7_rMgW8lZz1zElqs5BOY1AZhyRXs=";

  const getImageUrl = () => {
    if (info.humidity > 80) return RAIN_URL;
    if (info.temp > 25) return HOT_URL;
    if (info.temp < 15) return COLD_URL;
    return INIT_URL;
  };

  const getWeatherIcon = () => {
    if (info.humidity > 80) return <ThunderstormIcon />;
    if (info.temp > 25) return <WbSunnyIcon />;
    if (info.temp < 15) return <AcUnitIcon />;
    return null;
  };

  return (
    <div className="InfoBox">
      <h1>Weather Info - {info.weather}</h1>
      <div className="cardContainer">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={getImageUrl()}
            title="Weather condition"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}<div className='icon'>
              {getWeatherIcon()}
              </div>
            </Typography>
            <Typography variant="body2" color="text.secondary" component={"span"}>
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}%</p>
              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>
                The weather can be described as <i>{info.weather}</i> and feels like {info.feelslike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
