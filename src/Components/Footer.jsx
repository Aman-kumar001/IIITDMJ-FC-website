import React from 'react';
import { makeStyles,Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import RoomIcon from '@material-ui/icons/Room';
import CallIcon from '@material-ui/icons/Call';
import PersonIcon from '@material-ui/icons/Person';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
const style = makeStyles({

  root:{
    flexGrow:1,
  },
  map:{
    marginTop:"20px",
    marginLeft:"40px",
  },
  upper:{
    width:"100%",
    marginLeft:"120.1px",
    backgroundColor:"red",
    marginTop:"0px",
    overflow:"hidden",
  },
  content:{
   marginTop:"20px",
   marginLeft:"20px"
 },
  inner_map:{
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
        <Paper style={{backgroundColor:"red"}} elevation={0}>
         <iframe className={classes.inner_map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58684.46012761239!2d80.02483691036957!3d23.17827358304068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3981a945b8f1905b%3A0x3b23459cd08a40e7!2sIIITDM%20Football%20and%20Cricket%20Ground!5e0!3m2!1sen!2sin!4v1624585139523!5m2!1sen!2sin" width="600" height="450"  allowfullscreen="" loading="lazy"></iframe>
        </Paper>
      </Grid>
      <Grid item xs ={10} sm={10} md={5} className={classes.content}>
        <List>
          <ListItem>
            <ListItemText primary="CONTACT"/>
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <MailOutlineIcon/>
            </ListItemIcon>
            <ListItemText>
              <p style={{margin:"0px",padding:"0px"}}>CLUB MAIL ID
             <a style={{textDecoration:"none",color:"black",marginLeft:"20px"}}href="mailto: footballclub@iiitdmj.ac.in">footballclub@iiitdmj.ac.in</a>
             </p>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText primary="Coordinator"/>
          </ListItem>
          <ListItem>
              <Avatar src="/mario-av.png"/>
              <ListItemText style={{marginLeft:"20px"}}>
                Mudit Verma
                <a style={{textDecoration:"none",color:"black",marginLeft:"20px"}}href="mailto: 2018154@iiitdmj.ac.in">2018154@iiitdmj.ac.in</a>
              </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText primary="Co-Coordinator"/>
          </ListItem>
          <ListItem>
              <Avatar src="/mario-av.png"/>
              <ListItemText style={{marginLeft:"20px"}}>
                 Shubhang Mishra
                 <a style={{textDecoration:"none",color:"black",marginLeft:"20px"}}href="mailto: 2019149@iiitdmj.ac.in">2019149@iiitdmj.ac.in</a>
              </ListItemText>
          </ListItem>
        </List>
      </Grid>
    </Grid>
  </div>
  )
}

export default Footer;
