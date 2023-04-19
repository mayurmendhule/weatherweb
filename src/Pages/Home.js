import React,{ useEffect} from 'react';
import { useState } from 'react';
import '../App.css';
import { getWeatherData } from '../data/Weatherapi';
import {ScaleLoader} from 'react-spinners'
import Footer from "../Footer";
import { Link } from 'react-router-dom';

function Home() {
  const [weatherdata, setWeatherData] = useState(null);
  const [city, setCity] = useState("Pune");
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    try {
      setLoading(true);
      const data = await getWeatherData(city);
      setWeatherData(data);
      setLoading(false);
      setCity("");
    } catch (error) {
      console.log(error.message);
      setLoading(false);
    }
  };

  const override = `
  display: block;
  margin: 0 auto;
  border-color: red;
  `;
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <div>
        <Link to="/know_more"><button className='btn-about'>About</button> </Link>
    </div>
    <div className="App">
      <div className="card">
        <h2 className="title">
          <i className="fa fa-cloud"></i>Weather App
        </h2>
        <div className="search-form">
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="  Enter your city name"
          />
          <button type="button" onClick={() => getData()}>
            Search
          </button>
        </div>
        {loading ? (
          <div className="loader-container">
            <ScaleLoader
              css={override}
              size={200}
              color={"#fff"}
              loading={loading}
            />
          </div>
        ) : (
          <>
            {weatherdata !== null ? (
              <div className="main-container">
                <h4>Weather Report</h4>
                <div className="weather-icon">
                  <img
                    src={`http://openweathermap.org/img/w/${weatherdata.weather[0].icon}.png`}
                    alt="imgicon"
                  />
                </div>
                <div className='weather-condition'><h3>{weatherdata.weather[0].main}</h3></div>
                <div className="temprature">
                  <h1>
                    {parseFloat(weatherdata.main.temp - 273.15).toFixed(1)} °C
                  </h1>
                </div>
                <div className="location">
                  <h3>
                    <i className="fa fa-landmark"></i>
                    {weatherdata.name}, {weatherdata.sys.country}
                  </h3>
                </div>
                <div className="temprature-range">
                 {/*<h5>Min: {parseFloat(weatherdata.main.temp_min - 273.15).toFixed(1)} °C & Max: {parseFloat(weatherdata.main.temp_max - 273.15).toFixed(1)} &deg; C</h5>*/} 
                  <h5>Humidity: {weatherdata.main.humidity}% & Pressure : {weatherdata.main.pressure} mb</h5>
                  <h5>Visibility: {parseFloat(weatherdata.visibility/1000)} Km & WindSpeed: {weatherdata.wind.speed} km/hr</h5>
                  
                </div>
              </div>
            ) : null}
          </>
        )}
      </div>
      <Footer />
    </div>
    </>
  );
}

export default Home;