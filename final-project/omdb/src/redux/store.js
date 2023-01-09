import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
// import favoriteReducer from './favoriteSlice'

const reducer = combineReducers({
  reducers
});

export const store = configureStore({
  reducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(thunk),
});