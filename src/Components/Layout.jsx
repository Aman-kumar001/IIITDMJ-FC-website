import React from 'react'
import Navbar from './Navbar'
import Home  from './Home'
import Gallery  from './gallery'
import { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import About from './About';
import Events from './Events';
<<<<<<< HEAD
import Achieve from './Achieve';
=======
import Footer from './Footer';
>>>>>>> 6783a342c421eec51511f6d26c24d328ea340eab
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
<<<<<<< HEAD
=======

>>>>>>> 6783a342c421eec51511f6d26c24d328ea340eab

           <a name="home" clasName={classes.anchor}>
          <Home/>
           </a>
           {/* ACHIEVEMENTS */}
            <Achieve/>

           {/* ABOUT */}
<<<<<<< HEAD
           <a name="about" className={classes.anchor}>
             <About/>
           </a>
           
=======
           <About width={width}/>

>>>>>>> 6783a342c421eec51511f6d26c24d328ea340eab
           {/* FIXTURES(?) */}


           {/* EVENTS */}
<<<<<<< HEAD
            <Events/>
            
=======
            <Events width={width}/>

>>>>>>> 6783a342c421eec51511f6d26c24d328ea340eab
           {/* GALLERY */}
           <a name="gallery" className={classes.anchor}>
            <Gallery/>
           </a>

<<<<<<< HEAD
           <Footer/>
           {/* CONTACT */}

=======
           <Footer width={width}/>
>>>>>>> 6783a342c421eec51511f6d26c24d328ea340eab
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
