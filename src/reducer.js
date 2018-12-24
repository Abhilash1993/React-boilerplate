import { combineReducers } from 'redux';
import homeReducer from "./home/home.reducer";


const rootReducers = combineReducers({
	home : homeReducer
});
  
export default rootReducers;