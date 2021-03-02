import React , { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from "react-router-dom";
import Button from '@material-ui/core/Button';
import {IconButton, Drawer, MenuItem, Link} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import Divider from '@material-ui/core/Divider';
import MenuIcon from "@material-ui/icons/Menu";
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import logos from './logos.jpg';
import './Header.css';


const drawerServiceItems = [
  {
    label: "Refrigerator Repair",
    href: "/Repair",
  },
  {
    label: "Dishwasher Repair",
    href: "/Repair",
  },
  {
    label: "Stove Repair",
    href: "/Repair",
  },
  {
    label: "Oven Repair",
    href: "/Repair",
  },
  {
    label: "Washer Repair",
    href: "/Repair",
  },
  {
    label: "Dryer Repair",
    href: "/Refrigerator  Repair",
  }
];

const drawerLastSec = [
  {
    label: "About BMAS",
    subtitle: "Learn about our Company and our Mission.",
    href: "/about",
  },
  {
    label: "Cities",
    subtitle: "See if we are  in your city.",
    href: "/Cities",
  },
  {
    label: "FAQ",
    subtitle: "Your home services questions, answered.",
    href: "/FAQ",
  },
];

const drawerJapItem = [
  {
    label:  "Experienced Appliance Tech",
    subtitle: "Join to use our Platform",
    href: "/jap"
  },
  {
    label:  "New  to Appliance Repair",
    subtitle: "Learn about  BMAS",
    href: "/jap"
  },
]

//Styles for components
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      fontFamily: 'ubuntu',
      textTransform: 'unset!important',
    },
  },
  header: {
    backgroundColor: "#fff",
    "@media (max-width: 900px)": {
    paddingLeft: 0,
    },
  },
  drawerContainer: {
    paddingLeft: "15px",
  },
  paper: {
    width: '100vw'
  },
  menuItem: {
    marginRight: 'auto',
    padding: 0,
    textTransform: 'unset!important',
    display: 'flex',
    justifyContent: 'space-between',
    fontFamily: "ubuntu",
    fontWeight: 500,
  },
  subtitles: {
    fontFamily: "ubuntu",
    fontWeight: 300,
    color: 'grey',
    fontSize: '12px'
  }
}));

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
};

