import React, { Component } from 'react';
import '../App.css';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {filterSelectedSite} from '../Scripts'
import { orange200 } from 'material-ui/styles/colors';



function DropdownMenu(props) {
  const styles = {
    selectedTextColor: 'orange200',
    labelStyle: 'orange200',
    color: 'orange200'
  };
  return (
    <div  style={styles} className="dropdownMenuDiv" >
      <DropDownMenu
      style={styles}
        className="dropdownMenu"
        value={props.value}
        onChange={(event, index, value)=>{props.setValue(value); props.setDisplaySite(filterSelectedSite(event, index, props.sites))}}
        autoWidth={true}
      >
        <MenuItem className="menuItem" style={styles} value={1} primaryText="Choose a spot" />
        <MenuItem className="menuItem" style={styles} value={2} onChange={(event, index, value)=>{props.setValue(value); props.setDisplaySite(filterSelectedSite(event, index, props.sites))}} primaryText="Bull Creek @ Loop 360" />
        <MenuItem className="menuItem" style={styles} value={3} onChange={(event, index, value)=>{props.setValue(value); props.setDisplaySite(filterSelectedSite(event, index, props.sites))}} primaryText="Gus Fruh (Greenbelt)" />
        <MenuItem className="menuItem" style={styles} value={4} onChange={(event, index, value)=>{props.setValue(value); props.setDisplaySite(filterSelectedSite(event, index, props.sites))}}  primaryText="Lost Creek (Greenbelt)" />
        <MenuItem className="menuItem" style={styles} value={5} onChange={(event, index, value)=>{props.setValue(value); props.setDisplaySite(filterSelectedSite(event, index, props.sites))}}  primaryText="Barton Springs (Upper)" />
        <MenuItem className="menuItem" style={styles} value={6} onChange={(event, index, value)=>{props.setValue(value); props.setDisplaySite(filterSelectedSite(event, index, props.sites))}}  primaryText="Pedernales Falls" />
        <MenuItem className="menuItem" style={styles} value={7} onChange={(event, index, value)=>{props.setValue(value); props.setDisplaySite(filterSelectedSite(event, index, props.sites))}}  primaryText="Camp Ben McColough" />
        <MenuItem className="menuItem" style={styles} value={8} onChange={(event, index, value)=>{props.setValue(value); props.setDisplaySite(filterSelectedSite(event, index, props.sites))}}  primaryText="Jacob's Well" />
        <MenuItem className="menuItem" style={styles} value={9} onChange={(event, index, value)=>{props.setValue(value); props.setDisplaySite(filterSelectedSite(event, index, props.sites))}}  primaryText="Blue Hole" />
      </DropDownMenu>
    </div>
  );

 
   
  }


export default DropdownMenu
