import { combineReducers } from "redux";

import itemReducer from "./Reducer.js";

const rootReducer = combineReducers({
  item: itemReducer,
});

export default rootReducer;