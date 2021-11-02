import React, { useEffect, useState } from 'react';
import '../../src/App.css';
import { connect } from 'react-redux';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { getAllTravels, updateTravel } from '../redux/actions';
import Button from '@mui/material/Button';


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
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    getAllTravels: () => dispatch(getAllTravels()),
    //addTravel: (t) => dispatch(addTravel(t)),
    updateTravel: (t)=> dispatch(updateTravel(t)),
})


function UpdateTravel(props) {

    const classes = useStyles();
    const [bold, setBold] = useState(null);

    const listTravels = props.travelsList || [];
    const listSites = props.sitesList || [];

    useEffect(() => {
        props.getAllTravels();
    }, [])
 
    //אובייקט ששומר את הנסיעה לעדכון
    const [travel, setTravel]= useState({});


    //אובייקט שישמור את שעת היציאה 
    const [time1, setTime1] = useState();
    const onChangeTime1 = (e) => {
        setTime1(e.target.value);
        setTravel({ ...travel, ["leavingTime"]: e.target.value})
    }


    //אובייקט שישמור את שעת החזרה
    const [time2, setTime2] = useState();
    const onChangeTime2 = (e) => {
        setTime2(e.target.value);
        setTravel({ ...travel, ["returnTime"]: e.target.value})
    }


    //לאחר לחיצה על שורה בטבלת נסיעות
    const AfterSelecetedRow = (e, row) => {

        console.log(row);
        //שינוי צבע השורה למודגשת   
        setBold(row.travelId);

        //טעינת השעות של הנסיעה הנבחרת 
        setTime1(row.leavingTime);
        setTime2(row.returnTime);
        setTravel({
            travelId: row.travelId,
            siteId: row.siteId,
            travelDate: row.travelDate,
            leavingTime: row.leavingTime,
            returnTime: row.returnTime,
        })
    }


    //פונקציה שמבצעת את עדכון הנסיעה
    const updateTravel= (e)=>{
        //שולחים את Travel
        props.updateTravel(travel);
    }


    return (
        <div>
            <h1>עדכון נסיעה</h1>

            <div style={{ width: '100%', marginRight: 250 }} >
                <Box sx={{ display: 'flex', p: 1 }}>
                    <Box sx={{ p: 1, order: 1 }}>
                        <TableContainer className={classes.tableContainer} component={Paper}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>אתר</TableCell>
                                        <TableCell align="right">תאריך נסיעה</TableCell>
                                        <TableCell align="right">שעת יציאה</TableCell>
                                        <TableCell align="right">שעת חזרה</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {listTravels && listTravels.map((row) => (
                                        <TableRow key={row.travelId} onClick={(e) => { AfterSelecetedRow(e, row) }} className={bold === row.travelId ? 'design_select_Red' : ''}>
                                            <TableCell component="th" scope="row">
                                                {row.site.nameSite}
                                            </TableCell>
                                            <TableCell align="right">{row.travelDate.substring(0, 10)}</TableCell>
                                            <TableCell align="right">{row.leavingTime}</TableCell>
                                            <TableCell align="right">{row.returnTime}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>


                    </Box>
                    <Box sx={{ p: 1, order: 2 }}>
                        <div className={classes.paper} style={{ width: '100%' }}>
                            <Box
                                sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }}
                            >


                                <div style={{ margin: '20px' }}>
                                    <label for="appt" style={{ marginLeft: 15 }}>זמן יציאה:</label>
                                    <input value={time1} type="time" id="appt1" name="appt" onChange={onChangeTime1}
                                        min="00:00" max="23:00" required></input>
                                </div>
                                <div style={{ margin: '20px' }}>
                                    <label for="appt2" style={{ marginLeft: 15 }}>זמן חזרה:</label>
                                    <input value={time2} type="time" id="appt2" name="appt" onChange={onChangeTime2}
                                        min="00:00" max="23:00" required></input>
                                </div>
                                <div style={{ margin: '20px' }}>
                                    <Button variant="contained" size="small" onClick={updateTravel}>
                                            עדכן
                                    </Button>
                                </div>
                            </Box>
                        </div>


                    </Box>
                </Box>



            </div>

        </div >
    )

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(UpdateTravel);
