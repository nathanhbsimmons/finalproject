import React, { Component } from 'react';
import SiteInfo from './components/SiteInfo.js';
import DropDownMenu from './components/DropdownMenu.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';
import ClickMap from './components/Map.js';
import waterIcon from './img/waterIconLetter.png'

//SUPER work in progress. I've spent a large amount of my time wading through
//the info given to me by my API call and figuring out how to dig down to what I need to display.
//Eventually, users will be able to choose a "swimming hole" in and around Austin
//(either by picking out of a dropdown menu or clicking it on an illustrated map)
//and the web app will display how high the water is in that spot (ft), the current
//water flow (ft3 per second) and whether the current height/flow conditions are optimal for swimming
//or not. Currently working on how to update the API call (probably with a time interval function)
//so that the info stays current without having to reload the page.

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      sites: [],
      displaySite: null,
      value: 1
    };
  }

  componentDidMount() {
    this.handleApiCall();
    this.refreshApiCall();
  }

  handleApiCall = () => {
    console.log("API call y'all");
    fetch(`https://waterservices.usgs.gov/nwis/iv/?stateCd=tx&format=json`)
      .then(res => res.json())
      .then(
        res => {
          const isCorrectSite = obj => {
            if (
              obj.name === 'USGS:08154700:00065:00000' ||
              obj.name === 'USGS:08154700:00060:00000' ||
              obj.name === 'USGS:08155240:00065:00000' ||
              obj.name === 'USGS:08155240:00060:00000' ||
              obj.name === 'USGS:08155300:00065:00000' ||
              obj.name === 'USGS:08155300:00060:00000' ||
              obj.name === 'USGS:08155400:00065:00000' ||
              obj.name === 'USGS:08155400:00060:00000' ||
              obj.name === 'USGS:08170990:00065:00000' ||
              obj.name === 'USGS:08170990:00060:00000' ||
              obj.name === 'USGS:08153500:00065:00000' ||
              obj.name === 'USGS:08153500:00060:00000' ||
              obj.name === 'USGS:08171000:00065:00000' ||
              obj.name === 'USGS:08171000:00060:00000' ||
              obj.name === 'USGS:08158700:00065:00000' ||
              obj.name === 'USGS:08158700:00060:00000'
            ) {
              return obj;
            }
          };
          const sitesArr = res.value.timeSeries.filter(isCorrectSite);
          this.setState({isLoaded: true, sites: sitesArr});
        },
        error => {this.setState({isLoaded: true, error});
        }
      );
  };

  refreshApiCall() {
    setInterval(this.handleApiCall, 30000);
  }

  handleSiteChange = (event, index, value) => {
    this.setState({
      value
    });
    this.handleSelectedSite(event, index, value);
  };

  handleSelectedSite = (event, index) => {
    console.log(event.target.title)
    if (index === 1 || event.target.title == "Bull Creek") {
      const indexStreamFlow = 'USGS:08154700:00060:00000';
      const indexGaugeHeight = 'USGS:08154700:00065:00000';
      const displaySiteArr = [];
      this.handleDisplaySiteChange(
        indexStreamFlow,
        indexGaugeHeight,
        displaySiteArr
      );
    } else if (index === 2 || event.target.title == "Gus Fruh") {
      const indexStreamFlow = 'USGS:08155300:00060:00000';
      const indexGaugeHeight = 'USGS:08155300:00065:00000';
      const displaySiteArr = [];
      this.handleDisplaySiteChange(
        indexStreamFlow,
        indexGaugeHeight,
        displaySiteArr
      );
    } else if (index === 3 || event.target.title == "Lost Creek") {
      const indexStreamFlow = 'USGS:08155240:00060:00000';
      const indexGaugeHeight = 'USGS:08155240:00065:00000';
      const displaySiteArr = [];
      this.handleDisplaySiteChange(
        indexStreamFlow,
        indexGaugeHeight,
        displaySiteArr
      );
    } else if (index === 4 || event.target.title == "Barton Springs") {
      const indexStreamFlow = 'USGS:08155400:00060:00000';
      const indexGaugeHeight = 'USGS:08155400:00065:00000';
      const displaySiteArr = [];
      this.handleDisplaySiteChange(
        indexStreamFlow,
        indexGaugeHeight,
        displaySiteArr
      );
    } else if (index === 5 || event.target.title == "Pedernales Falls") {
      const indexStreamFlow = 'USGS:08153500:00060:00000';
      const indexGaugeHeight = 'USGS:08153500:00065:00000';
      const displaySiteArr = [];
      this.handleDisplaySiteChange(
        indexStreamFlow,
        indexGaugeHeight,
        displaySiteArr
      );
    } else if (index === 6 || event.target.title == "Camp Ben McCulloch") {
      const indexStreamFlow = 'USGS:08158700:00060:00000';
      const indexGaugeHeight = 'USGS:08158700:00065:00000';
      const displaySiteArr = [];
      this.handleDisplaySiteChange(
        indexStreamFlow,
        indexGaugeHeight,
        displaySiteArr
      );
    } else if (index === 7 || event.target.title == "Jacob's Well") { const indexStreamFlow = 'USGS:08170990:00060:00000';
      const indexGaugeHeight = 'USGS:08170990:00065:00000';
      const displaySiteArr = [];
      this.handleDisplaySiteChange(
        indexStreamFlow,
        indexGaugeHeight,
        displaySiteArr
      );
    } else if (index === 8 || event.target.title == "Blue Hole") {
      const indexStreamFlow = 'USGS:08171000:00060:00000';
      const indexGaugeHeight = 'USGS:08171000:00065:00000';
      const displaySiteArr = [];
      this.handleDisplaySiteChange(
        indexStreamFlow,
        indexGaugeHeight,
        displaySiteArr
      );
    }
  };

  handleDisplaySiteChange = (indexStreamFlow, indexGaugeHeight, displaySiteArr) => {
    this.state.sites.map((obj, key) => {
      if (obj.name === indexStreamFlow || obj.name === indexGaugeHeight) {
        displaySiteArr.push(obj);
      }
    });
    this.setState({
      displaySite: displaySiteArr
    });
  };

  renderSiteInfo() {
    if (this.state.displaySite && this.state.displaySite.length === 2) {
      return <SiteInfo displaySite={this.state.displaySite} />;
    }
  }

  renderDropMenu() {
    return (
      <DropDownMenu
        handleSiteChange={(event, index, value, site) => {
          this.handleSiteChange(event, index, value);
        }}
        value={this.state.value}
      />
    );
  }


  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <header className="App-header">
          
            <h1 className="App-title">Austin </h1>
            <img className="waterIcon" src={waterIcon}/>
            <h1 className="App-title">urrents</h1>
          </header>
          
          {this.renderDropMenu()}
          <div className="mapContainer">
          <ClickMap handleSelectedSite={(event) => {
            this.handleSelectedSite(event);
          }}/>
          </div>
          {this.renderSiteInfo()} 
          
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
