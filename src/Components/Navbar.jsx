import React, {useState} from "react";
import {
  AppBar,
  Toolbar,
  Container,
  Button,
  Hidden,
  Grid,
  Typography,
  Modal,
  Fade,
  Backdrop
} from "@material-ui/core";
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import { makeStyles } from "@material-ui/core";
import Sidebar from "./Sidebar";
import '../App.css';
import logoFootball from "../media/logo-football.svg";
import football from "../media/football2.jpg";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
const useStyles = makeStyles({
  navbar:{

  },
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
    fontFamily:"Avenir Light",
  },
  navbarButton:{
    display: `flex`,
    justifyContent: `center`,
    fontFamily:"Avenir Light",
  },
  button:{
    '&:hover':{
      '& hr':{
        transform: 'scale(1)',
        transformOrigin:"left",
        fontFamily:"Avenir Light",
      }
    }
  },
  underline:{
    position:"relative",
    top:-10,
    marginBottom:-10,
    color:"#FEF9EE",
    transform:'scaleX(0)',
    transformOrigin:"right",
    transition:"transform 250ms ease-in",
    fontFamily:"Avenir Light",
  },
  links:{
    textDecoration: "none",
    fontFamily:"Avenir Light",
  },
  logoSection:{
    display:"flex",
    flexWrap:"nowrap",
    alignItems:"center",
    width:"120%",
    justifyContent:"space-around",
    fontSize:"1.5em",
    color:"white",
    letterSpacing:1,
    fontFamily:"Avenir Light",
  },
  logo:{
    position:"relative",
    width:70,
    margin:"5px 0px",
    marginRight:"-30px",
    fontFamily:"Avenir Light",
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily:"Avenir Light",
    overflow:"scroll",
  },
  paper: {
    background:"#FEF9EE",
    boxShadow: 10,
    padding: "2em",
    width:"60%",
    fontFamily:"Avenir Light",
  },
  navLabel:{
    color:"white",
    fontSize:"1.1em",
    letterSpacing: 2,
    fontFamily:"Avenir Light",
  },
  container2:{
    height: "350px",
   width: "300px",
   boxShadow: "0 10px 20px black",
   backgroundSize: "cover",
   justifyContent: "center",
   alignItems: "center",
   textAlign: "center",
   overflow: "hidden",
   fontFamily: "'Abel', sansSerif",
   marginRight:"10px"
 },
  // image:{
  //   height:"100px",
  //   width:"100px",
  //   backgroundSize:"cover",
  //   borderRadius:"50%",
  //   border:"8 px solid white",
  //   position:"relative",
  //   top:"200px",
  //   marginLeft:"170px",
  //   boxShadow: "0 2px 15px rgb(58, 54, 54)",
  //   transform: "rotate(-20deg)",
  // },
  shape:  {
    height: "180px",
    width: "400px",
    backgroundColor: "black",
    marginlLeft: "-20px",
    position: "relative",
    top: "-40px",
    boxShadow: "0 2px 15px black",
    transform: "rotate(25deg)",
  },
  h3:{
    marginBottom: "10px",
    fontFamily: "'Montserrat', sansSerif",
  },
  title2:{
    color: "rgb(105, 100, 109)",
  },
  icons:{
    marginTop:"15px"
  },
  main:{
    display:"flex",
    justifyContent:"center",
  }
});

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const Navbar = () => {
  const classes = useStyles();

  const navs = [
    {
      id:1,
      label:"About",
      link:"#about"
    },
    {
      id:2,
      label:"Gallery",
      link:"#gallery"
    },
    {
      id:3,
      label:"Events",
      link:"#events"
    },
  ]
  const [open, setOpen] = useState(false);
  const [value, setValue] = React.useState(0);

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

 const handleChange = (event, newValue) => {
   setValue(newValue);
 };


  return (

        <AppBar position="fixed">
            <Toolbar className={classes.navbar}>
                <Container maxWidth="xl" className={classes.navbarDisplayFlex}>
                    <a  href="#home" className={classes.links}>
                        <Typography variant="h4" color="secondary" className={classes.logoSection}  style={{fontFamily:"Avenir Light",
                      fontWeight:"bold"}}>
                            <img src={logoFootball} className={classes.logo}/>
                            FOOTBALL CLUB IIITDM JABALPUR
                        </Typography>
                    </a>
                    <Hidden smDown>
                        <Grid className={classes.navbarButton}>

                            {
                                navs.map(nav => {
                                    return (
                                        <>
                                          <Button className={classes.button} color="secondary">
                                              <a href={nav.link} className={classes.links}>
                                                  <Typography variant="h5" className={classes.navLabel}>
                                                      {nav.label}
                                                  <hr className={classes.underline}/>
                                                  </Typography>
                                              </a>
                                          </Button>
                                        </>
                                    )
                                })
                            }

                            <Button className={classes.button} color="secondary" onClick={handleOpen}>
                                <Typography variant="h5" className={classes.navLabel}>
                                    Contributor
                                    <hr className={classes.underline}/>
                                </Typography>
                            </Button>

                        </Grid>


                        <Modal
                            aria-labelledby="transition-modal-title"
                            aria-describedby="transition-modal-description"
                            className={classes.modal}
                            open={open}
                            onClose={handleClose}
                            closeAfterTransition
                            BackdropComponent={Backdrop}
                            BackdropProps={{
                                timeout: 500,
                            }}
                        >
                            <Fade in={open}>
                                <div className={classes.paper}>
                                <AppBar position="static">
                                    <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
                                      <Tab label="Development" {...a11yProps(0)} />
                                      <Tab label="Design" {...a11yProps(1)} />
                                      <Tab label="Management" {...a11yProps(2)} />
                                    </Tabs>
                                  </AppBar>
                                  <TabPanel value={value} index={0}>
                                   <div className={classes.main}>
                                      <div className={classes.container2}>
                                         <div className={classes.shape}>
                                            <div className={classes.image}>
                                            </div>
                                         </div>
                                         <h3>Aman Kumar</h3>
                                         <h3 className={classes.title2}>2019364</h3>
                                         <div className={classes.icons}>
                                          <LinkedInIcon/>
                                          <FacebookIcon/>
                                          <InstagramIcon/>
                                          <WhatsAppIcon/>
                                         </div>
                                      </div>
                                      <div className={classes.container2}>
                                         <div className={classes.shape}>
                                            <div className={classes.image}>
                                            </div>
                                         </div>
                                         <h3>Jayraj Rathod</h3>
                                         <h3 className={classes.title2}>2019074</h3>
                                         <div className={classes.icons}>
                                          <LinkedInIcon/>
                                          <FacebookIcon/>
                                          <InstagramIcon/>
                                          <WhatsAppIcon/>
                                         </div>
                                      </div>
                                      <div className={classes.container2}>
                                         <div className={classes.shape}>
                                            <div className={classes.image}>
                                            </div>
                                         </div>
                                         <h3>Kartik Singh Chuphal</h3>
                                         <h3 className={classes.title2}>2019077</h3>
                                         <div className={classes.icons}>
                                          <LinkedInIcon/>
                                          <FacebookIcon/>
                                          <InstagramIcon/>
                                          <WhatsAppIcon/>
                                         </div>
                                      </div>
                                    </div>
                                  </TabPanel>
                                  <TabPanel value={value} index={1}>
                                  <div className={classes.main}>
                                     <div className={classes.container2}>
                                        <div className={classes.shape}>
                                           <div className={classes.image}>
                                           </div>
                                        </div>
                                        <h3>Vinay Priyadarshan</h3>
                                        <h3 className={classes.title2}>20bds064</h3>
                                        <div className={classes.icons}>
                                         <LinkedInIcon/>
                                         <FacebookIcon/>
                                         <InstagramIcon/>
                                         <WhatsAppIcon/>
                                        </div>
                                     </div>
                                     <div className={classes.container2}>
                                        <div className={classes.shape}>
                                           <div className={classes.image}>
                                           </div>
                                        </div>
                                        <h3>Ritik Roshan Nagdeve</h3>
                                        <h3 className={classes.title2}>2018361</h3>
                                        <div className={classes.icons}>
                                         <LinkedInIcon/>
                                         <FacebookIcon/>
                                         <InstagramIcon/>
                                         <WhatsAppIcon/>
                                        </div>
                                     </div>
                                   </div>
                                  </TabPanel>
                                  <TabPanel value={value} index={2}>
                                  <div className={classes.main}>
                                     <div className={classes.container2}>
                                        <div className={classes.shape}>
                                           <div className={classes.image}>
                                           </div>
                                        </div>
                                        <h3>Mudit Tripathi </h3>
                                        <h3 className={classes.title2}>2018153</h3>
                                        <div className={classes.icons}>
                                         <LinkedInIcon/>
                                         <FacebookIcon/>
                                         <InstagramIcon/>
                                         <WhatsAppIcon/>
                                        </div>
                                     </div>
                                     <div className={classes.container2}>
                                        <div className={classes.shape}>
                                           <div className={classes.image}>
                                           </div>
                                        </div>
                                        <h3>Himadri Maheshwari</h3>
                                        <h3 className={classes.title2}>20bcs101</h3>
                                        <div className={classes.icons}>
                                         <LinkedInIcon/>
                                         <FacebookIcon/>
                                         <InstagramIcon/>
                                         <WhatsAppIcon/>
                                        </div>
                                     </div>
                                   </div>
                                  </TabPanel>
                                </div>
                            </Fade>
                        </Modal>


                    </Hidden>
                    <Hidden mdUp>
                        <Sidebar navs={navs} />
                    </Hidden>
                </Container>
            </Toolbar>
        </AppBar>
  );
};

export default Navbar;
