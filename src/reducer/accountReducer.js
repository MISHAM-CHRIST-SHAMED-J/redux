const accountReducer = (state = 0, action) => {
    switch (action.type) {
      case "DEPOSIT":
        return state + action.payload;
      case "WITHDRAW":
        return state - action.payload;
      case "RESET":
          return action.payload
      default:
        return state;
    }
  };
  
  export default accountReducer;
  
  