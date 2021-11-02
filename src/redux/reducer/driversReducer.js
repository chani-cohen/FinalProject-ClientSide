import {
    SET_DRIVERS,
} from '../actions/index'

function manageDriver(state = { driversList: [] }, action) {
    debugger;
    switch (action.type) {
        
        case SET_DRIVERS: return { driversList: [...state.driversList = action.payload] }
        default:
            return state
    }
}
export default manageDriver;