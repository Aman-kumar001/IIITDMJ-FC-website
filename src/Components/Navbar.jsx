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
import { makeStyles } from "@material-ui/core";
import Sidebar from "./Sidebar";
import '../App.css';
import logoFootball from "../media/logo-football.svg"

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
    background:"white",
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
  }
});

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

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
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
                                    Contirbutor
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
                                    Hello There
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
