import React, { Component } from 'react';
import SiteInfoContainer from './containers/SiteInfoContainer.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import ClickMapContainer from './containers/MapContainer.js';
import waterIcon from './img/waterIconLetterTwoToneDark.png'
import DropdownMenuContainer from './containers/DropdownMenuContainer.js';
import WeatherContainer from './containers/WeatherContainer.js';
import SiteMeterContainer from './containers/SiteMeterContainer.js';
import InstructionsContainer from './containers/InstructionsContainer.js';
import Contact from './components/Contact.js';

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
            <img className="waterIcon" src={waterIcon} alt="swimming rolling water icon"/>
            <h1 className="App-title">urrents</h1> 
          </header>

        
          <p className="instructions">Can I swim today?</p>
          
          <div className="main">
            <SiteInfoContainer />

            <div className="mapContainer">
                <Contact />
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
