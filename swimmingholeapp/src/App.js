import React, { Component } from 'react';
import SiteInfo from './SiteInfo.js'
import DropDownMenu from './DropdownMenu.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import './App.css';

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

  // map = this.state.sites.timeSeries
  // site = obj.name

  componentDidMount(){

    fetch(`https://waterservices.usgs.gov/nwis/iv/?stateCd=tx&format=json`)
      .then(res => res.json())
      .then(
        (res) => {
          const isCorrectSite=(obj)=>{

            if (obj.name === "USGS:08154700:00065:00000" || obj.name === "USGS:08154700:00060:00000"
            || obj.name === "USGS:08155240:00065:00000" || obj.name === "USGS:08155240:00060:00000"
            || obj.name === "USGS:08155300:00065:00000" || obj.name === "USGS:08155300:00060:00000"
            || obj.name === "USGS:08155400:00065:00000" || obj.name === "USGS:08155400:00060:00000"
            || obj.name === "USGS:08170990:00065:00000" || obj.name === "USGS:08170990:00060:00000"
            || obj.name === "USGS:08153500:00065:00000" || obj.name === "USGS:08153500:00060:00000"
            || obj.name === "USGS:08171000:00065:00000" || obj.name === "USGS:08171000:00060:00000"
            || obj.name === "USGS:08158700:00065:00000" || obj.name === "USGS:08158700:00060:00000")
            {
              return  obj
            }


          }

          const sitesArr = res.value.timeSeries.filter(isCorrectSite)

          this.setState({
            isLoaded: true,
            // sites: res,
            sites: sitesArr,

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

  handleSiteChange = (event, index, value, siteNum) => {
    this.handleSiteSelect(this.props.siteNum)
    console.log(siteNum, 'changing state')
    this.setState({
      value
    })
    this.state.sites.map((obj, key)=>{
      console.log(siteNum)
      if(obj.name === siteNum){
        return this.setState({
          displaySite: this.state.sites.obj
        })
      }
    })
  }

  handleSiteSelect=(siteNum)=>{
    console.log(siteNum)
  }

  renderSiteInfo(){
    if(this.state.isLoaded){
      return <SiteInfo sites={this.state.sites} site={this.state.displaySite}/>
    }
  }

  renderDropMenu(){
    return <DropDownMenu handleSiteSelect={this.handleSiteSelect} handleSiteChange={(event, index, value, siteNum)=>{this.handleSiteChange(event, index, value, siteNum)}} value={this.state.value}/>
  }

  handleClick=(siteNum)=>{
    return this.state.sites.map((obj, key)=>{
      console.log(siteNum)
      if(obj.name === siteNum){
        return this.setState({
          displaySite: this.state.sites.obj
        })
      }
    })

  }

  render() {

    return (
      <MuiThemeProvider>
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <button id={"USGS:08154700:00065:00000"} onClick={(id)=>{this.handleClick(id)}}>click me</button> */}
        {this.renderSiteInfo()}
        {this.renderDropMenu()}
      </div>
    </MuiThemeProvider>
    );
  }
}

export default App;
