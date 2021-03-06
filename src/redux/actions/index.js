/*
* action types
*/
export const ADD_ITEM = 'ADD_ITEM'

/* Travels */
export const ADD_TRAVEL = 'ADD_TRAVEL'
export const GET_ALL_TRAVELS = 'GET_ALL_TRAVELS'
export const SET_TRAVELS = 'SET_TRAVELS'
export const UPDATE_TRAVEL= 'UPDATE_TRAVEL'
export const DELETE_TRAVEL= 'DELETE_TRAVEL'


/* Sites */
export const ADD_SITE= 'ADD_SITE'
export const SET_SITES= 'SET_SITES'
export const GET_ALL_SITES= 'GET_ALL_SITES'


/* Tickets */
export const ADD_TICKET= 'ADD_TICKET'
export const SET_TICKETS= 'SET_TICKETS'

export const GET_ALL_TICKETS= 'GET_ALL_TICKETS'


/* Streets */
export const GET_ALL_STREETS= 'GET_ALL_STREETS'
export const SET_STREETS= 'SET_STREETS'


/* Orders */
export const GET_ORDERS_BY_TRAVEL_ID= 'GET_ORDERS_BY_TRAVEL_ID'
export const SET_ORDERS_OF_TRAVEL= 'SET_ORDERS_OF_TRAVEL'

//הוספת הזמנה ללקוח מסוים!!
export const ADD_ORDER='ADD_ORDER';

//Order of this customer
export const GET_ALL_ORDERS_OF_THIS_CUSTOMER='GET_ALL_ORDERS_OF_THIS_CUSTOMER';
export const SET_ORDERS_OF_THIS_CUSTOMER='SET_ORDERS_OF_THIS_CUSTOMER';


/* Neighborhood */
export const GET_ALL_NEIGHBORHOODS= 'GET_ALL_NEIGHBORHOODS'
export const SET_NEIGHBORHOODS= 'SET_NEIGHBORHOODS'


//User
export const SET_USER= 'SET_USER'
export const GET_USER= 'GET_USER'


//Stations
export const GET_ALL_STATIONS= 'GET_ALL_STATIONS'
export const SET_STATIONS= 'SET_STATIONS'


//Drivers
export const GET_ALL_DRIVERS= 'GET_ALL_DRIVERS'
export const SET_DRIVERS= 'SET_DRIVERS'
export const ADD_DRIVER='ADD_DRIVER';


//Busses
export const GET_ALL_BUSSES= 'GET_ALL_BUSSES'
export const SET_BUSSES= 'SET_BUSSES'
export const ADD_BUS='ADD_BUS';



/*
* action creators
*/
export function addItem(text) {
    return { type: ADD_ITEM, payload: text }
}



/* Travels */
export function addTravel(travel) {
    return { type: ADD_TRAVEL, payload: travel }
}

export function updateTravel(travel){
    return { type: UPDATE_TRAVEL, payload: travel }
}

export function getAllTravels() {
    return { type: GET_ALL_TRAVELS }
}

export function setTravels(travels) {
    return { type: SET_TRAVELS, payload: travels }
}

export function deleteTravel(travelId) {
    return { type: DELETE_TRAVEL, payload: travelId }
}


/* Sites */
export function addSite(site) {
    return { type: ADD_SITE, payload: site }
}

export function getAllSites() {
    return { type: GET_ALL_SITES }
}

export function setSites(sites) {
    return { type: SET_SITES, payload: sites }
}



/* Tickets */
export function addTicket(ticket) {
    return { type: ADD_TICKET, payload: ticket }
}

export function getAllTickets(siteId) {
    return { type: GET_ALL_TICKETS, payload: siteId}
}

export function setTickets(tickets) {
    return { type: SET_TICKETS, payload: tickets }
}


/* Streets */
export function getAllStreets() {
    return { type: GET_ALL_STREETS }
}
export function setStreets(streets) {
    return { type: SET_STREETS, payload: streets }
}



/* Neighborhood */
export function getAllNeighborhoods() {
    return { type: GET_ALL_NEIGHBORHOODS }
}
export function setNeighborhoods(neighborhoods){
    return {type: SET_NEIGHBORHOODS, payload: neighborhoods}
}



/* User */
export function getUser() {
    return { type: GET_USER }
}
export function setUser(user) {
    return { type: SET_USER, payload: user }
}

/* Orders */
export function getOrdersByTravelId(travelId) {
    return { type: GET_ORDERS_BY_TRAVEL_ID, payload: travelId }
}
export function setOrdersOfTravel(orders) {
    return { type: SET_ORDERS_OF_TRAVEL, payload: orders }
}
export function addOrder(order) {
    return { type: ADD_ORDER, payload: order }
}


/* Orders of this customer */
export function getOrdersOfThisCustomer(customerId) {
    return { type: GET_ALL_ORDERS_OF_THIS_CUSTOMER, payload: customerId }
}
export function setOrdersOfThisCustomer(ordersOfThisCustomer) {
    return { type: SET_ORDERS_OF_THIS_CUSTOMER, payload: ordersOfThisCustomer }
}

/*  Stations */
export function getAllStations() {
    return { type: GET_ALL_STATIONS }
}

export function setStations(stations) {
    return { type: SET_STATIONS, payload: stations }
}

/*  Drivers */
export function getAllDrivers() {
    return { type: GET_ALL_DRIVERS }
}

export function setDrivers(drivers) {
    return { type: SET_DRIVERS, payload: drivers }
}

export function addDriver(driver) {
    return { type: ADD_DRIVER, payload: driver }
}


/*  Busses */
export function getAllBusses() {
    return { type: GET_ALL_BUSSES }
}

export function setBusses(busses) {
    return { type: SET_BUSSES, payload: busses }
}

export function addBus(bus) {
    return { type: ADD_BUS, payload: bus }
}