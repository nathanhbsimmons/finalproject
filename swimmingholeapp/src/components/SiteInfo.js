import React from 'react';
import '../App.css';





function SiteInfo (props) {
  
const displaySite = props.displaySite
  



    
    if (displaySite) {
      return (
        <div className="displaySite">
        
        
        <div>
        <h3 className="siteName">{props.displaySite[0].sourceInfo.siteName}</h3>
        <p>Water Height: {props.displaySite[1].values[0].value[0].value} FT</p>
        
    
        <p>Water Flow: {props.displaySite[0].values[0].value[0].value} FT³/S</p>
        </div>
        
        </div>
      );
    } else {
      return (<div></div>)
    }
    
  
 
   
}


export default SiteInfo
