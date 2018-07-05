import React from 'react';
import '../App.css';





function Instructions (props) {
  
const displaySite = props.displaySite
  



    
    if (displaySite) {
      return <p></p>
    } else {
        return <p className="instructions">Select a swimming hole on the map or dropdown menu to begin your search.</p>     

    }
    
  
 
   
}


export default Instructions
