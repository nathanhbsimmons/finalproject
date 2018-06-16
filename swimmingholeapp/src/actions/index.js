export function setValue(value){
    return {
      type:"SET_VALUE",
      value: value
    }
  }
  
  export function setDisplaySiteFromDropdown(index){
    return {
      type:"SET_DISPLAY_SITE_FROM_DROPDOWN",
      value: index
    }
  } 

  export function setDisplaySiteFromMap(event){
    return {
      type:"SET_DISPLAY_SITE_FROM_MAP",
      value: event
    }
  } 