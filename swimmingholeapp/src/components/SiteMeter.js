import React from 'react';
import '../App.css';
import cautionHeight from "../img/meterIconCaution.png";
import cautionFlow from "../img/meterIconCautionFlow.png";
import low from "../img/meterIconLow.png";
import empty from "../img/meterIconEmpty.png";
import full from "../img/meterIconFull.png";





function SiteMeter (props) {
  
    const displaySite = props.displaySite
  
function waterMeterIcon(waterHeight, waterFlow){
  if(waterFlow == 0){
    return (<div><p>Caution:</p><img className="meterIconImage" src={empty} alt="empty water flow meter" /><p className="bottomText">No Water Flow!!</p></div>)
  } else if(waterHeight <= 1){
    return (<div><p>Caution:</p><img className="meterIconImage" src={empty} alt="empty water height meter" /><p className="bottomText">No Water!!</p></div>)
  } else if (waterHeight <= 1.5){
    return (<div><p>Caution:</p><img className="meterIconImage" src={low} alt="low water height meter" /><p className="bottomText">Water Level Low!!</p></div>)
  } else if (waterHeight <= 5 && waterFlow < 100){
    return (<div><p>Bingo!</p><img className="meterIconImage" src={full} alt="full water height meter" /><p className="bottomText">Enjoy the swim!!</p></div>)
  } else if (waterHeight <= 5 && waterFlow > 100){
    return (<div><p>Caution: Water flow is fast!!</p><img className="meterIconImage" src={cautionFlow} alt="fast water flow meter" /><p className="bottomText">But water level is good!</p></div>)
  } else if (waterHeight > 5){
    return (<div><p>Swim With Caution:</p><img className="meterIconImage" src={cautionHeight} alt="high water level meter" /><p className="bottomText">Water Level High!!</p></div>)
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
