import React, { Component } from 'react';
import SiteInfo from './SiteInfo.js'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      sites: [],
      displaySite: null
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
            console.log(obj)
            // return obj.name == id
            if (obj.name == 'USGS:08154700:00065:00000')
            return  obj
            // || obj.name ==  "USGS:08155240:00065:00000"
          }

          const sitesObj = [res.value.timeSeries.filter(isCorrectSite)]

          this.setState({
            isLoaded: true,
            sites: sitesObj
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

  renderSiteInfo(){
    if(this.state.displaySite){
      return <SiteInfo handleClick={()=>{this.handleClick()}} site={this.state.displaySite}/>
    }

  }

  handleClick=(id)=>{
    this.setState({
      displaySite: this.state.sites
    })
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">

          <h1 className="App-title">Welcome to React</h1>
        </header>
        <button id={"USGS:08154700:00065:00000"} onClick={(id)=>{this.handleClick(id)}}>click me</button>
        <div>{this.renderSiteInfo()}</div>
      </div>
    );
  }
}

export default App;
