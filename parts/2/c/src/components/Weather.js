import React, {useEffect, useState} from "react";
import axios from 'axios';
export const Weather = ({city}) => {
    const [weatherData, setWeatherData] = useState([]);
    const apiKey = process.env.REACT_APP_API_KEY;
    const weatherStackUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;
    useEffect(() => {
        axios
            .get(weatherStackUrl)
            .then(response => {
                setWeatherData(response.data.current);
            });
    }, []);
    return <section id="weather">
        <h2>Weather in {city}</h2>
        <p><b>temperature:</b> {weatherData.temperature}</p>
        <p><img src={weatherData.weather_icons}/></p>
        <p><b>wind:</b> {weatherData.wind_speed} mph direction {weatherData.wind_dir}</p>
    </section>;
};