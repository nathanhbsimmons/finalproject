import React, { Component } from 'react';
import './App.css';


class StoryItem extends Component {


  render() {
    return (
      <div >

        <h1>{this.props.title}</h1>
        <p>{this.props.author}</p>


      </div>
    );
  }
}

export default StoryItem;
