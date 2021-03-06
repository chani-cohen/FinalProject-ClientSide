import { combineReducers } from 'redux';
import list from './listReducers';
import travelReducer from './travelsReducers';
import siteReducer from './sitesReducers';
import ticketReducer from './ticketsReducers';
import userReducer  from './userReducer';
import streetReducer from './streetsReducer';
import ordersOfTravelReducer  from './ordersOfTravelReducer';
import orderOfThisCustomerReducer  from './ordersOfThisCustomerReducer';
import stationReducer  from './stationsReducer';
import neighborhoodReducer  from './neighborhoodsReducer';
import driverReducer  from './driversReducer';
import bussesReducer from './bussesReducer';

export default combineReducers({
 list,
 travelReducer,
 siteReducer,
 ticketReducer,
 //!!
 userReducer,
 streetReducer,
 ordersOfTravelReducer,
 orderOfThisCustomerReducer,
 stationReducer,
 neighborhoodReducer,
 driverReducer,
 bussesReducer,
})