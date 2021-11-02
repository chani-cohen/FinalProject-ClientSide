import {
    SET_ORDERS_OF_TRAVEL,
    //GET_ALL_ORDERS,
} from '../actions/index'

function manageOrder(state = { ordersOfTravelList: [] }, action) {
    debugger;
    switch (action.type) {
        
        case SET_ORDERS_OF_TRAVEL: return { ordersOfTravelList: [...state.ordersOfTravelList = action.payload] }
        default:
            return state
    }
}
export default manageOrder;