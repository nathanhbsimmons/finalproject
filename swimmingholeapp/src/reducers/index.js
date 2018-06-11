function value(state = 0, action){
    if(action.type === "SET_VALUE"){
      return action.value;
    }
    return state;
}

  const rootReducer = combineReducers({
    value
  });
  export default rootReducer;