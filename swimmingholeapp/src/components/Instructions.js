import React from 'react';
import '../App.css';

function Instructions (props) {
  
const displaySite = props.displaySite
  
    if (displaySite) {
      return <p></p>
    } else {
        return <p className="instructions">Select a swimming hole on the map or dropdown menu to see current water conditions.</p>     
    }  
}

export default Instructions
