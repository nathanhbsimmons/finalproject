import React, { Component } from 'react';
import './App.css';


class SiteInfo extends Component {
// this.state.sites.timeSeries[0].values[1].value[0].value

  render() {
    return (
      <div >

        {/* <button id={"USGS:08154700:00065:00000"} onClick={()=>{this.props.handleClick()}}>click me</button> */}
        <h1>{this.props.site[0][0].sourceInfo.siteName}</h1>
        <p>jhjhh</p>

      </div>
    );
  }
}

export default SiteInfo
