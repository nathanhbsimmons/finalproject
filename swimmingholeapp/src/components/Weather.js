import React, { Component } from 'react';
import '../App.css';




function Weather (props) {
  
const weather = props.weather
  
  
  
    
    if (weather) {
      return (
        <div className="weather">
            <img className="weatherIcon" src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} alt='Icon depicting current weather.'/>
            <p className="weatherTemp">{weather.main.temp.toFixed()}℉</p>
           
          
        </div>
      );
    } else {
      return (<div></div>)
    }
    
  
 
   
}


export default Weather