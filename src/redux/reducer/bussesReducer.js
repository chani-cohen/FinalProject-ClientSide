import {
    SET_BUSSES,
} from '../actions/index'

function manageBus(state = { bussesList: [] }, action) {
    debugger;
    switch (action.type) {
        
        case SET_BUSSES: return { bussesList: [...state.bussesList = action.payload] }
        default:
            return state
    }
}
export default manageBus;