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



import { addBus, getAllBusses } from '../redux/actions';


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
        bussesList: state.driverReducer.bussesList || [],
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    addBus: (b) => dispatch(addBus(b)),
    getAllBusses: () => dispatch(getAllBusses()),
})


function AddNewBus(props) {

    const classes = useStyles();

    //fields
    // string CmBus 
    // int SeveralPlaces 
    // string Company 
    // bool? Status 



    //אובייקט שישמור לי את שדות הנהג החדש 
    const [busData, setBusData] = useState({ cmBus: '', severalPlaces: 0, company: '', status: true });



    const handeBusData = async (e) => {
        const { name, value } = e.target;
        setBusData({ ...busData, [name]: value });

    }


    const addNewBus = (e) => {
        e.preventDefault();
     
        console.log(busData);
        console.log('after print new bus');

        //קריאת שרת לשמירת הנהג החדשה
        props.addBus(busData);
    }

    useEffect(() => {

    }, [busData]);

    return (
        <Container component="main" maxWidth="xs">

        <div className={classes.paper} style={{ width: '100%' }}>

            <Box
                sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }}
            >

            <form className={classes.form} noValidate>
            <Grid container spacing={2}>
            <Grid item xs={12}>
            <TextField
            variant="outlined"
            required
            fullWidth
            id="cmBus"
            label="מספר סידורי של האוטובוס"
            name="cmBus"
            autoComplete="name"
            onChange={handeBusData}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
            variant="outlined"
            required
            fullWidth
            type="number"
            id="severalPlaces"
            label="מספר מקומות ישיבה"
            name="severalPlaces"
            autoComplete="name"
            onChange={handeBusData}
            />
            </Grid>
            <Grid item xs={12}>
            <TextField
            variant="outlined"
            required
            fullWidth
            id="company"
            label="שם של חברת האוטובוס"
            name="company"
            autoComplete="name"
            onChange={handeBusData}
            />
            </Grid>
     

            <div style={{ margin: '20px' }}>
            <Button variant="contained" size="small" onClick={addNewBus}>
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
)(AddNewBus);