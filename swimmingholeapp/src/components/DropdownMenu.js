import React from 'react';
import '../App.css';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {filterSelectedSite} from '../Scripts'




function DropdownMenu(props) {
  const styles = {
    color: "rgba(70,130,180,0.93)",
    fontFamily: "'Josefin Sans', sans-serif",
    fontWeight: "500",
    contrastText: "rgba(70,130,180,0.93)",
  }
    
  return (
    <div   className="dropdownMenuDiv" >
      <DropDownMenu
      style={styles}
        className="dropdownMenu"
        value={props.value}
        onChange={(event, index, value)=>{props.setValue(value); props.setDisplaySite(filterSelectedSite(event, index, props.sites))}}
        autoWidth={true}
      >
        <MenuItem  style={styles} className="menuItem"  value={1} primaryText="Choose a spot" />
        <MenuItem  style={styles} className="menuItem"  value={2} onChange={(event, index, value)=>{props.setValue(value); props.setDisplaySite(filterSelectedSite(event, index, props.sites))}} primaryText="Bull Creek @ Loop 360" />
        <MenuItem  style={styles} className="menuItem"  value={3} onChange={(event, index, value)=>{props.setValue(value); props.setDisplaySite(filterSelectedSite(event, index, props.sites))}} primaryText="Gus Fruh (Greenbelt)" />
        <MenuItem  style={styles} className="menuItem"  value={4} onChange={(event, index, value)=>{props.setValue(value); props.setDisplaySite(filterSelectedSite(event, index, props.sites))}}  primaryText="Lost Creek (Greenbelt)" />
        <MenuItem  style={styles} className="menuItem"  value={5} onChange={(event, index, value)=>{props.setValue(value); props.setDisplaySite(filterSelectedSite(event, index, props.sites))}}  primaryText="Barton Springs (Upper)" />
        <MenuItem  style={styles} className="menuItem"  value={6} onChange={(event, index, value)=>{props.setValue(value); props.setDisplaySite(filterSelectedSite(event, index, props.sites))}}  primaryText="Pedernales Falls" />
        <MenuItem  style={styles} className="menuItem"  value={7} onChange={(event, index, value)=>{props.setValue(value); props.setDisplaySite(filterSelectedSite(event, index, props.sites))}}  primaryText="Camp Ben McColough" />
        <MenuItem  style={styles} className="menuItem"  value={8} onChange={(event, index, value)=>{props.setValue(value); props.setDisplaySite(filterSelectedSite(event, index, props.sites))}}  primaryText="Jacob's Well" />
        <MenuItem  style={styles} className="menuItem"  value={9} onChange={(event, index, value)=>{props.setValue(value); props.setDisplaySite(filterSelectedSite(event, index, props.sites))}}  primaryText="Blue Hole" />
      </DropDownMenu>
    </div>
  );

 
   
  }


export default DropdownMenu
