import { combineReducers } from 'redux';
import NavReducer from './NavigationReducer';
import AddLightReducer from './common/reducers/AddLightReducer';

const AppReducer = combineReducers({
    nav: NavReducer,
});

export default AppReducer;
