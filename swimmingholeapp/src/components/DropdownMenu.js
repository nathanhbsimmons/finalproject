import React, { Component } from 'react';
import '../App.css';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {filterSelectedSite} from '../Scripts'




class DropdownMenu extends Component {
  

  
handleChange=(event, index, value, props)=>{
       
    if(this.props.sites.length > 0 && value == 1){
     return (this.props.setValue(value))
     
    } else if (this.props.sites.length > 0) {
      return (this.props.setValue(value), this.props.setDisplaySite(filterSelectedSite(event, index, this.props.sites)))
    } else {
        return
    }
         
 }    
   render(props) {
    const styles = {
      color: "rgba(70,130,180,0.93)",
      fontFamily: "'Josefin Sans', sans-serif",
      fontWeight: "200",
      contrastText: "rgba(70,130,180,0.93)",
    }

    return (
      <div   className="dropdownMenuDiv" >
        <DropDownMenu
        style={styles}
          className="dropdownMenu"
          value={this.props.value}
          onChange={(event, index, value)=>{this.handleChange(event, index, value)}}
          autoWidth={true}
        >
          <MenuItem  style={styles} className="menuItem"  value={1} onChange={(event, index, value)=>{this.handleChange(event, index, value)}} primaryText="Choose a spot" />
          <MenuItem  style={styles} className="menuItem"  value={2} onChange={(event, index, value)=>{this.handleChange(event, index, value)}} primaryText="Bull Creek @ Loop 360" />
          <MenuItem  style={styles} className="menuItem"  value={3} onChange={(event, index, value)=>{this.handleChange(event, index, value)}} primaryText="Gus Fruh (Greenbelt)" />
          <MenuItem  style={styles} className="menuItem"  value={4} onChange={(event, index, value)=>{this.handleChange(event, index, value)}}  primaryText="Lost Creek (Greenbelt)" />
          <MenuItem  style={styles} className="menuItem"  value={5} onChange={(event, index, value)=>{this.handleChange(event, index, value)}}  primaryText="Barton Springs (Upper)" />
          <MenuItem  style={styles} className="menuItem"  value={6} onChange={(event, index, value)=>{this.handleChange(event, index, value)}}  primaryText="Pedernales Falls" />
          <MenuItem  style={styles} className="menuItem"  value={7} onChange={(event, index, value)=>{this.handleChange(event, index, value)}}  primaryText="Camp Ben McCulloch" />
          <MenuItem  style={styles} className="menuItem"  value={8} onChange={(event, index, value)=>{this.handleChange(event, index, value)}}  primaryText="Jacob's Well" />
          <MenuItem  style={styles} className="menuItem"  value={9} onChange={(event, index, value)=>{this.handleChange(event, index, value)}}  primaryText="Blue Hole" />
        </DropDownMenu>
      </div>
    );
   } 
  

 
   
  }


export default DropdownMenu
