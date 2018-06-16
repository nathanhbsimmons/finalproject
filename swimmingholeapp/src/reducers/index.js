function value(state = 0, action){
    if(action.type === "SET_VALUE"){
      return action.value;
    }
    return state;
}

function displaySite(state = [], action){
  if(action.type === "SET_DISPLAY_SITE_FROM_DROPDOWN" || action.type === "SET_DISPLAY_SITE_FROM_MAP"){
    if (action.value === 1 || action.target.title == "Bull Creek") {
      const indexStreamFlow = 'USGS:08154700:00060:00000';
      const indexGaugeHeight = 'USGS:08154700:00065:00000';
      const displaySiteArr = this.state.sites.map((obj, key) => {
        if (obj.name === indexStreamFlow || obj.name === indexGaugeHeight) {
          displaySiteArr.push(obj);
        }
      });
      return displaySiteArr
      
    } else if (action.value === 2 || action.target.title == "Gus Fruh") {
      const indexStreamFlow = 'USGS:08155300:00060:00000';
      const indexGaugeHeight = 'USGS:08155300:00065:00000';
      const displaySiteArr = this.state.sites.map((obj, key) => {
        if (obj.name === indexStreamFlow || obj.name === indexGaugeHeight) {
          displaySiteArr.push(obj);
        }
      });
      return displaySiteArr

    } else if (action.value === 3 || action.target.title == "Lost Creek") {
      const indexStreamFlow = 'USGS:08155240:00060:00000';
      const indexGaugeHeight = 'USGS:08155240:00065:00000';
      const displaySiteArr = this.state.sites.map((obj, key) => {
        if (obj.name === indexStreamFlow || obj.name === indexGaugeHeight) {
          displaySiteArr.push(obj);
        }
      });
      return displaySiteArr

    } else if (action.value === 4 || action.target.title == "Barton Springs") {
      const indexStreamFlow = 'USGS:08155400:00060:00000';
      const indexGaugeHeight = 'USGS:08155400:00065:00000';
      const displaySiteArr = this.state.sites.map((obj, key) => {
        if (obj.name === indexStreamFlow || obj.name === indexGaugeHeight) {
          displaySiteArr.push(obj);
        }
      });
      return displaySiteArr

    } else if (action.value === 5 || action.target.title == "Pedernales Falls") {
      const indexStreamFlow = 'USGS:08153500:00060:00000';
      const indexGaugeHeight = 'USGS:08153500:00065:00000';
      const displaySiteArr = this.state.sites.map((obj, key) => {
        if (obj.name === indexStreamFlow || obj.name === indexGaugeHeight) {
          displaySiteArr.push(obj);
        }
      });
      return displaySiteArr

    } else if (action.value === 6 || action.target.title == "Camp Ben McCulloch") {
      const indexStreamFlow = 'USGS:08158700:00060:00000';
      const indexGaugeHeight = 'USGS:08158700:00065:00000';
      const displaySiteArr = this.state.sites.map((obj, key) => {
        if (obj.name === indexStreamFlow || obj.name === indexGaugeHeight) {
          displaySiteArr.push(obj);
        }
      });
      return displaySiteArr

    } else if (action.value === 7 || action.target.title == "Jacob's Well") { 
      const indexStreamFlow = 'USGS:08170990:00060:00000';
      const indexGaugeHeight = 'USGS:08170990:00065:00000';
      const displaySiteArr = this.state.sites.map((obj, key) => {
        if (obj.name === indexStreamFlow || obj.name === indexGaugeHeight) {
          displaySiteArr.push(obj);
        }
      });
      return displaySiteArr

    } else if (action.value === 8 || action.target.title == "Blue Hole") {
      const indexStreamFlow = 'USGS:08171000:00060:00000';
      const indexGaugeHeight = 'USGS:08171000:00065:00000';
     const displaySiteArr = this.state.sites.map((obj, key) => {
        if (obj.name === indexStreamFlow || obj.name === indexGaugeHeight) {
          displaySiteArr.push(obj);
        }
      });
      return displaySiteArr
      
    }
    return action.value;
  }
  
  return state;
}


  const rootReducer = combineReducers({
    value
  });
  export default rootReducer;