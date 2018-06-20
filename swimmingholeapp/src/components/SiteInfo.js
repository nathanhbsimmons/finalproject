import React, { Component } from 'react';
import '../App.css';




function SiteInfo (props) {
  
const displaySite = props.displaySite
  
  
  // const renderSiteInfo=(props)=> {
  //   if (props) {
  //     return (<div>
  //       <h3>{props.displaySite[0].sourceInfo.siteName}</h3>
  
  //     <p>Gage Height: {props.displaySite[1].values[0].value[0].value}</p>
      
  
  //     <p>Streamflow: {props.displaySite[0].values[0].value[0].value}</p>
  //     </div>)
  //   } 
  // }

    // return (<div> {renderSiteInfo()}</div> )

    
    if (displaySite) {
      return (
        <div >
        <h3>{props.displaySite[0].sourceInfo.siteName}</h3>
  
        <p>Gage Height: {props.displaySite[1].values[0].value[0].value}</p>
        
    
        <p>Streamflow: {props.displaySite[0].values[0].value[0].value}</p>
        </div>
      );
    } else {
      return (<div></div>)
    }
    
  
 
   
}


export default SiteInfo
