import React from 'react'
import Navbar from './Navbar'
import Home  from './Home'
import Gallery  from './gallery'
import { useState, useEffect } from 'react';

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



       </div>
    )
}

export default Layout
