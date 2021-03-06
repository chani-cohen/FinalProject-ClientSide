import { DeviceHubOutlined } from '@material-ui/icons';
import axios from 'axios';
import { GET_ORDERS_BY_TRAVEL_ID, setOrdersOfTravel } from '../actions/index'

export const getOrdersMiddleWare = store => next => action => {
    
    if (action.type === GET_ORDERS_BY_TRAVEL_ID) {
        // פונקציה לקריאת שרת שאמורה לקבל נתונים
        // מקבלת כפרמטר את הכתובת של השרת שממנו רוצים לקבל נתונים
        axios.get(`https://localhost:44388/api/Orders/GetOrderByTravelId/${action.payload}`)
            // לתוך .then 
            // יש לשלוח פונקציה, הפונקציה הזו תורץ כאשר הנתונים יגיעו, מקבלת כפרמטר את הנתונים שהגיעו מהשרת
            .then(result => {
                console.log("🚀 ~ file: card.crud.js ~ line 9 ~ result", result);         
                store.dispatch(setOrdersOfTravel(result.data))
            })
            .catch(error => {
                console.log("🚀 ~ file: card.crud.js ~ line 12 ~ error", error);
            })
    }
    return next(action)
}