import React, { useContext } from "react";
import ThemeContext from "./Them";
import './CountriesList.css';

const Weather = ({ weather }) => {
  const th = useContext(ThemeContext);

  return (
    <div className="span" style={th}>
      <h4>Capital Weather Report</h4>
      
      <p className="main-p">{weather.weather[0].description}</p>
      <p>
        <span>Wind Speed : </span>
        {weather.wind.speed} km/h
      </p>
      <p>
        <span>Tempreture : </span>
        {weather.main.temp} °kelvin
      </p>
      <p>
        <span>Humidity : </span>
        {weather.main.humidity} %
      </p>
    </div>
  );
};

export default Weather;
