import axios from 'axios';
import { ADD_TRAVEL, GET_ALL_TRAVELS, setTravels, UPDATE_TRAVEL, DELETE_TRAVEL } from '../actions/index'

export const getTravelsMiddleWare = store => next => action => {
    if (action.type === GET_ALL_TRAVELS) {
        // פונקציה לקריאת שרת שאמורה לקבל נתונים
        // מקבלת כפרמטר את הכתובת של השרת שממנו רוצים לקבל נתונים
        axios.get('https://localhost:44388/api/Travels/GetAllTravels')
            // לתוך .then 
            // יש לשלוח פונקציה, הפונקציה הזו תורץ כאשר הנתונים יגיעו, מקבלת כפרמטר את הנתונים שהגיעו מהשרת
            .then(result => {
                console.log("🚀 ~ file: card.crud.js ~ line 9 ~ result", result);
                // store.dispatch({ type: SET_TRAVELS, payload: result.data });
                store.dispatch(setTravels(result.data))
            })
            .catch(error => {
                console.log("🚀 ~ file: card.crud.js ~ line 12 ~ error", error);
            })
    }

    if (action.type === ADD_TRAVEL) {
        // פונקציה לקריאת שרת שאמורה לקבל נתונים
        // מקבלת כפרמטר את הכתובת של השרת שממנו רוצים לקבל נתונים
        axios.post('https://localhost:44388/api/Travels/AddTravel', action.payload)
            // לתוך .then 
            // יש לשלוח פונקציה, הפונקציה הזו תורץ כאשר הנתונים יגיעו, מקבלת כפרמטר את הנתונים שהגיעו מהשרת
            .then(result => {
                console.log("🚀 ~ file: card.crud.js ~ line 9 ~ result", result);
                // store.dispatch({ type: SET_TRAVELS, payload: result.data });
                store.dispatch(setTravels(result.data))
            })
            .catch(error => {
                console.log("🚀 ~ file: card.crud.js ~ line 12 ~ error", error);
            })
    }
    if (action.type === UPDATE_TRAVEL) {
        // פונקציה לקריאת שרת שאמורה לקבל נתונים
        // מקבלת כפרמטר את הכתובת של השרת שממנו רוצים לקבל נתונים
        axios.put('https://localhost:44388/api/Travels/UpdateTravel', action.payload)
            // לתוך .then 
            // יש לשלוח פונקציה, הפונקציה הזו תורץ כאשר הנתונים יגיעו, מקבלת כפרמטר את הנתונים שהגיעו מהשרת
            .then(result => {
                console.log("🚀 ~ file: card.crud.js ~ line 9 ~ result", result);
                // store.dispatch({ type: SET_TRAVELS, payload: result.data });
                store.dispatch(setTravels(result.data))
            })
            .catch(error => {
                console.log("🚀 ~ file: card.crud.js ~ line 12 ~ error", error);
            })
    }
    
    if (action.type === DELETE_TRAVEL) {
        // פונקציה לקריאת שרת שאמורה לקבל נתונים
        // מקבלת כפרמטר את הכתובת של השרת שממנו רוצים לקבל נתונים
        axios.delete('https://localhost:44388/api/Travels/DeleteTravel', action.payload)
            // לתוך .then 
            // יש לשלוח פונקציה, הפונקציה הזו תורץ כאשר הנתונים יגיעו, מקבלת כפרמטר את הנתונים שהגיעו מהשרת
            .then(result => {
                console.log("🚀 ~ file: card.crud.js ~ line 9 ~ result", result);
                // store.dispatch({ type: SET_TRAVELS, payload: result.data });
                store.dispatch(setTravels(result.data))
            })
            .catch(error => {
                console.log("🚀 ~ file: card.crud.js ~ line 12 ~ error", error);
            })
    }
    return next(action)
}