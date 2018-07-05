import React, { Component } from 'react';
import SiteInfoContainer from './containers/SiteInfoContainer.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import  getMuiTheme  from 'material-ui/styles/getMuiTheme';
// import Colors from 'material-ui/lib/styles/colors';
// import ColorManipulator from 'material-ui/lib/utils/color-manipulator';
// import ThemeManager from 'material-ui/lib/styles/theme-manager';

import './App.css';
import ClickMapContainer from './containers/MapContainer.js';
import waterIcon from './img/waterIconLetterTwoToneDark.png'
import DropdownMenuContainer from './containers/DropdownMenuContainer.js';
import WeatherContainer from './containers/WeatherContainer.js';
import SiteMeterContainer from './containers/SiteMeterContainer.js';
import InstructionsContainer from './containers/InstructionsContainer.js';




  class App extends Component {
  
  componentDidMount() {
    this.props.fetchSites();
    this.props.fetchWeather();
    this.refreshApiCall();
  }

  refreshApiCall() {
    setInterval(this.props.fetchSites, 30000);
  }

  render(props) {
    
    return (
      <MuiThemeProvider >
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
               <DropdownMenuContainer secondary={true}/>  
               <ClickMapContainer/>
               <WeatherContainer/>
            </div>
            
            <SiteMeterContainer />
          </div>
          
          <InstructionsContainer />
       
         </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
