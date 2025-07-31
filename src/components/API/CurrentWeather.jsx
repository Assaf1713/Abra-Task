

import { useEffect, useState } from "react";

export default function CurrentWeather({ lat, lng }) {
  const API_KEY = "45017ea56ecca68d10012b50cec53ea5";
  const [weather, setweather] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    const FetchWeather = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Failed to get weather data");
        }
        const data = await res.json();
        setweather(data);
      } catch (err) {
        setError(err.message);
      }
    };
    FetchWeather();
  }, [lat, lng]);

  if (error) return <p>Error: {error}</p>;
  if (!weather) return <p>Loading weather...</p>;
  const temp = Math.round(weather.main.temp);
  const condition = weather.weather[0].main;
  const humidity = weather.main.humidity;
  const wind = weather.wind.speed;
  const date = new Date().toLocaleDateString(undefined, {
    weekday: "short",
    day: "numeric",
    month: "short",
  });

  
  return (
    <div className="weather-card">
      <div className="top-bar">
        <span className="location">{weather.name}</span>
        
      </div>
      <div className="main-info">
        <h3>{condition}</h3>
        <div className="temperature">{temp} °C</div>
        <div className="date">{date}</div>
      </div>
      <div className="details">
        <div className="detail-box">
          <span>💧</span>
          <p>{humidity}%</p>
          <small>Humidity</small>
        </div>
        <div className="detail-box">
          <span>💨</span>
          <p>{wind} km/h</p>
          <small>Wind</small>
        </div>
      </div>
    </div>
  );








}
