import React, { useState, useContext, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

// ספרייה שיודעת לעשות קריאות שרת
import axios from 'axios';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp'
import NewOrder from './components/NewOrder';
import Management from './components/Management';
import AddTravel from './components/AddTravel';
import UpdateTravel from './components/UpdateTravel';
import ShowPassengersToTravel from './components/ShowPassengersToTravel';
import AddDriver from './components/AddDriver';
import AddBus from './components/AddBus';
import DeleteTravel from './components/DeleteTravel';

// import UsersContext from './data/UsersContext';
// import SitesContext from './data/SitesContext';
// import TravelsContext from './data/TravelsContext';

// import ListView from './components/ListView';
// import ListInput from './components/ListInput';

//בשביל הניווט
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
} from "react-router-dom";



function App() {



  // useRouteMatch -  הוק של ספריית הניווט
  // מחזירה ערכים שנשתמש בהם כשנרצה לבנות ניווט פנימי - בתוך ניווט אחר
  // path - נשתמש בבניה של route - יכלול את תחילת הניתוב בשביל ב path
  // url - נשתמש בו בתור התחילית של הניווט בבניית הלינקים
  //let { path, url } = useRouteMatch();


  return (
    <div className="App">


      <Router>
        <Link to="/SignUp"></Link>
        <Link to="/SignIn"></Link>
        <Link to="/NewOrder"></Link>
        <Link to='/Management'></Link>
        <Link to='/AddTravel'></Link>
        <Link to='/UpdateTravel'></Link>
        <Link to='/ShowPassengersToTravel'></Link>
        <Link to='/DeleteTravel'></Link>

        <Link to='/AddDriver'></Link>
        <Link to='/AddBus'></Link>


        <Link to="/"></Link>
        <Switch>
          <Route path="/SignUp">
            <SignUp />
          </Route>
          <Route path="/SignIn">
            <SignIn />
          </Route>
          <Route path="/NewOrder">
            <NewOrder />
          </Route>
          <Route path="/Management">
            <Management />
          </Route>
          <Route path="/AddTravel">
            <AddTravel />
          </Route>
          <Route path="/UpdateTravel">
            <UpdateTravel />
          </Route>
          <Route path="/ShowPassengersToTravel">
            <ShowPassengersToTravel />
          </Route>
          <Route path="/DeleteTravel">
            <DeleteTravel />
          </Route>
          <Route path="/AddDriver">
            <AddDriver />
          </Route>
          <Route path="/AddBus">
            <AddBus />
          </Route>



          <Route exact path="/">
            <SignIn />
          </Route>
        </Switch>
      </Router>



      {/* 
      <ListInput />
      <ListView />  */}

    </div>
  );
}

export default App;








//התקנות:


//:בשביל הניווט באתר
//npm install react-router-dom


//:עיצובים
//npm install @material-ui/core


//:התקנה של ספריית קריאות
//npm i axios




//משגיח
// כלומר משגיח, הספריה mobx
// תדאג לרנדר את הקומפוננטה בכל שינוי
//npm install mobx