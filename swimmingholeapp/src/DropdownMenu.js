import React, { Component } from 'react';
import './App.css';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

const styles = {
  customWidth: {
    width: 200,
  },
};


class DropdownMenu extends Component {


  render() {
    return (
      <div >
        <DropDownMenu

          value={this.props.value}
          onChange={(event, index, value, site)=>{this.props.handleSiteChange(event, index, value)}}
          style={styles.customWidth}
          autoWidth={false}
        >
          <MenuItem value={1} primaryText="Choose a spot" />
          <MenuItem value={2} onChange={(event, index, value, site)=>{this.props.handleSiteChange(event, index, value)}} site={"USGS:08154700:00060:00000"} primaryText="Bull Creek @ Loop 360" />
          <MenuItem value={3} onChange={(event, index, value, site)=>{this.props.handleSiteChange(event, index, value)}} site={"USGS:08155300:00060:00000"} primaryText="Gus Fruth (Greenbelt)" />
          <MenuItem value={4} onChange={(event, index, value, site)=>{this.props.handleSiteChange(event, index, value)}} site={"USGS:08155240:00060:00000"} primaryText="Lost Creek (Greenbelt)" />
          <MenuItem value={5} onChange={(event, index, value, site)=>{this.props.handleSiteChange(event, index, value)}} site={"USGS:08155400:00060:00000"} primaryText="Barton Springs (Upper)" />
          <MenuItem value={6} onChange={(event, index, value, site)=>{this.props.handleSiteChange(event, index, value)}} site={"USGS:08153500:00060:00000"} primaryText="Pedernales Falls" />
          <MenuItem value={7} onChange={(event, index, value, site)=>{this.props.handleSiteChange(event, index, value)}} site={"USGS:08158700:00060:00000"} primaryText="Camp Ben McColough" />
          <MenuItem value={8} onChange={(event, index, value, site)=>{this.props.handleSiteChange(event, index, value)}} site={"USGS:08170990:00060:00000"} primaryText="Jacob's Well" />
          <MenuItem value={9} onChange={(event, index, value, site)=>{this.props.handleSiteChange(event, index, value)}} site={"USGS:08171000:00060:00000"} primaryText="Blue Hole" />
        </DropDownMenu>
      </div>
    );
  }
}

export default DropdownMenu
