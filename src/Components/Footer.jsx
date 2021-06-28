
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
import logo from '../media/logo-football.svg';

const style = makeStyles({

root:{
  flexGrow:1,
},
map:{
  marginTop:"20px",
  marginLeft:"40px",
},
img:{
    width:"70px",
    position:"absolute",
    right:"-45px",
    bottom:"-5px"
},
upper:{
  width:"100%",
  marginLeft:"120.1px",
  backgroundColor:"white",
  marginTop:"0px",
  overflow:"hidden",
  paddingBottom:"25px"
},
content:{
 marginTop:"20px",
 marginLeft:"20px",
 position:"relative"
},
inner_map:{
  borderRadius:"25px",
  width:"100%",
  height:"380px"
}
})
const Footer = ({width}) =>{

const classes = style();
return(
<div className={classes.root}>
  <Grid container style={{width:`${width-137.5}px`}} className={classes.upper}>
    <Grid className={classes.map} item xs={10} sm={10} md={5}>
       <iframe className={classes.inner_map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58684.46012761239!2d80.02483691036957!3d23.17827358304068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981a945b8f1905b%3A0x3b23459cd08a40e7!2sIIITDM%20Football%20and%20Cricket%20Ground!5e0!3m2!1sen!2sin!4v1624585139523!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy"></iframe>
    </Grid>
    <Grid item xs ={10} sm={10} md={5} className={classes.content}>
      <List>
        <ListItem>
          <h2>
            FOOTBALL CLUB IIITDM JABALPUR
          </h2>
        </ListItem>
        <ListItem>
            <h3 style={{fontWeight:"normal",fontSize:"23px",position:"relative",marginTop:"0px"}}>
              Dr. Dip Prakash Samajdar
            </h3>
            <span style={{position:"absolute",marginTop:"20px",fontStyle:"italic"}}>
              Sport's Councellor IIITDM Jabalpur
            </span>
        </ListItem>
        <ListItem>
            <h3 style={{fontWeight:"normal",fontSize:"23px",position:"relative",marginTop:"0px"}}>
              Mudit Verma
            </h3>
            <span style={{position:"absolute",marginTop:"20px",fontStyle:"italic"}}>
              Cordinator
            </span>
        </ListItem>
        <ListItem>
            <h3 style={{fontWeight:"normal",fontSize:"23px",position:"relative",marginTop:"0px"}}>
              Shubhang Mishra
            </h3>
            <span style={{position:"absolute",marginTop:"20px",fontStyle:"italic"}}>
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
