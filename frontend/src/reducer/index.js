import { combineReducers } from "@reduxjs/toolkit";
import stableReducer from "./stable.reducer";
import listReducer from "./list.reducer";

const rootReducer = combineReducers({
  stable: stableReducer,
  list: listReducer
});

export default rootReducer;
