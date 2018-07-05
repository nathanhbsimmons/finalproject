import React, { Component } from 'react';
import SiteInfoContainer from './containers/SiteInfoContainer.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import ClickMapContainer from './containers/MapContainer.js';
import waterIcon from './img/waterIconLetter.png'
import DropdownMenuContainer from './containers/DropdownMenuContainer.js';
import WeatherContainer from './containers/WeatherContainer.js';
import SiteMeterContainer from './containers/SiteMeterContainer.js';



  class App extends Component {
    

  componentDidMount() {
    this.props.fetchSites();
    this.props.fetchWeather();
    this.refreshApiCall();
  }

 

  refreshApiCall() {
    setInterval(this.props.fetchSites, 30000);
  }

 


  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
        
          <header className="App-header">
          
            <h1 className="App-title">Austin </h1>
            <img className="waterIcon" src={waterIcon} alt=""/>
            <h1 className="App-title">urrents</h1>
           
          </header>
          <p className="instructions">Can I swim today?</p>
          
          <div className="main">
          
          <SiteInfoContainer />

          <div className="mapContainer">
          <DropdownMenuContainer/>  
          <ClickMapContainer/>
          <WeatherContainer/>
          </div>
          
          <SiteMeterContainer />
          
          </div>
          
          
          
          <p className="instructions">Select a swimming hole on the map or dropdown menu to begin your search.</p>
        
          
       
         </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
