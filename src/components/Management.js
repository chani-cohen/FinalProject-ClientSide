import React, { useEffect, useState } from 'react';
import '../../src/App.css';


//בשביל הניווט
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useRouteMatch
} from "react-router-dom";
import Grid from '@material-ui/core/Grid';

//עמוד ניהול -  רק מנהל המערכת מורשה לבצע את הפעולות הבאות
function Management() {


    // useRouteMatch -  הוק של ספריית הניווט
    // מחזירה ערכים שנשתמש בהם כשנרצה לבנות ניווט פנימי - בתוך ניווט אחר
    // path - נשתמש בבניה של route - יכלול את תחילת הניתוב בשביל ב path
    // url - נשתמש בו בתור התחילית של הניווט בבניית הלינקים
    //let { path, url } = useRouteMatch();


    return (
        <div>


            <h1>ברוך הבא מנהל</h1>
            {/* למנהל יש אופציות של:
             הוספת נסיעה חדשה
              עידכון נסיעה לשעה אחרת או תאריך אחר אם אין נרשמים
              מחיקת נסיעה אם אין נרשמים 
                הוספת אתר חדש
                הוספת כרטיסים לאתר
                עידכון כרטיס לאתר אם אין נסיעה עתידית עם נרשמים...
                הוספת נהג חדש
                הוספת אוטובוס חדש
                שיבוץ אוטובוס לנסיעה
                שיבוץ נרשמים לאוטובוס
                קביעת מסלול לאוטובוס
                סגירת ההרשמה לנסיעה מסוימת?
                ביטול נסיעה באין מספיק נרשמים?

                עידכון פרטי נהג קיים או מחיקתו באין שיבוץ מסוים בו מופיע
                עידכון אתר או מחיקתו באין נסיעות אליו
            */}


            <Grid container sx={{ display: 'flex', p: 10 }}>
                <Grid item>
                    <Link to='/AddTravel'>הוספת נסיעה חדשה</Link>
                </Grid>
            </Grid>
            <Grid container sx={{ display: 'flex', p: 10 }}>
                <Grid item>
                    <Link to="/UpdateTravel">עדכון נסיעה</Link>
                </Grid>
            </Grid>
            <Grid container sx={{ display: 'flex', p: 10 }}>
                <Grid item>
                    <Link to="/DeleteTravel">מחיקת נסיעה</Link>
                </Grid>
            </Grid>
            <Grid container sx={{ display: 'flex', p: 10 }}>
                <Grid item>
                    <Link to="/SignUp">מחיקת נסיעה</Link>
                </Grid>
            </Grid>
            <Grid container sx={{ display: 'flex', p: 10 }}>
                <Grid item>
                    <Link to="/ShowPassengersToTravel">הצגת נוסעים לנסיעה</Link>
                </Grid>
            </Grid>
            <Grid container sx={{ display: 'flex', p: 10 }}>
                <Grid item>
                    <Link to="/AddDriver">הוספת נהג חדש</Link>
                </Grid>
            </Grid>
            <Grid container sx={{ display: 'flex', p: 10 }}>
                <Grid item>
                    <Link to="/AddBus">הוספת אוטובוס חדש</Link>
                </Grid>
            </Grid>
            <Grid container sx={{ display: 'flex', p: 10 }}>
                <Grid item>
                    <Link to="/SignUp">הוספת אתר חדש</Link>
                </Grid>
            </Grid>
            <Grid container sx={{ display: 'flex', p: 10 }}>
                <Grid item>
                    <Link to="/SignUp">הוספת כרטיסים לאתר</Link>
                </Grid>
            </Grid>
            <Grid container sx={{ display: 'flex', p: 10 }}>
                <Grid item>
                    <Link to="/SignUp">עדכון פרטי נהג</Link>
                </Grid>
            </Grid>
            <Grid container sx={{ display: 'flex', p: 10 }}>
                <Grid item>
                    <Link to="/SignUp">מחיקת אתר</Link>
                </Grid>
            </Grid>
            <Grid container sx={{ display: 'flex', p: 10 }}>
                <Grid item>
                    <Link to="/SignUp">עדכון כרטיס לאתר</Link>
                </Grid>
            </Grid>

        </div>
    )
}

export default Management;


