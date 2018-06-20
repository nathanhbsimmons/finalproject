import {combineReducers} from "redux";

function value(state = 0, action){
    if(action.type === "SET_VALUE"){
      return action.value;
    }
    return state;
}

function sites(state = [], action){
  if(action.type === "SITES_FETCHED"){
    return action.value;
  }
  return state;
}

function displaySite(state = [], action){

  if(action.type === "SET_DISPLAY_SITE"){
    
    return action.value;
  }
  
  return state;
}


  const rootReducer = combineReducers({
    value, displaySite, sites
  });
  export default rootReducer;