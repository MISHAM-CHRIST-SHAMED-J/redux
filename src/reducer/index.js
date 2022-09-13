import { combineReducers } from "redux";
import accountReducer from "./accountReducer";
import stockReducer from "./stockReducer";

const reducer = combineReducers({
    account : accountReducer,
    stock : stockReducer
})

export default reducer;