export default function ElevateAppBar(props) {
  
  const { header,  drawerContainer, paper, root, menuItem, subtitles} = useStyles();
  
  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false
  })

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 1024
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

 //Desktop display
  const displayDesktop = () => {
    return (
    <Toolbar>
    <div><img src={logos} alt="logo" height='40vh' width = '45vh' style={{flex: 1 }}/>&nbsp;</div>    
    <Typography variant="h5" style={{color: 'black', fontFamily: 'Ubuntu'}}>
      <div style={{lineHeight: 0.8, fontWeight: 700, color: '#0e2c42'}}> BMAS</div>
      <div style={{fontFamily: 'Ubuntu', fontSize: '10px', color: '#173f5f'}}>&nbsp;Bay Master Appliance Services</div>
    </Typography> 
{/* menu tabs */}
    <div style={{paddingLeft: '3vw'}}>
        <div className="dropdown">
            <button className="dropbtn"><a href="/Home">Home</a></button>
                <div className="dropdown-content">
                        <a href="/About">About BMAS</a>                        
                        <a href="/Cities">Cities</a>
                        <a href="/Discount">Discounts</a>
                </div>
        </div>
        <div className="dropdown">
            <button className="dropbtn"><a href="/Services">Services</a></button>
                <div className="dropdown-content">
                        <a href="/Repair">Refrigerator Repair</a>
                        <a href="/Repair">Dishwasher Repair</a>
                        <a href="/Repair">Stove Repair</a>
                        <a href="/Repair">Oven Repair</a>
                        <a href="/Repair">Washer Repair</a>
                        <a href="/Repair">Dryer Repair</a>
                </div>
        </div>
        <div className="dropdown">
            <button className="dropbtn"><a href="/jap">Join as Pro</a></button>
                <div className="dropdown-content">
                        <a href="/Jap">Experienced Appliance Tech</a>
                        <a href="/Jap">New  to Appliance Repair</a>
                </div>
        </div>
        {/* <div className="dropdown">
            <button className="dropbtn"><a href="/FAQ">FAQ</a></button>
                <div className="dropdown-content">
                        <a href="/Faq">FAQ 1</a>
                        <a href="/Faq">FAQ 2</a>
                        <a href="/Faq">FAQ 3</a>
                </div>
        </div> */}
    </div>
    <div className={root} style={{marginLeft: 'auto'}}> 
    <a style={{textDecoration: 'none',color:'#0e2c42', fontWeight: 400, fontSize: '12px'}}href="tel:408-809-2627">(408)-809-2627</a>
        <Button variant="outlined" style={{background: 'white', textColor: '#173f5f'}}>
            Login
        </Button>
        <Button variant="contained" style={{backgroundColor: '#173f5f', color: 'white'}} >
            Book a Service
        </Button>
    </div>
    </Toolbar>
    );
    };
  //Mobile display 
  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));
      return (
        <div>
        <Toolbar>
          <IconButton
            {...{
              edge: "start",
              color: "default",
              "aria-label": "menu",
              "aria-haspopup": "true",
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>
        {/* Drawer Design */}
          <Drawer 
                {...{
                  anchor: "left",
                  open: drawerOpen,
                  onClose: handleDrawerClose,
                  classes: {paper},
                }} 
              >
              <div style={{display: 'flex'}}>
              <div className={root}>
              <Button variant="outlined"  style={{background: 'white', textColor: '#173f5f'}}>
                  Login
              </Button>
              <Button variant="contained" style={{backgroundColor: '#173f5f', color: 'white'}} >
                  Book a Service
              </Button></div>
              <IconButton style={{marginLeft: 'auto'}}
                    {...{
                      edge: "start",
                      color: "default",
                      "aria-label": "close",
                      "aria-haspopup": "true",
                      onClick: handleDrawerClose,
                    }}>
                  <CloseIcon />
              </IconButton>
              </div>
              <Divider variant="middle" />
              <Typography style={{fontFamily: 'ubuntu', color: 'grey', padding: '5px 15px', marginRight: 'auto'}}>Our Services</Typography>
                <div className={drawerContainer}>{getDrawerChoices()}</div> 
              <Divider variant="middle" />  
              <Typography style={{fontFamily: 'ubuntu', color: 'grey', padding: '5px 15px', marginRight: 'auto'}}>Join as Pro</Typography>
              <div className={drawerContainer}>{getDrawerChoices2()}</div> 
              <Divider variant="middle" />  
              <Typography style={{fontFamily: 'ubuntu', color: 'grey', padding: '5px 15px', marginRight: 'auto'}}>About</Typography>
              <div className={drawerContainer}>{getDrawerChoices3()}</div> 
          </Drawer>
              <img src={logos} alt="logo" height='21vh' width = '21vh' /> &nbsp;
              <div><Typography variant="h6" style={{color: '#173f5f', fontFamily: 'Ubuntu'}}><b>BMAS</b></Typography></div>
        </Toolbar>
        </div>
      );
    };
//Drawer Components
    const getDrawerChoices = () => {
      return drawerServiceItems.map(({ label, href }) => {
        return (
          <Link
            {...{
              component: RouterLink,
              to: href,
              color: "inherit",
              style: { textDecoration: "none" },
              key: label,
            }}
          >
            <MenuItem className={menuItem}>
              <div>
                      {label}
              </div>
              <ChevronRightIcon fontSize="small" color="disabled"/>
            </MenuItem>
          </Link>
        );
      });
    };

    const getDrawerChoices2 = () => {
      return drawerJapItem.map(({ label, subtitle, href }) => {
        return (
          <Link
            {...{
              component: RouterLink,
              to: href,
              color: "inherit",
              style: { textDecoration: "none" },
              key: label,
            }}
          >
            <MenuItem className={menuItem}>
              <div>
              <div>{label}</div>
                 <div className={subtitles}>{subtitle}</div>        
              </div>
              <ChevronRightIcon fontSize="small" color="disabled"/>
            </MenuItem>
          </Link>
        );
      });
    };
    const getDrawerChoices3 = () => {
      return drawerLastSec.map(({ label, subtitle, href }) => {
        return (
          <Link
            {...{
              component: RouterLink,
              to: href,
              color: "inherit",
              style: { textDecoration: "none" },
              key: label,
            }}
          >
            <MenuItem className={menuItem}>
              <div>
              <div>{label}</div>
                 <div className={subtitles}>{subtitle}</div>        
              </div>
              <ChevronRightIcon fontSize="small" color="disabled"/>
            </MenuItem>
          </Link>
        );
      });
    };
    return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
