
import React from 'react';
import { makeStyles,Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import logo from '../media/logo-football.svg';

const style = makeStyles({

root:{
  flexGrow:1,
},
map:{
  marginTop:"20px",
  marginLeft:"40px",
  marginRight:"20px",
},
img:{
    width:"70px",
    position:"absolute",
    //right:"-45px",
    //bottom:"-5px",
    right:"0px",
    bottom:"-20px",
    ['@media (min-width:960px)']: { // eslint-disable-line no-useless-computed-key
     right:"-50px",
   },
   ['@media (min-width:1300px)']: { // eslint-disable-line no-useless-computed-key
    right:"-70px",
   }
},
upper:{
  width:"100%",
  backgroundColor:"white",
  marginTop:"0px",
  overflow:"hidden",
  paddingBottom:"25px",
  fontFamily:"Avenir Light"
},
content:{
 marginTop:"20px",
 marginLeft:"20px",
 marginRight:"0px",
 position:"relative",
 fontFamily:"Avenir Light",
 //border:"1px solid black"
},
inner_map:{
  borderRadius:"25px",
  width:"100%",
  height:"380px"
},
 heading:{
   fontWeight:"normal",
   fontSize:"23px",
   position:"relative",
   marginTop:"0px",
   fontFamily:"Avenir Light",
 },
 span:{
   position:"absolute",
   marginTop:"20px",
   fontStyle:"italic",
   fontFamily:"Avenir Light",
 }
})
const Footer = () =>{

const classes = style();
return(
<div className={classes.root}>
  <Grid container className={classes.upper}>
    <Grid className={classes.map} item xs={12} sm={12} md={4}>
       <iframe className={classes.inner_map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58684.46012761239!2d80.02483691036957!3d23.17827358304068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981a945b8f1905b%3A0x3b23459cd08a40e7!2sIIITDM%20Football%20and%20Cricket%20Ground!5e0!3m2!1sen!2sin!4v1624585139523!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy"></iframe>
    </Grid>
    <Grid item xs ={12} sm={12} md={6} className={classes.content}>
      <List>
        <ListItem>
          <h2>
            FOOTBALL CLUB IIITDM JABALPUR
          </h2>
        </ListItem>
        <ListItem>
            <h3 className={classes.heading}>
              Dr. Dip Prakash Samajdar
            </h3>
            <span className={classes.span}>
              Sport's Councellor IIITDM Jabalpur
            </span>
        </ListItem>
        <ListItem>
            <h3 className={classes.heading}>
              Mudit Verma
            </h3>
            <span className={classes.span}>
              Cordinator
            </span>
        </ListItem>
        <ListItem>
            <h3 className={classes.heading}>
              Shubhang Mishra
            </h3>
            <span className={classes.span}>
              Co-Cordinator
            </span>
        </ListItem>
        <ListItem>
           <ListItemIcon>
             <FacebookIcon fontSize="large"/>
             <InstagramIcon fontSize="large"/>
             <WhatsAppIcon fontSize="large"/>
             <img className={classes.img} src={logo}/>
           </ListItemIcon>
        </ListItem>
      </List>
    </Grid>
  </Grid>
</div>
)
}

export default Footer;
