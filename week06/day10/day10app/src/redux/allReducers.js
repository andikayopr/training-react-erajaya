import {combineReducers} from 'redux'
import { aboutReducer } from "../pages/about/redux/reducer";

export const allReducers = combineReducers({
    about: aboutReducer
})
