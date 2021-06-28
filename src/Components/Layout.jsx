import React from 'react'
import Navbar from './Navbar'
import Home  from './Home'
import Gallery  from './Gallery'
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import About from './About';
import Events from './Events';
import Achieve from './Achieve';
import Footer from './Footer';
const style=makeStyles({
  join:{
    width:"100px",
    position:"fixed",
    left:"90vw",
    top:"85vh",
    zIndex:"100"
  }
})

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}

const Layout = () => {
    const { height, width } = useWindowDimensions();

    const classes=style();

    return (
       <div>

           {/* SideNav */}
           <Navbar/>

           {/* LANDING PAGE */}

           <a name="home" clasName={classes.anchor}>
          <Home/>
           </a>
           {/* ACHIEVEMENTS */}
            <Achieve/>

           {/* ABOUT */}
           <a name="about" className={classes.anchor}>
             <About/>
           </a>
           
           {/* FIXTURES(?) */}


           {/* EVENTS */}
            <Events/>
            
           {/* GALLERY */}
           <a name="gallery" className={classes.anchor}>
            <Gallery/>
           </a>

           <Footer/>
           {/* CONTACT */}

           {/* <Button
            className={classes.join}
            variant="contained"
            color="primary"
            >
            JOIN US!!
          </Button> */}


       </div>
    )
}

export default Layout
