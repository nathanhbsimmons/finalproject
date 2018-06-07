import React, { Component } from 'react';
import './App.css';


class SiteInfo extends Component {


  render() {
    return (
      <div >


        <h3>{this.props.displaySite[0].sourceInfo.siteName}</h3>

        <p>Gage Height: {this.props.displaySite[1].values[0].value[0].value}</p>
        

        <p>Streamflow: {this.props.displaySite[0].values[0].value[0].value}</p>
  

      </div>
    );
  }
}

export default SiteInfo
