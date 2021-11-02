import {
    ADD_TRAVEL,
    SET_TRAVELS,
} from '../actions/index'

function manageTravels(state = { travelsList: [] }, action) {
    switch (action.type) {

        case SET_TRAVELS: return { travelsList: [...state.travelsList = action.payload] }
        default:
            return state
    }
}
export default manageTravels;