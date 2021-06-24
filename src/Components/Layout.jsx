import React from 'react'
import Navbar from './Navbar'
import Home  from './Home'
import Gallery  from './Gallery'
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

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
           {/* ACHIEVEMENTS */}
           <Home/>
            {/* ABOUT */}

           {/* FIXTURES(?) */}

           {/* GALLERY */}
           <Gallery width={width}/>

           {/* EVENTS */}

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
