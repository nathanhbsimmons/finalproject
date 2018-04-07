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

            if (obj.name === "USGS:08154700:00065:00000" || obj.name === "USGS:08155240:00065:00000"
            || obj.name === "USGS:08155300:00065:00000" || obj.name === "USGS:08155400:00065:00000"
            || obj.name === "USGS:08170990:63680:00000" || obj.name === "USGS:08153500:00065:00000"
            || obj.name === "USGS:08171000:00065:00000" || obj.name === "USGS:08158700:00065:00000")
            {
              return  obj
            }


          }

          const sitesArr = res.value.timeSeries.filter(isCorrectSite)

          this.setState({
            isLoaded: true,
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

  renderSiteInfo(){
    if(this.state.displaySite){
      return <SiteInfo handleClick={()=>{this.handleClick()}} site={this.state.displaySite}/>
    }
  }

  handleClick=(id)=>{
    return this.state.sites.map((obj, key)=>{
      console.log(id)
      if(obj.name === id){
        return this.setState({
          displaySite: this.state.sites.obj
        })
      }
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
