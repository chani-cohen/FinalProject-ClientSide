import React, { useEffect, useState } from 'react';
import '../../src/App.css';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@material-ui/core/styles';

import { getAllTravels, addTravel, getAllSites } from '../redux/actions';


const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

const mapStateToProps = (state) => {
    // userReducer - האובייקט מהקומביין
    return {
        travelsList: state.travelReducer.travelsList || [],
        sitesList: state.siteReducer.sitesList || [],
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    getAllTravels: () => dispatch(getAllTravels()),
    addTravel: (t) => dispatch(addTravel(t)),
    getAllSites: () => dispatch(getAllSites()),
})


function AddTravel(props) {

    const classes = useStyles();

    const listTravels = props.travelsList || [];
    const listSites = props.sitesList || [];

    useEffect(() => {
        props.getAllTravels();
        props.getAllSites();
    }, [])

    // //אפשר למחוק את זה?????
    // useEffect(() => {
    //     console.log(listTravels);
    // }, [listTravels])





    //!!
    //קומבו בוקס לבחירת אתר מתאים לנסיעה
    const [siteType, setSiteType] = useState('בחר אתר');
    //פונקציה שמטפלת בשינוי של בחירת אתר
    const handleChangeSite = (event) => {
        const s = event.target.value;   //קוד אתר שנבחר בקומבו בוקס
        //alert(t);
        setSiteType(s);
    };


    const addNewTravel = (e) => {
        e.preventDefault();
        const travel = {
            siteId: siteType,
            travelDate: date,
            leavingTime: time1,
            returnTime: time2,
        };
        console.log(travel);
        console.log('after print new travel');

        //קריאת שרת לשמירת הנסיעה החדשה
        props.addTravel(travel);
    }

    let dToday = new Date();
    const [date, setDate] = useState(new Date());
    const onChangeDate = (e) => {
        setDate(e.target.value);
    }

    const [time1, setTime1] = useState();
    const onChangeTime1 = (e) => {
        setTime1(e.target.value);
    }



    const [time2, setTime2] = useState();
    const onChangeTime2 = (e) => {
        setTime2(e.target.value);
    }

    return (
        <div>
            <h1>הוספת נסיעה חדשה</h1>

            {/* <form className={classes.form} noValidate> */}
                <div className={classes.paper} style={{ width: '100%' }}>
                    <Box
                        sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }}
                    //sx={{ p: 1, order: 2 }} style={{ display: 'flex', flexDirection: 'column' }}
                    >

                        {/* <label for="appt">בחר אתר:</label> */}
                        <TextField
                            style={{ margin: '20px' }}
                            // style={{ padding: '20px' }}
                            id="outlined-select-site"
                            select
                            label="בחר אתר"
                            fullWidth
                            value={siteType}
                            onChange={handleChangeSite}
                        >
                            {listSites.map((s) => (
                                <MenuItem key={s.siteId} value={s.siteId}>
                                    {s.nameSite}
                                </MenuItem>
                            ))}
                        </TextField>
                        <div  style={{ margin: '20px' }}>
                            <label for="start" style={{marginLeft: 10}}>תאריך נסיעה:</label>

                            <input type="date" id="start" name="trip-start"
                                value={date}
                                onChange={onChangeDate}
                                min={dToday} max="2022-12-30">

                            </input>
                        </div>
                        <div  style={{ margin: '20px' }}>
                            <label for="appt" style={{marginLeft: 15}}>זמן יציאה:</label>
                            <input value={time1} type="time" id="appt1" name="appt" onChange={onChangeTime1}
                                min="00:00" max="23:00" required></input>
                        </div>
                        <div  style={{ margin: '20px' }}>
                            <label for="appt2" style={{marginLeft: 15}}>זמן חזרה:</label>
                            <input value={time2} type="time" id="appt2" name="appt" onChange={onChangeTime2}
                                min="00:00" max="23:00" required></input>
                        </div>
                        <div  style={{ margin: '20px' }}>
                            <Button variant="contained" size="small" onClick={addNewTravel}>
                                הוסף
                </Button>
                        </div>
                    </Box>
                </div>
            {/* </form> */}


        </div >
    )

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddTravel);
