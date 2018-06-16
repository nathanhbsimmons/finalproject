import React, { Component } from 'react';
import '../App.css';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';




class DropdownMenu extends Component {


  render() {
    return (
      <div className="dropdownMenuDiv" >
        <DropDownMenu
          className="dropdownMenu"
          value={this.props.value}
          onChange={(event, index, value, site)=>{this.props.handleSiteChange(event, index, value)}}
          autoWidth={false}
        >
          <MenuItem className="menuItem" value={1} primaryText="Choose a spot" />
          <MenuItem className="menuItem" value={2} onChange={(event, index, value, site)=>{this.props.handleSiteChange(event, index, value)}} primaryText="Bull Creek @ Loop 360" />
          <MenuItem className="menuItem" value={3} onChange={(event, index, value, site)=>{this.props.handleSiteChange(event, index, value)}} primaryText="Gus Fruh (Greenbelt)" />
          <MenuItem className="menuItem" value={4} onChange={(event, index, value, site)=>{this.props.handleSiteChange(event, index, value)}}  primaryText="Lost Creek (Greenbelt)" />
          <MenuItem className="menuItem" value={5} onChange={(event, index, value, site)=>{this.props.handleSiteChange(event, index, value)}}  primaryText="Barton Springs (Upper)" />
          <MenuItem className="menuItem" value={6} onChange={(event, index, value, site)=>{this.props.handleSiteChange(event, index, value)}}  primaryText="Pedernales Falls" />
          <MenuItem className="menuItem" value={7} onChange={(event, index, value, site)=>{this.props.handleSiteChange(event, index, value)}}  primaryText="Camp Ben McColough" />
          <MenuItem className="menuItem" value={8} onChange={(event, index, value, site)=>{this.props.handleSiteChange(event, index, value)}}  primaryText="Jacob's Well" />
          <MenuItem className="menuItem" value={9} onChange={(event, index, value, site)=>{this.props.handleSiteChange(event, index, value)}}  primaryText="Blue Hole" />
        </DropDownMenu>
      </div>
    );
  }
}

export default DropdownMenu
