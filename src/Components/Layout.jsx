import React from 'react'
import Navbar from './Navbar'
import Home  from './Home'
import Gallery  from './Gallery.jsx'
import Footer from './Footer';
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import About from './About';
import Events from './Events';
import MainFooter from './MainFooter';
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
           <a name="home" clasName={classes.anchor}>
          <Home/>
          </a>
           {/* ABOUT */}
           <a name="about" className={classes.anchor}>
             <About width={width}/>
           </a>
           
           {/* FIXTURES(?) */}


           {/* EVENTS */}
            <Events width={width}/>
            
           {/* GALLERY */}
           <a name="gallery" className={classes.anchor}>
            <Gallery width={width}/>
           </a>

           <Footer width={width}/>
           {/* CONTACT */}

           <MainFooter width={width}/>
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
