import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {  Box, Typography } from '@material-ui/core';
import Samsung from './Images/Brands/Samsung.jpg';
import Beko from './Images/Brands/Beko.jpg';
import Bosch from './Images/Brands/Bosch.jpg';
import Electrolux from './Images/Brands/Electrolux.jpg';
import LG from './Images/Brands/LG.jpg';
import Whirlpool from './Images/Brands/Whirlpool.jpg';
import Frigidaire from './Images/Brands/Frigidaire.jpg';
import Jennair from './Images/Brands/Jennair.jpg';
import Kenmore from './Images/Brands/Kenmore.jpg';
import Maytag from './Images/Brands/Maytag.jpg';
import Subzero from './Images/Brands/Subzero.jpg';
import Wolf from './Images/Brands/Wolf.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: '1em 2em',
    backgroundColor: 'white'
  },
  root2: {
    flexGrow: 1,
    padding: '0 2em',
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    alignItems: 'center',
    color: theme.palette.text.secondary,

  },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div style={{backgroundColor: 'white'}}>
        {/* <Typography style={{color: '#0b64a8', fontFamily: 'Ubuntu', fontWeight: 400, textAlign: 'center', paddingBottom: '10px'}}>Services We Provide With 100% Guarantee</Typography> */}
        <Typography variant="h6" style={{color: '#0b64a8', fontFamily: 'Ubuntu', fontWeight: 400,  textAlign: 'center', padding: '10px 0'}}>We provide repairs for the following brands and many more.</Typography>
        <div className={classes.root} style={{padding: '0em 5em!important'}}>
            <Grid container spacing={6}>
                <Grid item xs={12} sm={12}>
                    <Box className={classes.paper}>
                        <Grid container spacing={2}>
                            <Grid wrap="nowrap" item xs={12} sm={4} md={2}>
                                <Box className={classes.paper}>
                                    <img src={Samsung} alt="Samsung" height='100vh' width = 'auto' style={{flex: 1 }}/>
                                </Box>
                            </Grid>  
                            <Grid wrap="nowrap" item xs={12} sm={4} md={2}>
                                <Box className={classes.paper}>
                                    <img src={Beko} alt="Beko" height='100vh' width = 'auto' style={{flex: 1 }}/> 
                                </Box>
                            </Grid>
                            <Grid wrap="nowrap" item xs={12} sm={4} md={2}>
                                <Box className={classes.paper}>
                                    <img src={Bosch} alt="Bosch" height='100vh' width = 'auto' style={{flex: 1 }}/>   
                                </Box>
                            </Grid> 
                            <Grid wrap="nowrap" item xs={12} sm={4} md={2}>
                                <Box className={classes.paper}>
                                    <img src={Electrolux} alt="Electrolux" height='100vh' width = 'auto' style={{flex: 1 }}/>   
                                </Box>
                            </Grid> 
                            <Grid wrap="nowrap" item xs={12} sm={4} md={2}>
                                <Box className={classes.paper}>
                                    <img src={LG} alt="LG" height='100vh' width = 'auto' style={{flex: 1 }}/>   
                                </Box>
                            </Grid> 
                            <Grid wrap="nowrap" item xs={12} sm={4} md={2}>
                                <Box className={classes.paper}>
                                    <img src={Whirlpool} alt="Whirlpool" height='100vh' width = 'auto' style={{flex: 1 }}/>   
                                </Box>
                            </Grid> 
                            <Grid wrap="nowrap" item xs={12} sm={4} md={2}>
                                <Box className={classes.paper}>
                                    <img src={Frigidaire} alt="Frigidaire" height='100vh' width = 'auto' style={{flex: 1 }}/>
                                </Box>
                            </Grid>  
                            <Grid wrap="nowrap" item xs={12} sm={4} md={2}>
                                <Box className={classes.paper}>
                                    <img src={Jennair} alt="Jennair" height='100vh' width = 'auto' style={{flex: 1 }}/> 
                                </Box>
                            </Grid>
                            <Grid wrap="nowrap" item xs={12} sm={4} md={2}>
                                <Box className={classes.paper}>
                                    <img src={Kenmore} alt="Kenmore" height='100vh' width = 'auto' style={{flex: 1 }}/>   
                                </Box>
                            </Grid> 
                            <Grid wrap="nowrap" item xs={12} sm={4} md={2}>
                                <Box className={classes.paper}>
                                    <img src={Maytag} alt="Maytag" height='100vh' width = 'auto' style={{flex: 1 }}/>   
                                </Box>
                            </Grid> 
                            <Grid wrap="nowrap" item xs={12} sm={4} md={2}>
                                <Box className={classes.paper}>
                                    <img src={Subzero} alt="Subzero" height='100vh' width = 'auto' style={{flex: 1 }}/>   
                                </Box>
                            </Grid> 
                            <Grid wrap="nowrap" item xs={12} sm={4} md={2}>
                                <Box className={classes.paper}>
                                    <img src={Wolf} alt="Wolf" height='100vh' width = 'auto' style={{flex: 1 }}/>   
                                </Box>
                            </Grid>                                     
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
    </div>
    </div>
  );
}
