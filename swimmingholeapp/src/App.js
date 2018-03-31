import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      sites: []
    };
  }

  componentDidMount() {
    fetch("https://waterservices.usgs.gov/nwis/iv/?&site=08154700&format=json")
      .then(res => res.json())
      .then(
        (res) => {

          this.setState({
            isLoaded: true,
            sites: res.value
          });
          console.log(this.state.sites.timeSeries[0].values[1].value[0].value)
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

  renderSiteValue(){
    if(this.state.isLoaded){
      return <p>{this.state.sites.timeSeries[0].values[1].value[0].value}</p>
    }

  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {this.renderSiteValue()}
        <p className="App-intro">

        </p>
      </div>
    );
  }
}

export default App;
