import {combineReducers} from 'redux';
import {reducer as formReducer } from 'redux-form';
/*renamed the reduce to not confuse */
//we have tu pull this reducer out of the library and hook it up to our combined reducer
import authReducer from './authReducer';
import streamReducer from './streamReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    streams: streamReducer
});