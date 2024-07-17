import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./Searchbox.css";
import { useState } from 'react';

export default function Searchbox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "691357268040265eb516b41c743eb429";

  const getWeatherInfo = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      if (!response.ok) {
        throw new Error("City not found");
      }
      let jsonResponse = await response.json();
      console.log(jsonResponse);
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,
        weather: jsonResponse.weather[0].description,
      };
      setError(false);
      return result;
    } catch (error) {
      setError(true);
      return null;
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
    setError(false); // Reset error state on input change
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    let info = await getWeatherInfo();
    if (info) {
      updateInfo(info);
      setCity("");
    }
  };

  return (
    <div className="Searchbox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="Enter City"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          SEARCH
        </Button>
        {error && <p style={{ color: 'red' }}>No Such Place Exists</p>}
      </form>
    </div>
  );
}
