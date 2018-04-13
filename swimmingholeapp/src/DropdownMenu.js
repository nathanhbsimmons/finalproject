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
          <MenuItem value={1} site={"USGS:08153500:00060:00000"} primaryText="Choose a spot" />
          <MenuItem value={2} onChange={(event, index, value, site)=>{this.props.handleSiteChange(event, index, value)}} site={"USGS:08153500:00060:00000"} primaryText="Pedernales" />
          <MenuItem value={3} site={"USGS:08153500:00060:00000"} primaryText="Weeknights" />
          <MenuItem value={4} site={"USGS:08153500:00060:00000"} primaryText="Weekends" />
          <MenuItem value={5} site={"USGS:08153500:00060:00000"} primaryText="Weekly" />
        </DropDownMenu>
      </div>
    );
  }
}

export default DropdownMenu
