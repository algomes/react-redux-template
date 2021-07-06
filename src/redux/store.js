import { combineReducers } from "redux";
import { createStore } from 'redux';
import myReducer from './reducers/myReducer';

const rootReducer =  combineReducers({
    myReducer
});

const store = createStore(rootReducer);

export default store;