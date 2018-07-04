import React from 'react';
import '../App.css';
// import {waterMeterIcon} from '../Scripts';
import caution from "../img/meterIconCaution.png";
import low from "../img/meterIconLow.png";
import empty from "../img/meterIconEmpty.png";
import full from "../img/meterIconFull.png";





function SiteMeter (props) {
  
    const displaySite = props.displaySite
  
function waterMeterIcon(waterHeight, waterFlow){
  if(waterHeight < 1){
    return (<div><p>Caution:</p><img className="meterIconImage" src={empty} alt="" /><p className="bottomText">No Water!!</p></div>)
  } else if (waterHeight < 2){
    return (<div><p>Caution:</p><img className="meterIconImage" src={low} alt="" /><p className="bottomText">Water Level Low!!</p></div>)
  } else if (waterHeight > 2 && waterHeight < 4 ){
    return (<div><p>Bingo!</p><img className="meterIconImage" src={full} alt="" /><p className="bottomText">Enjoy the swim!!</p></div>)
  } else if (waterHeight > 4 && waterHeight < 6){
    return (<div><p>Caution:</p><img className="meterIconImage" src={caution} alt="" /><p className="bottomText">WaterLevel High!!</p></div>)
  }
}


    
    if (displaySite) {
      return (
        <div className="displaySite">
      
        {waterMeterIcon(props.displaySite[1].values[0].value[0].value, props.displaySite[0].values[0].value[0].value)}
        </div>
      );
    } else {
      return (<div></div>)
    }
    
  
 
   
}


export default SiteMeter
