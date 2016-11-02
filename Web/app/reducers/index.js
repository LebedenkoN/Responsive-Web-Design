import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import RecieptsReducer from './reciepts-reducer';

const rootReducer = combineReducers({
    routing: routerReducer,
    reciepts: RecieptsReducer
});

export default rootReducer;
