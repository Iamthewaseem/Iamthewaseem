import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import './Card.css';

const useStyles = makeStyles((theme) =>({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: 250,
        },
      },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    margin: theme.spacing(1),
  },
  input: {
    fontFamily: 'ubuntu!important ',
    fontWeight: '300!important',
    fontSize: '14px'
}
}));


export default function SimpleCard() {
  const classes = useStyles();

  return (
    <Card style={{borderTop: '5px solid grey'}} className="cardBorder">
      <CardContent>
          <Typography style={{color: 'black', fontFamily: 'Ubuntu', fontWeight: 400, fontSize: '18px',   paddingBottom: '15px', textAlign: 'center'}}>
              Don't know what is wrong with your Appliance?
          </Typography>
          <Typography style={{color: 'grey', fontFamily: 'Ubuntu', fontWeight: 300, fontSize: '14px',   paddingBottom: '15px', textAlign: 'center'}}>
              Fill the form and we will contact you ASAP!
          </Typography>
        </CardContent>
        <form className={classes.root} style={{color: 'black', fontFamily: 'Ubuntu', fontWeight: 300, fontSize: '16px', width: '100%',  paddingBottom: '15px', textAlign: 'center'}} noValidate autoComplete="off">
            <TextField InputProps={{classes: {input: classes.input} }} id="name" autoComplete="name"
              label={<Typography className="inputForm">Name</Typography>}/>
            <TextField InputProps={{classes: {input: classes.input} }} type="tel" id="phone" autoComplete="phone" 
              label={<Typography className="inputForm">Phone</Typography>} />
            <TextField InputProps={{classes: {input: classes.input} }} type="email" id="email" 
              label={<Typography className="inputForm">Email Address</Typography>} />
            <TextField
                id="standard-multiline-static"
                label={<Typography className="inputForm">Write a Message Here</Typography>}
                multiline
                rows={4}
            />
        </form>

        <div className="center">
        <Button variant="contained" size='large' 
            style={{backgroundColor: 'white', 
                    color: '#153f5f', 
                    textTransform: 'unset', 
                    fontFamily: 'ubuntu', 
                    fontWeight: '500', 
                    fontSize: '18px', 
                    borderRadius: "35px",
                    padding: "10px 105px"
                    }} >
                Send
            </Button></div>
    </Card>
  );
}
