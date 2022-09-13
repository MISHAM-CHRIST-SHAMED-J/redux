const stockReducer = (state = [], action) => {
    switch (action.type) {
      case "ADD_STOCK":
        return [...state, action.payload];
      case "WITHDRAW":
        return state - action.payload;
      default:
        return state;
    }
  };
  
  export default stockReducer;