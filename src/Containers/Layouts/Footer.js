import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import logos from './logos.jpg';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import BmasBanner from '../Pages/Components/BmasBanner';
import './Footer.css';

function Copyright() {
    return (
      <Typography variant="inherit">
        {'©  '}
        {' '}
        {new Date().getFullYear()} {' '} Bay Master Appliance Service LLC 
      </Typography>
    );
};
  
const Footer = () => {
  return (
    <div>
      <BmasBanner/>
      <div className="main-footer">
      <Grid container direction="row" spacing={2}>
          <Grid item xs={12} sm={3}>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <div><img src={logos} alt="logo" height='25vh' width = 'auto' /></div>&nbsp;
            <Typography variant= "h6" style={{color: 'white', fontFamily: 'Ubuntu', }}>BMAS</Typography>
            </div> 
             <div><Typography style={{color: 'white', fontFamily: 'Ubuntu', fontSize: '12px'}}> Bay Master Appliance Service LLC</Typography></div><br/>        
                <a href="https://www.facebook.com"><FacebookIcon style={{color: 'white'}} /></a>&nbsp;
                <a href="https://www.Instgram.com"><InstagramIcon style={{color: 'white'}}/></a>&nbsp;
                <a href="https://www.Twitter.com"> <TwitterIcon style={{color: 'white'}}/></a>&nbsp;
                <a href="https://www.youtube.com"> <YouTubeIcon style={{color: 'white'}}/></a>&nbsp;
                <a href="https://www.Linkedin.com"><LinkedInIcon style={{color: 'white'}}/></a>&nbsp;
            <div><a style={{color: 'white', lineHeight: '2em'}} href="tel:408-809-2627">(408)-809-2627</a></div>
            <div ><a style={{color: 'white', lineHeight: '2em'}} href="tel:916-975-2627">(916)-975-2627</a></div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className="box">
              <Typography style={{color: 'white', fontFamily: 'Ubuntu', fontSize: '1.35em', lineHeight: '2em'}}>Company</Typography> 
              <div className="container">
                  <div><a href="/About">About BMAS</a></div>
                    <div><a href="/Cities">Cities</a></div>
                    <div><a href="/Terms">Terms and Conditions</a></div>
                    <div><a href="/Privacy">Privacy</a></div>
                    <div><a href="/Blog">Blog</a></div>
                    <div><a href="/Discount">Discounts</a></div>
                    <div><a href="/faq">FAQ</a></div>
                    <div><a href="/jap">Join as Pro</a></div>
                    <div><a href="/login">Login</a></div>
                    <div><a href="/sitemap">Sitemap</a></div>
                  </div>
              </div>
          </Grid>
          <Grid item xs={12} sm={4}>
            <div className="box">
              <Typography  style={{color: 'white', fontFamily: 'Ubuntu', fontSize: '1.35em', lineHeight: '2em',}}>Appliances</Typography> 
                <div className="container">
                    <div><a href="/Repair">Washing Machine</a></div>
                    <div><a href="/Repair">Clothes Dryer</a></div>
                    <div><a href="/Repair">Dishwasher</a></div>
                    <div><a href="/Repair">Refrigerator</a></div>
                    <div><a href="/Repair">Freezer</a></div>
                    <div><a href="/Repair">Range</a></div>
                    <div><a href="/Repair">Cooktop </a></div>
                    <div><a href="/Repair">Oven</a></div>
                    <div><a href="/Repair">Microwave</a></div>
                    <div><a href="/Repair">Trash Compactor</a></div>
                </div>       
            </div>
          </Grid>
      </Grid>
      </div>
      <div className="sub-footer" style={{paddingBottom: '10px!important'}}>{Copyright()}</div>    
    </div>
  );
}
export default Footer;
    

