import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Box, Typography } from '@material-ui/core';
import MonetizationOnRoundedIcon from '@material-ui/icons/MonetizationOnRounded';
import SupervisedUserCircleTwoToneIcon from '@material-ui/icons/SupervisedUserCircleTwoTone';
import BuildTwoToneIcon from '@material-ui/icons/BuildTwoTone';
import MonetizationOnTwoToneIcon from '@material-ui/icons/MonetizationOnTwoTone';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import WorkRoundedIcon from '@material-ui/icons/WorkRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,  
    padding: '1em 1em',
    
  },
  root2: {
    flexGrow: 1,
    padding: '1em 3em',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    alignItems: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: '#fafafa',
  },
  paper2: {
    padding: theme.spacing(2),
    textAlign: 'center',
    alignItems: 'center',
    color: theme.palette.text.secondary,
    backgroundColor: 'white',
    display: 'flex',
    flexFlow: 'row no-wrap',
    justifyContent: 'space-around'
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div>
        <div className={classes.root2}>
            <Grid container='true' spacing={0}>
                <Grid item xs={12} sm={6} md={3}>
                    <Paper className={classes.paper2} style={{backgroundColor: "#e3f2fd"}}>
                        <Typography variant= "h6" style={{fontFamily: 'ubuntu', textAlign:  'left', color: '#153f5f', paddingLeft: '15px' }}>How Can We Help?<Typography style={{fontFamily: 'ubuntu', fontWeight: '400', }}>We are here for you!</Typography></Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                <Paper className={classes.paper2}>
                    <div>
                        <MonetizationOnRoundedIcon style={{ color: '#d50000' }} fontSize="large" />
                    </div>
                    <Typography variant= "h6" style={{fontFamily: 'ubuntu', textAlign:  'left', color: '#153f5f' }}><a href="/booking">Get a Quote</a> <Typography style={{fontFamily: 'ubuntu', fontWeight: '400'}}>Book Your Engineer Online</Typography></Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                <Paper className={classes.paper2}>
                    <div>
                        <WorkRoundedIcon style={{ color: '#d50000' }} fontSize="large" />
                    </div>
                    <Typography variant= "h6" style={{fontFamily: 'ubuntu', textAlign:  'left', color: '#153f5f',paddingLeft: '15px' }}><a href="/services">Services</a><Typography style={{fontFamily: 'ubuntu', fontWeight: '400'}}>We repair all your appliances</Typography></Typography>
                    </Paper>
                </Grid>
         
                <Grid item xs={12} sm={6} md={3}>
                <Paper className={classes.paper2}>
                    <div>
                        <PersonAddRoundedIcon style={{ color: '#d50000' }} fontSize="large" />
                    </div>
                    <Typography variant= "h6" style={{fontFamily: 'ubuntu', textAlign:  'left', color: '#153f5f' }}><a href="/jap">Join Us</a><Typography style={{fontFamily: 'ubuntu', fontWeight: '400'}}>Be a professional with BMAS</Typography></Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
        <div className={classes.root}>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                <Paper className={classes.paper} style={{    borderRadius: '5px'}}>
                    <Grid container spacing={5} style={{padding: '2em 1em'}} >
                        <Grid item xs={12} sm={4} >
                            <Box className={classes.paper} style={{background: '#e3f2fd'}}>
                                <SupervisedUserCircleTwoToneIcon style={{ color: '#0b64a8' }} fontSize="large" />
                                <Typography  variant="h6" style={{color: 'black', fontFamily: 'Ubuntu', fontWeight: 400, textAlign: 'center', paddingBottom: '10px'}}>Our Engineers</Typography>
                                <Typography   style={{color: 'grey', fontFamily: 'Ubuntu', fontWeight: 300,  textAlign: 'center', paddingBottom: '10px'}}>
                                <li>Are certified by Someone Important.</li>
                                <li>Are fully trained in Kungfu.</li>
                                <li>Will call you before they show up.</li>
                                </Typography>              
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box className={classes.paper} style={{background: '#e3f2fd'}}>
                                <BuildTwoToneIcon style={{ color: '#0b64a8' }} fontSize="large" />
                                <Typography  variant="h6" style={{color: 'black', fontFamily: 'Ubuntu', fontWeight: 400, textAlign: 'center', paddingBottom: '10px'}}>Repairs</Typography>
                                <Typography   style={{color: 'grey', fontFamily: 'Ubuntu', fontWeight: 300,  textAlign: 'center', paddingBottom: '10px'}}>
                                <li>We offer a free no obligation Quote.</li>
                                <li>Repairs are 100% guarantee.</li>
                                <li>Full refund if you aren't satisfied with our work.</li>
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <Box className={classes.paper} style={{background: '#e3f2fd'}}>
                                <MonetizationOnTwoToneIcon style={{ color: '#0b64a8' }} fontSize="large" />
                                <Typography  variant="h6" style={{color: 'black', fontFamily: 'Ubuntu', fontWeight: 400,  textAlign: 'center', paddingBottom: '10px'}}>Get it Fixed</Typography>
                                <Typography   style={{color: 'grey', fontFamily: 'Ubuntu', fontWeight: 300, textAlign: 'center', paddingBottom: '10px'}}>
                                <li>Contact us now to avail a 10% discount.</li>
                                <li>Use the discount section to explore more coupons.</li>
                                <li>Book a hassle free repair service.</li>
                                </Typography>
                                {/* <Button variant="outlined" style={{backgroundColor: '#0b64a8', 
                                                    color: 'White', 
                                                    textTransform: 'unset', 
                                                    fontFamily: 'ubuntu', 
                                                    fontWeight: '400', 
                                                    fontSize: '17px', 

                                }} >Explore Services</Button> */}
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>
                </Grid>
            </Grid>
        </div>
    </div>
  );
}
