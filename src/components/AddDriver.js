import React, { useEffect, useState } from 'react';
import '../../src/App.css';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';



import { addDriver, getAllDrivers } from '../redux/actions';


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
        driverList: state.driverReducer.driversList || [],
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    addDriver: (d) => dispatch(addDriver(d)),
    getAllDrivers: () => dispatch(getAllDrivers()),
})


function AddNewDriver(props) {

    const classes = useStyles();

    //fields
    //  Tz 
    //  FirstName 
    //  LastName 
    //  Phone 
    //  Status 




    //אובייקט שישמור לי את שדות הנהג החדש 
    const [driverData, setDriverData] = useState({ tz: '', firstName: '', lastName: '', phone: '', status: true });



    const handelDriverData = async (e) => {
        const { name, value } = e.target;
        setDriverData({ ...driverData, [name]: value });

    }


    const addNewDriver = (e) => {
        e.preventDefault();
        // const driver = {
        //     tz: tz,
        //     firstName: firstName,
        //     lastName: lastName,
        //     phone: phone,
        //     status: true,
        // };
        console.log(driverData);
        console.log('after print new driver');

        //קריאת שרת לשמירת הנהג החדשה
        props.addDriver(driverData);
    }

    useEffect(() => {

    }, [driverData]);

    return (
        <Container component="main" maxWidth="xs">

        <div className={classes.paper} style={{ width: '100%' }}>

            <Box
                sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }}
            //sx={{ p: 1, order: 2 }} style={{ display: 'flex', flexDirection: 'column' }}
            >

            <form className={classes.form} noValidate>
            <Grid container spacing={2}>
            <Grid item xs={12}>
            <TextField
            variant="outlined"
            required
            fullWidth
            id="tz"
            label="תעודת זהות של הנהג"
            name="tz"
            autoComplete="name"
            onChange={handelDriverData}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
            variant="outlined"
            required
            fullWidth
            id="firstName"
            label="שם פרטי של הנהג"
            name="firstName"
            autoComplete="name"
            onChange={handelDriverData}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
            variant="outlined"
            required
            fullWidth
            id="lastName"
            label="שם משפחה של הנהג"
            name="lastName"
            autoComplete="name"
            onChange={handelDriverData}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
            variant="outlined"
            required
            fullWidth
            id="phone"
            label="מספר טלפון של הנהג"
            name="phone"
            autoComplete="name"
            onChange={handelDriverData}
            />
            </Grid>

            <div style={{ margin: '20px' }}>
            <Button variant="contained" size="small" onClick={addNewDriver}>
            הוסף
            </Button>
            </div>
            </Grid>
            </form>
            </Box>
        </div>
        </Container>
    );


}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddNewDriver);