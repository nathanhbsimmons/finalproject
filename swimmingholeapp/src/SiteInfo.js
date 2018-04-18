import React, { Component } from 'react';
import './App.css';


class SiteInfo extends Component {


  render() {
    return (
      <div >


        <h1>{this.props.displaySite[0].sourceInfo.siteName}</h1>

        <h2>Gage Height</h2>
        <h3>{this.props.displaySite[1].values[0].value[0].value}</h3>

        <h2>Streamflow</h2>
        <h3>{this.props.displaySite[0].values[0].value[0].value}</h3>

      </div>
    );
  }
}

export default SiteInfo
