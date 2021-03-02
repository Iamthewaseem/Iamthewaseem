import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Box, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import RoomIcon from '@material-ui/icons/Room';
import ScheduleIcon from '@material-ui/icons/Schedule';
import PhoneInTalkIcon from '@material-ui/icons/PhoneInTalk';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,  
    padding: '1em 1em',
    
  },
  root2: {
    flexGrow: 1,
    padding: '1em 3em',
    borderBottom: '1px solid grey',
    borderTop: '1px solid grey'
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  paper2: {
    padding: theme.spacing(2),
    textAlign: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'column',
  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div>
        <div className={classes.root2}>
            <Grid container='true' spacing={2}>
                <Grid item xs={12} sm={3} md={3}>
                    <Box container className={classes.paper2}>
                        <div>
                            <Typography variant= "h4" style={{fontFamily: 'ubuntu', textAlign:  'left', lineHeight: '1.5em', paddingLeft: '15px', paddingBottom: '20px' }}>
                                So Why <br/>
                                BMAS?
                            </Typography>
                        </div>
                        <div>
                            <Button variant="contained" style={{backgroundColor: 'rgb(0, 141, 206)', color: 'white'}} >
                                Book a Service
                            </Button>    
                        </div>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={3} md={3}>
                    <Box className={classes.paper}>
                        <RoomIcon style={{ color: 'rgb(0, 141, 206)' }} fontSize="large" />
                        <Typography variant= "h6" style={{fontFamily: 'ubuntu', textAlign:  'center', color: '#153f5f' }}>We are local
                            <Typography style={{fontFamily: 'ubuntu', fontWeight: '400'}}>We are local and we will reach out to you quickly when you need us.</Typography>
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={3} md={3}>
                    <Box className={classes.paper}>
                        <ScheduleIcon style={{ color: 'rgb(0, 141, 206)' }} fontSize="large" />
                        <Typography variant= "h6" style={{fontFamily: 'ubuntu', textAlign:  'center', color: '#153f5f' }}>Flexible Scheduling
                            <Typography style={{fontFamily: 'ubuntu', fontWeight: '400'}}>Book with us in advance and pickup the time as per your convenience.</Typography>
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} sm={3} md={3}>
                    <Box className={classes.paper}>
                        <PhoneInTalkIcon style={{ color: 'rgb(0, 141, 206)' }} fontSize="large" />
                        <Typography variant= "h6" style={{fontFamily: 'ubuntu', textAlign:  'center', color: '#153f5f' }}>Free Service Call
                            <Typography style={{fontFamily: 'ubuntu', fontWeight: '400'}}>You need not pay a dime for diagnosis with service.</Typography>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </div>
    </div>
  );
}
