import React from "react";
import { Link } from "react-router-dom";
import "../About.css"
import Footer from "../Footer";
function About(){
    return(
        <div>
            <nav className="navbar">
                <Link to="/"><button>Home</button></Link>
            </nav>

            <div className="content"><p>"I created a weather app that provides live weather reports using API calls. This app displays the current weather conditions, 
            such as temperature, humidity, wind speed, and a brief weather description. It also provides the user with the option to search for 
            weather data for different cities around the world.</p>

           <p> To create this app, I used an API called OpenWeatherMap, which provides real-time weather data. I used the Axios library to make API 
            calls and retrieve the data, which I then displayed on the app's interface.</p>
            
    
            <p>Overall, this weather app provides a simple and convenient way for users to get live weather reports for their location or any 
            other city of their choice by entering the city name in the search bar. It's a useful tool for planning daily activities or trips, as it provides accurate and 
            up-to-date weather information. This app was created by Mayur Mendhule."</p> </div>
            
            <Footer />
        </div>
    );
}
export default About;