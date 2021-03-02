import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';
import Card from './Components/Card';
import Banner from './Components/Banner';
import InfoBanner  from './Components/InfoBanner';
import Background from './Background2.jpg'
import './LandingPage.css';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import Button from '@material-ui/core/Button';
import MoneyOffIcon from '@material-ui/icons/MoneyOff';
import DateRangeIcon from '@material-ui/icons/DateRange';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HelpTwoToneIcon from '@material-ui/icons/HelpTwoTone';
import ServiceBanner from './Components/ServiceBanner';
import Brands from './Components/Brands';
// import BmasBanner from './Components/BmasBanner';
import BlogDisplay from './Components/BlogDisplay';


const BootstrapInput = withStyles((theme) => ({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
  
    },
  }))(InputBase);
  
const LandingPage = () => {
    return(
        <div>
                <div style={{backgroundImage: `url(${Background})`, backgroundRepeat: 'no-repeat',
                width:'100%', padding: '5em 0.5em '}} spacing={5} className="TopFooterLP" > 
                <Box display="flex" container flexWrap="wrap" justifyContent="space-evenly"  spacing={3}>
                    <Grid item xs={12} sm={6} md={6} lg={6} style={{paddingBottom: '3em'}}>
                    <Typography style={{color: 'black', fontFamily: 'Ubuntu', fontWeight: 400, fontSize: '18px',  paddingLeft: '30px', paddingBottom: '15px', textAlign: 'left'}}>
                        US's Leading <b>Appliance Repair</b> 
                    </Typography>
                    <Typography variant="h4" style={{color: 'black', fontFamily: 'Ubuntu',  padding: '10px 30px', lineHeight:"1.6em", textAlign: 'left'}}>
                    Book   <b>Your</b> Appointment with BMAS
                    </Typography>
                <div style={{ display: 'flex', flexFlow: 'row wrap',  margin: 'auto', padding: '20px 30px', lineHeight: '1.2em', backgroundImage: 'linear-gradient(to right, #b3e5fc ,  white)', borderRadius: '25px'}}>
                    <div>
                            <Typography variant="h6" style={{color: 'black', fontFamily: 'Ubuntu',   lineHeight:"1.6em", textAlign: 'left', fontWeight: '400'}}>
                                I need &nbsp; 
                            </Typography>
                        </div>
                        <div >
                            <FormControl style={{width: '20em'}}>
                                <NativeSelect
                                id="demo-customized-select-native"
                                input={<BootstrapInput />}
                                >
                                
                                <option aria-label="Appliance" value="" />
                                <option value={10}>Washing Machine</option>
                                <option value={20}>Clothes Dryer</option>
                                <option value={30}>Dishwasher</option>
                                <option value={40}>Refrigerator</option>
                                <option value={50}>Freezer</option>
                                <option value={60}>Range</option>
                                <option value={70}>Cooktop </option>
                                <option value={80}>Oven </option>
                                <option value={90}>Microwave</option>
                                <option value={100}>Trash Compactor</option>
                                </NativeSelect>
                            </FormControl>&nbsp;
                        </div>
                        <div>
                            <Typography variant="h6" style={{color: 'black', fontFamily: 'Ubuntu',   lineHeight:"1.6em", textAlign: 'left', fontWeight: '400'}}>
                            repaired in&nbsp;
                            </Typography>
                        </div>
                        <div>
                            <FormControl style={{width: '10em'}}>
                                <BootstrapInput type="text" id="demo-customized-textbox" />
                            </FormControl>  &nbsp;   
                        </div>
                        <div>
                            <Button variant="contained" fullwidth size='large' 
                                        style={{backgroundColor: 'white', 
                                                color: '#153f5f', 
                                                textTransform: 'unset', 
                                                fontFamily: 'ubuntu', 
                                                fontWeight: '500', 
                                                fontSize: '14px', 
                                                borderRadius: "35px",
                                                padding: '10px 0px!important',
                                                }} >
                                            Go
                                    </Button>
                        </div>
                    </div> 
                <div style={{}}>
                <Typography variant="h5" style={{color: 'black', fontFamily: 'Ubuntu',  padding: '10px 30px', lineHeight:"1.6em", textAlign: 'left'}} className="LinearGrad" >
                    Get a <b>FREE</b> No Obligation Quote Now!
                </Typography>
                </div>
                <div>
                <Typography  style={{color: 'black', fontFamily: 'Ubuntu', fontSize: '14px', padding: '10px 30px', display: 'flex', alignItems: 'center' , lineHeight:"1.6em", textAlign: 'left'}} className="LinearGrad" >
                <MoneyOffIcon/>&nbsp;No <b>&nbsp;Hidden</b> &nbsp;charges
                </Typography>
                </div>
                <div>
                <Typography  style={{color: 'black', fontFamily: 'Ubuntu', fontSize: '14px', padding: '10px 30px', display: 'flex', alignItems: 'center' , lineHeight:"1.6em", textAlign: 'left'}} className="LinearGrad" >
                    <DateRangeIcon/>&nbsp;Same and Next Day Repair
                </Typography>
                </div>
                <div>
                <Typography style={{color: 'black', fontFamily: 'Ubuntu',  fontSize: '14px', padding: '10px 30px', display: 'flex', alignItems: 'center' , lineHeight:"1.6em", textAlign: 'left'}} className="LinearGrad" >
                <CheckCircleIcon />&nbsp;All Repairs Guaranteed
                </Typography>
                </div>
                <div>
                <Typography style={{color: 'black', fontFamily: 'Ubuntu',  fontSize: '18px', padding: '10px 30px', display: 'flex', alignItems: 'center' , lineHeight:"1.6em", textAlign: 'left'}} className="LinearGrad" >
                <HelpTwoToneIcon style={{color: '#153f5f'}}/>&nbsp; Don't Know Much About Repairs?
                </Typography>
                <Typography style={{color: 'black', fontFamily: 'Ubuntu',  fontSize: '14px', padding: '10px 30px', display: 'flex', alignItems: 'center' , lineHeight:"1.6em", textAlign: 'left'}} className="LinearGrad" >
                Fill in the next form! Type in your info and we will get back to you as soon as we can! 
                </Typography>
                </div>
                {/* <Typography style={{color: 'black', fontFamily: 'Ubuntu',  padding: '10px 30px', lineHeight:"1.6em", textAlign: 'left'}}>
                    The pros at Bay Master Appliance Services LLC are standing by to repair, maintain, or install your major appliances with skill and efficiency.
                </Typography> */}
                        
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <div style={{padding: '10px 25px'}}>
                    <Card/>
                    </div>
                </Grid>
            </Box>
        </div>
            <div>
                <Banner/>
                <InfoBanner />
                <ServiceBanner/>
                <Brands/>
                {/* <BlogDisplay/> */}
                {/* <BmasBanner/> */}
            </div>          
        </div>
    )
};

export default LandingPage;

