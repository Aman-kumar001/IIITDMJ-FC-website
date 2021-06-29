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
import worker from "../media/worker.jpg";

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

  photoGrid:{
      margin: "1em auto",
      maxWidth: "1106px",
      textAlign: "center",
      '& li':{
        border: "5px solid white",
        display: "inline-block",
        margin: "1em",
        width: "289px",

        '&:hover':{
          '& figcaption':{
            opacity:"1",
          },
          '& img':{
            webkitTransform: "scale(1.4)",
            mozTransform: "scale(1.4)",
            transform: "scale(1.4)",
          },
        }
      },

      '& img':{
        display: "block",
        height: "auto",
        maxWidth: "100%",
        transition:"all 300ms"
      },

      '& figure':{
        height: "163px",
        overflow: "hidden",
        position: "relative",
        width: "289px",
      },

      '& figcaption':{
        background: "rgba(0,0,0,0.8)",
        color: "white",
        display: "table",
        height: "100%",
        left: "0",
        opacity: "0",
        position: "absolute",
        right: "0",
        top: "0",
        zIndex: "100",

         '& p':{
           display: "table-cell",
           fontSize: "1.5em",
           position: "relative",
           top: "-40px",
           width: "289px",
           verticalAlign: "middle",
         }
      },

  },

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
                                  <ul className={classes.photoGrid}>
                                       <li>
                                           <figure>
                                             <img src={worker} height="180" width="320" alt="Kartik"/>
                                             <figcaption><p>Aman Kumar</p></figcaption>
                                           </figure>
                                       </li>
                                       <li>
                                           <figure>
                                             <img src={worker} height="180" width="320" alt="Harshit"/>
                                             <figcaption><p>Jayraj Rathod</p></figcaption>
                                           </figure>
                                       </li>
                                       <li>
                                           <figure>
                                             <img src={worker} height="180" width="320" alt="Adarsh"/>
                                             <figcaption><p>Kartik Singh Chuphal</p></figcaption>
                                           </figure>
                                       </li>
                                       <li>
                                           <figure>
                                             <img src={worker} height="180" width="320" alt="Kartik"/>
                                             <figcaption><p>Ritik Roshan Nagadev</p></figcaption>
                                           </figure>
                                       </li>
                                    </ul>
                                  </TabPanel>
                                  <TabPanel value={value} index={1}>
                                  <ul className={classes.photoGrid}>
                                      <li>
                                          <figure>
                                            <img src={worker} height="180" width="320" alt="Kartik"/>
                                            <figcaption><p>Vinay Priyadarshan</p></figcaption>
                                          </figure>
                                      </li>
                                       <li>
                                           <figure>
                                             <img src={worker} height="180" width="320" alt="Kartik"/>
                                             <figcaption><p>Mudit Verma</p></figcaption>
                                           </figure>
                                       </li>
                                       <li>
                                           <figure>
                                             <img src={worker} height="180" width="320" alt="Harshit"/>
                                             <figcaption><p>Shubhang Verma</p></figcaption>
                                           </figure>
                                       </li>
                                    </ul>
                                  </TabPanel>
                                  <TabPanel value={value} index={2}>
                                  <ul className={classes.photoGrid}>
                                       <li>
                                           <figure>
                                             <img src={worker} height="180" width="320" alt="Kartik"/>
                                             <figcaption><p>Mudit Tripathi</p></figcaption>
                                           </figure>
                                       </li>
                                       <li>
                                           <figure>
                                             <img src={worker} height="180" width="320" alt="Harshit"/>
                                             <figcaption><p>Himdari Maheshwari</p></figcaption>
                                           </figure>
                                       </li>
                                    </ul>
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
