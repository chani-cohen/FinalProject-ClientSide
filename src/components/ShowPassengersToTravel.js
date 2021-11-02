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
import { getAllTravels, getOrdersByTravelId } from '../redux/actions';


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
        ordersOfTravelList: state.ordersOfTravelReducer.ordersOfTravelList || [],
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    getAllTravels: () => dispatch(getAllTravels()),
    getOrdersByTravelId: (travelId) => dispatch(getOrdersByTravelId(travelId)),
})


function ShowPassengersToTravel(props) {

    const classes = useStyles();
    const [bold, setBold] = useState(null);

    const listTravels = props.travelsList || [];
    const listordersOfTravel = props.ordersOfTravelList || [];

    useEffect(() => {
        props.getAllTravels();
    }, [])



    //לאחר לחיצה על שורה בטבלת נסיעות
    const AfterSelecetedRow = (e, row) => {

        console.log(row);
        //שינוי צבע השורה למודגשת   
        setBold(row.travelId);

        //טעינת הטבלה של הנרשמים לנסיעה זו
        props.getOrdersByTravelId(row.travelId);
    }



    return (
        <div>
            <h1>הצגת נוסעים לנסיעה</h1>

            <div style={{ width: '100%', marginRight: 60 }} >
                <Box sx={{ display: 'flex', p: 1 }}>
                    <Box sx={{ p: 1, order: 1 }}>
                        <span>רשימת הנסיעות</span>
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

                    {/* <div className={classes.paper} style={{ width: '100%' }}> */}
                    {/* <Box sx={{ display: 'flex', p: 1 }}> */}
                    <Box sx={{ p: 1, order: 1 }}>
                        <span>רשימת הנרשמים לנסיעה</span>
                        <TableContainer className={classes.tableContainer} component={Paper} style={{
            //   minWidth:950,
            //   maxWidth: 950,
            width:965
            }}>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        {/* <TableCell>אתר</TableCell> */}
                                        <TableCell align="right">שם משפחה</TableCell>
                                        <TableCell align="right">מייל</TableCell>
                                        <TableCell align="right">תאריך הזמנה</TableCell>
                                        <TableCell align="right">סוג כרטיס</TableCell>
                                        <TableCell align="right">כמות כרטיסים</TableCell>
                                        <TableCell align="right">סה"כ לתשלום</TableCell>
                                        <TableCell align="right">תחנת איסוף/פיזור</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {listordersOfTravel && listordersOfTravel.map((row) => (
                                        <TableRow key={row.orderId}>
                                            {/* <TableCell component="th" scope="row">
                                                        {row.site.nameSite}
                                                    </TableCell> */}
                                            <TableCell align="right">{row.emailNavigation.lastName}</TableCell>
                                            <TableCell align="right">{row.email}</TableCell>
                                            <TableCell align="right">{row.orderDate.substring(0, 10)}</TableCell>
                                            <TableCell align="right">{`${row.ticket.fromAge} - ${row.ticket.untilAge}`}</TableCell>
                                            <TableCell align="right">{row.count}</TableCell>
                                            <TableCell align="right">{row.sumToPay}</TableCell>
                                            <TableCell align="right">{row.station.stationAddress}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </Box>
                    {/* </div> */}


                </Box>




            </div>

        </div >
    )

}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ShowPassengersToTravel);
