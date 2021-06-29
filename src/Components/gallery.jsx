import Slider from 'infinite-react-carousel';
import { makeStyles,Typography } from '@material-ui/core';
import trail from "../media/trial.JPG"
import trail2 from "../media/trial2.jpg"
import pic from "../media/pic.JPG"
import pic1 from "../media/pic1.JPG"
import pic2 from "../media/pic2.JPG"
import pic3 from "../media/pic3.JPG"
import pic4 from "../media/pic4.JPG"
import pic5 from "../media/pic5.JPG"
import pic6 from "../media/pic6.JPG"
import pic7 from "../media/pic7.JPG"
import pic8 from "../media/pic8.JPG"
import pic9 from "../media/pic9.jpg"
import pic10 from "../media/pic10.JPG"
import pic11 from "../media/pic11.JPG"
import pic12 from "../media/pic12.JPG"
import pic13 from "../media/pic13.JPG"
import pic14 from "../media/pic14.JPG"
import pic15 from "../media/pic15.jpg"

import pic17 from "../media/pic17.JPG"
import pic18 from "../media/pic18.JPG"
import pic19 from "../media/pic19.jpg"
import pic21 from "../media/pic21.JPG"
import pic22 from "../media/pic22.jpeg"
import pic23 from "../media/pic23.jpeg"
const style=makeStyles({
    gallery:{
        width:"100%",
        backgroundColor:"white",
        overflow:"hidden",
        fontFamily:"Avenir Light",
        marginBottom:"100px",
    },
    heading:{
        textAlign:"center",
        fontFamily:"Avenir Light",
    },
})



const Gallery = () => {
    const classes=style();
    const settings =  {
        arrows: false,
        className: 'slider',
        initialSlide: 5,
        overScan: 3,
        slidesToShow: 4,
        wheel: true,
    };
    const settings2 =  {
        arrows: false,
        className: 'slider',
        initialSlide: 1,
        overScan: 3,
        slidesToShow: 3,
        wheel: true,
    };
    const settings3 =  {
        arrows: false,
        className: 'slider',
        initialSlide: 1,
        overScan: 3,
        slidesToShow: 4,
        wheel: true,
    };
    return ( 
        <div className={classes.gallery}>
            <div><Typography className={classes.heading} variant="h3">GALLERY</Typography></div>
            <Slider {...settings}>
                <div className="slide img">
                <img src={pic1} alt="" height="100%" width="100%" id="hovered"/>
                </div>
                <div className="slide multi">
                    <div className="img box"><img src={trail2} alt="" height="100%" width="100%"/></div>
                    <div className="img box"><img src="" alt="" height="100%" width="100%"/></div>
                </div>
                <div className="slide img">
                    <img src={trail} alt="" height="100%" width="100%" id="hovered"/>
                </div>
                <div className="slide img">
                    <img src={pic} alt="" height="100%" width="100%" id="hovered"/>
                </div>
                <div className="slide img">
                    <img src={pic2} alt="" height="100%" width="100%" id="hovered"/>
                </div>
                <div className="slide img">
                    <img src={pic6} alt="" height="100%" width="100%" id="hovered"/>
                </div>
                <div className="slide img">
                    <img src={pic5} alt="" height="100%" width="100%" id="hovered"/>
                </div>
                <div className="slide img">
                    <img src={pic4} alt="" height="100%" width="100%" id="hovered"/>
                </div>
                <div className="slide multi">
                    <div className="img box"></div>
                    <div className="img box"></div>
                </div>
                <div className="slide img">
                    <img src={pic7} alt="" height="100%" width="100%" id="hovered"/>
                </div>
            </Slider>

            <Slider {...settings2}>
                <div className="slide1 img">
                <img src={pic8} alt="" height="100%" width="100%" id="hovered"/>
                </div>
                <div className="slide1 multi">
                <img src={pic9} alt="" height="100%" width="100%" id="hovered"/>
                </div>
                <div className="slide1 img">
                <img src={pic10} alt="" height="100%" width="100%" id="hovered"/>
                </div>
                <div className="slide1 img">
                <img src={pic11} alt="" height="100%" width="100%" id="hovered"/>
                </div>
                <div className="slide1 img">
                <img src={pic21} alt="" height="100%" width="100%" id="hovered"/>
                </div>
                <div className="slide1 img">
                <img src={pic13} alt="" height="100%" width="100%" id="hovered"/>
                </div>
                <div className="slide1 img">
                <img src={pic12} alt="" height="100%" width="100%" id="hovered"/>
                </div>
                <div className="slide1 img">
                <img src={pic19} alt="" height="100%" width="100%" id="hovered"/>
                </div>
                <div className="slide1 multi">
                <img src={pic14} alt="" height="100%" width="100%" id="hovered"/>
                </div>
                <div className="slide1 img">
                <img src={pic15} alt="" height="100%" width="100%" id="hovered"/>
                </div>
            </Slider>
            <Slider {...settings3}>
                <div className="slide img">
                <img src={pic} alt="" height="100%" width="100%" id="hovered"/>
                </div>
                <div className="slide img">
                <img src={pic15} alt="" height="100%" width="100%" id="hovered"/>
                </div>
                <div className="slide img">
                <img src={pic17} alt="" height="100%" width="100%" id="hovered"/>
                </div>
                <div className="slide img">
                <img src={pic18} alt="" height="100%" width="100%" id="hovered"/>
                </div>
                <div className="slide img">
                <img src={pic22} alt="" height="100%" width="100%" id="hovered"/>
                </div>
                <div className="slide img">
                <img src={pic} alt="" height="100%" width="100%" id="hovered"/>
                </div>
                <div className="slide img">
                <img src={pic15} alt="" height="100%" width="100%" id="hovered"/>
                </div>
                <div className="slide img">
                <img src={pic15} alt="" height="100%" width="100%" id="hovered"/>
                </div>
                <div className="slide multi">
                    <div className="img box"> <img src={pic15} alt="" height="100%" width="100%" id="hovered"/></div>
                    <div className="img box"> <img src={pic15} alt="" height="100%" width="100%" id="hovered"/></div>
                </div>
            </Slider>
        </div>
     );
}
 
export default Gallery;