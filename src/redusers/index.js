import {combineReducers} from "redux";
import CarReduser from './car';
import CarDetails from  './carDetels'

const allReducerRouts = combineReducers({
    cars : CarReduser,
    details : CarDetails
});

export default allReducerRouts;