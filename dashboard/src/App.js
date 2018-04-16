import React, { Component } from 'react';
import Greeting from './Greeting.js';
import Weather from './Weather.js';
import Todo from './Todo.js';
import Time from './Time.js';
import './App.css';




class App extends Component {
  constructor(props) {
   super(props);
   this.state = {
     error: null,
     isLoaded: false,
     weatherData: {},
     date: new Date(),
     value: '',
      list: [],
   };
 }



  componentDidMount() {
    fetch("https://api.openweathermap.org/data/2.5/weather?id=4254010&APPID=2c90dffe53b62e9c55900f42159a33fd")
      .then(res => res.json())
      .then(
        (res) => {
          this.setState({
            isLoaded: true,
            weatherData: res
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  renderWeather(){
    if(this.state.isLoaded){
      return <Weather weatherData={this.state.weatherData}/>
    }

  }

  render() {
    // const d = this.state.date.toLocaleTimeString()
    // console.log(Number(this.state.date))
    return (
      <div className='main'>
        <Time date={this.state.date}/>
        {this.renderWeather()}
      </div>
    );
  }
}

export default App;
