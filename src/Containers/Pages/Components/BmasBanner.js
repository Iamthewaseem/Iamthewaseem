import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Box} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import '../../Layouts/Footer.css';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={1} className="RepairFooter">
        <Grid item xs={12} sm={6}>
          <Box className={classes.paper}>
            <Typography 
                style={{ fontFamily: 'Ubuntu', fontWeight: 500, fontSize: '16px', textAlign: 'left'}}>
                For Expert repairs, Call us Now!
            </Typography>
            <Typography style={{fontFamily: 'Ubuntu', fontWeight: 300, fontSize: '14px' , textAlign: 'left'}}>
              Our team is available 24/7 to assist with your repairs.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box className={classes.paper}>
            <div className="anchor">
             <Typography style={{fontFamily: 'Ubuntu', fontWeight: 500, fontSize: '18px' , padding: '10px 30px', textAlign: 'right'}}>
              Call <a style={{textDecoration: 'none', color:'white'}}href="tel:408-809-2627">(408)-809-2627</a>
            </Typography>  
            </div>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
}
