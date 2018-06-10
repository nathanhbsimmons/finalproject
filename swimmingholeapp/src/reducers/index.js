function handleSiteChange(state = 0, action){
    if(action.type === "HANDLE_DROPDOWN_SELECTED_CHANGE"){
      return action.value;
    }
    return state;
  }

  const rootReducer = combineReducers({
    handleSiteChange
  });
  export default rootReducer;