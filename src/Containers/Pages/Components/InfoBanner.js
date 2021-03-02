import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Paper, Box, Typography } from '@material-ui/core';
import Fridge from './Images/Fridge.jpg';
import Range from './Images/Range.jpg';
import Washer from './Images/Washer.jpg';
import WashingMachine from './Images/WashingMachine.jpg';
import Cooktop from './Images/Cooktop.jpg';
import Dishwasher from './Images/Dishwasher.jpg';
import Freezer from './Images/Freezer.jpg';
import Microwave from './Images/Microwave.jpg';
import Oven from './Images/Oven.jpg';
import Trash from './Images/Trash.jpg';
import IceMaker from './Images/IceMaker.jpg';
import Garbage from './Images/Garbage.jpg';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '1em 5em',
    backgroundColor: 'white'
  },
  root2: {
    flexGrow: 1,
    padding: '0 8em',
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'center',
    alignItems: 'center',
    color: theme.palette.text.secondary,

  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div style={{backgroundColor: 'white'}}>
        <Typography style={{color: 'rgb(179, 229, 252)', fontFamily: 'Ubuntu', fontWeight: 400, textAlign: 'center', paddingBottom: '10px'}}>Services We Provide With 100% Guarantee</Typography>
        <Typography variant="h4" style={{color: 'black', fontFamily: 'Ubuntu', fontWeight: 400,  textAlign: 'center', padding: '20px', backgroundImage: 'linear-gradient(to right, white, #b3e5fc , white)'}}>Appliances We Repair Include</Typography>
        <div className={classes.root} style={{padding: '0em 15em!important'}}>
            <Grid container spacing={6}>
                <Grid item xs={12} sm={12}>
                    <Box className={classes.paper}>
                        <Grid container spacing={2}>
                            <Grid wrap="nowrap" item xs={12} sm={4} md={4}>
                                <Paper elevation={3} className={classes.paper}>
                                    <img src={Fridge} alt="Refrigerator" height='100vh' width = 'auto' style={{flex: 1 }}/>   
                                    <Typography  variant="h6" style={{color: 'black', fontFamily: 'Ubuntu', fontWeight: 400, textAlign: 'center', paddingBottom: '10px', backgroundColor: '153f5f'}}>
                                        Refrigerator
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid  wrap="nowrap" item xs={12} sm={4} md={4}>
                                <Paper elevation={3} className={classes.paper}>
                                    <img src={Freezer} alt="Freezer" height='100vh' width = 'auto' style={{flex: 1 }}/>   
                                    <Typography  variant="h6" style={{color: 'black', fontFamily: 'Ubuntu', fontWeight: 400, textAlign: 'center', paddingBottom: '10px', backgroundColor: '153f5f'}}>
                                        Freezer
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid  wrap="nowrap" item xs={12} sm={4} md={4}>
                                <Paper elevation={3} className={classes.paper}>
                                    <img src={IceMaker} alt="Ice Maker" height='100vh' width = 'auto' style={{flex: 1 }}/>   
                                    <Typography  variant="h6" style={{color: 'black', fontFamily: 'Ubuntu', fontWeight: 400, textAlign: 'center', paddingBottom: '10px', backgroundColor: '153f5f'}}>
                                        Ice Maker
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid  wrap="nowrap" item xs={12} sm={4} md={4}>
                                <Paper elevation={3} className={classes.paper}>
                                    <img src={Range}  alt="Range" height='100vh' width = 'auto' style={{flex: 1 }}/>   
                                    <Typography  variant="h6" style={{color: 'black', fontFamily: 'Ubuntu', fontWeight: 400, textAlign: 'center', paddingBottom: '10px', backgroundColor: '153f5f'}}>
                                        Range
                                    </Typography>
                                </Paper>
                            </Grid>   
                            <Grid  wrap="nowrap" item xs={12} sm={4} md={4}>
                                <Paper elevation={3} className={classes.paper}>
                                    <img src={Cooktop} alt="Cooktop" height='100vh' width = 'auto' style={{flex: 1 }}/>   
                                    <Typography  variant="h6" style={{color: 'black', fontFamily: 'Ubuntu', fontWeight: 400, textAlign: 'center', paddingBottom: '10px', backgroundColor: '153f5f'}}>
                                        Cooktop 
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid wrap="nowrap" item xs={12} sm={4} md={4}>
                                <Paper elevation={3} className={classes.paper}>
                                    <img src={Oven} alt="Oven" height='100vh' width = 'auto' style={{flex: 1 }}/>   
                                    <Typography  variant="h6" style={{color: 'black', fontFamily: 'Ubuntu', fontWeight: 400, textAlign: 'center', paddingBottom: '10px', backgroundColor: '153f5f'}}>
                                        Oven
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid wrap="nowrap" item xs={12} sm={4} md={4}>
                                <Paper elevation={3} className={classes.paper}>
                                    <img src={Microwave} alt="Microwave" height='100vh' width = 'auto' style={{flex: 1 }}/>   
                                    <Typography  variant="h6" style={{color: 'black', fontFamily: 'Ubuntu', fontWeight: 400, textAlign: 'center', paddingBottom: '10px', backgroundColor: '153f5f'}}>
                                        Microwave
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid wrap="nowrap" item xs={12} sm={4} md={4}>
                                <Paper elevation={3} className={classes.paper}>
                                    <img src={WashingMachine} alt="Washing Machine" height='100vh' width = 'auto' style={{flex: 1 }}/>   
                                    <Typography  variant="h6" style={{color: 'black', fontFamily: 'Ubuntu', fontWeight: 400, textAlign: 'center', paddingBottom: '10px', backgroundColor: '153f5f'}}>
                                        Washing Machine 
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid wrap="nowrap" item xs={12} sm={4} md={4}>
                                <Paper elevation={3} className={classes.paper}>
                                    <img src={Washer} alt="Dryer" height='100vh' width = 'auto' style={{flex: 1 }}/>   
                                    <Typography  variant="h6" style={{color: 'black', fontFamily: 'Ubuntu', fontWeight: 400, textAlign: 'center', paddingBottom: '10px', backgroundColor: '153f5f'}}>
                                        Dryer 
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid wrap="nowrap" item xs={12} sm={4} md={4}>
                                <Paper elevation={3} className={classes.paper}>
                                    <img src={Dishwasher} alt="Dishwasher" height='100vh' width = 'auto' style={{flex: 1 }}/>   
                                    <Typography  variant="h6" style={{color: 'black', fontFamily: 'Ubuntu', fontWeight: 400, textAlign: 'center', paddingBottom: '10px', backgroundColor: '153f5f'}}>
                                        Dishwasher 
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid wrap="nowrap" item xs={12} sm={4} md={4}>
                                <Paper elevation={3} className={classes.paper}>
                                    <img src={Garbage} alt="Garbage Disposal" height='100vh' width = 'auto' style={{flex: 1 }}/>   
                                    <Typography  variant="h6" style={{color: 'black', fontFamily: 'Ubuntu', fontWeight: 400, textAlign: 'center', paddingBottom: '10px', backgroundColor: '153f5f'}}>
                                        Garbage Disposal
                                    </Typography>
                                </Paper>
                            </Grid>
                            <Grid wrap="nowrap" item xs={12} sm={4} md={4}>
                                <Paper elevation={3} className={classes.paper}>
                                    <img src={Trash} alt="Trash Compactor" height='100vh' width = 'auto' style={{flex: 1 }}/>   
                                    <Typography  variant="h6" style={{color: 'black', fontFamily: 'Ubuntu', fontWeight: 400, textAlign: 'center', paddingBottom: '10px', backgroundColor: '153f5f'}}>
                                        Trash Compactor
                                    </Typography>
                                </Paper>
                            </Grid>                  
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
    </div>
    </div>
  );
}
