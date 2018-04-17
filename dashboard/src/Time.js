import React, { Component } from 'react';

import './App.css';

class Time extends Component {
  componentDidMount() {
   this.timerID = setInterval(
     () => this.tick(),
     1000
   );
 }

 componentWillUnmount() {
   clearInterval(this.timerID);
 }

 tick() {
   this.setState({
     date: new Date()
   });
 }

 render() {
   return (
     <div>
       <h1></h1>
       <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
     </div>
   );
 }
}


export default Time;
