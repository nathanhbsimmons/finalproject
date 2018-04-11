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
        {/* <DropDownMenu value={this.props.value} onChange={(event, index, value, siteNum)=>{this.props.handleSiteChange(event, index, value, siteNum)}}>
          <MenuItem value={1} primaryText="Never" />
          <MenuItem value={2} primaryText="Every Night" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </DropDownMenu>
        <br /> */}
        <DropDownMenu
          
          value={this.props.value}
          onChange={(event, index, value, siteNum)=>{this.props.handleSiteChange(event, index, value, siteNum)}}
          style={styles.customWidth}
          autoWidth={false}
        >
          <MenuItem value={1} primaryText="Custom width" />
          <MenuItem value={2} siteNum={"USGS:08153500:00060:00000"} primaryText="Pedernales" />
          <MenuItem value={3} primaryText="Weeknights" />
          <MenuItem value={4} primaryText="Weekends" />
          <MenuItem value={5} primaryText="Weekly" />
        </DropDownMenu>
      </div>
    );
  }
}

export default DropdownMenu
