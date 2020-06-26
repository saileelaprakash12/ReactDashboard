import commonReducer from './reducer'
import {combineReducers} from 'redux';
import {reducer as form} from 'redux-form';
const rootreducer=combineReducers({commonReducer,form})

export default  rootreducer