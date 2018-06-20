import React, { Component } from 'react';
import '../App.css';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';
import {filterSelectedSite} from '../Scripts'



function DropdownMenu(props) {

  return (
    <div className="dropdownMenuDiv" >
      <DropDownMenu
        className="dropdownMenu"
        value={props.value}
        onChange={(event, index, value)=>{props.setValue(value); props.setDisplaySite(filterSelectedSite(event, index, props.sites))}}
        autoWidth={false}
      >
        <MenuItem className="menuItem" value={1} primaryText="Choose a spot" />
        <MenuItem className="menuItem" value={2} onChange={(event, index, value)=>{props.setValue(value); props.setDisplaySite(filterSelectedSite(event, index, props.sites))}} primaryText="Bull Creek @ Loop 360" />
        <MenuItem className="menuItem" value={3} onChange={(event, index, value)=>{props.setValue(value); props.setDisplaySite(filterSelectedSite(event, index, props.sites))}} primaryText="Gus Fruh (Greenbelt)" />
        <MenuItem className="menuItem" value={4} onChange={(event, index, value)=>{props.setValue(value); props.setDisplaySite(filterSelectedSite(event, index, props.sites))}}  primaryText="Lost Creek (Greenbelt)" />
        <MenuItem className="menuItem" value={5} onChange={(event, index, value)=>{props.setValue(value); props.setDisplaySite(filterSelectedSite(event, index, props.sites))}}  primaryText="Barton Springs (Upper)" />
        <MenuItem className="menuItem" value={6} onChange={(event, index, value)=>{props.setValue(value); props.setDisplaySite(filterSelectedSite(event, index, props.sites))}}  primaryText="Pedernales Falls" />
        <MenuItem className="menuItem" value={7} onChange={(event, index, value)=>{props.setValue(value); props.setDisplaySite(filterSelectedSite(event, index, props.sites))}}  primaryText="Camp Ben McColough" />
        <MenuItem className="menuItem" value={8} onChange={(event, index, value)=>{props.setValue(value); props.setDisplaySite(filterSelectedSite(event, index, props.sites))}}  primaryText="Jacob's Well" />
        <MenuItem className="menuItem" value={9} onChange={(event, index, value)=>{props.setValue(value); props.setDisplaySite(filterSelectedSite(event, index, props.sites))}}  primaryText="Blue Hole" />
      </DropDownMenu>
    </div>
  );

 
   
  }


export default DropdownMenu
