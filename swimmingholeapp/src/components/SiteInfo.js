import React, { Component } from 'react';
import '../App.css';
// import {waterMeterIcon} from '../Scripts';
import caution from "../img/meterIconCaution.png";
import low from "../img/meterIconLow.png";
import empty from "../img/meterIconEmpty.png";
import full from "../img/meterIconFull.png";





function SiteInfo (props) {
  
const displaySite = props.displaySite
  
function waterMeterIcon(waterHeight){
  if(waterHeight < 1){
    return (<div><p>Caution:</p><img className="meterIconImage" src={empty} alt="" /><p className="bottomText">No Water!!</p></div>)
  } else if (waterHeight < 2){
    return (<div><p>Caution:</p><img className="meterIconImage" src={low} alt="" /><p className="bottomText">Water Level Low!!</p></div>)
  } else if (waterHeight > 2){
    return (<div><p>Bingo!</p><img className="meterIconImage" src={full} alt="" /><p className="bottomText">Enjoy the swim!!</p></div>)
  }
}


    
    if (displaySite) {
      return (
        <div className="displaySite">
        {/*<h3>{props.displaySite[0].sourceInfo.siteName}</h3>*/}
        
        <div>
        <p>Water Height: {props.displaySite[1].values[0].value[0].value} FT</p>
        
    
        <p>Water Flow: {props.displaySite[0].values[0].value[0].value} FT³/S</p>
        </div>
        {waterMeterIcon(props.displaySite[1].values[0].value[0].value)}
        </div>
      );
    } else {
      return (<div><p className="instructions">Select a swimming hole on the map or dropdown menu to begin your search.</p></div>)
    }
    
  
 
   
}


export default SiteInfo
