import Slider from 'infinite-react-carousel';
import { makeStyles,Typography } from '@material-ui/core';
import trail from "../media/trial.JPG"
import trail2 from "../media/trial2.jpg"
const style=makeStyles({
    gallery:{
        width:"100%",
        backgroundColor:"white",
        overflow:"hidden",
        fontFamily:"Avenir Light",
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
                    <h1>1</h1>
                </div>
                <div className="slide multi">
                    <div className="img box"><img src={trail2} alt="" height="100%" width="100%"/></div>
                    <div className="img box"><img src={trail2} alt="" height="100%" width="100%"/></div>
                </div>
                <div className="slide img">
                    <img src={trail} alt="" height="100%" width="100%" id="hovered"/>
                </div>
                <div className="slide img">
                    <h1>4</h1>
                </div>
                <div className="slide img">
                    <h1>5</h1>
                </div>
                <div className="slide img">
                    <h1>6</h1>
                </div>
                <div className="slide img">
                    <h1>7</h1>
                </div>
                <div className="slide img">
                    <h1>8</h1>
                </div>
                <div className="slide multi">
                    <div className="img box"></div>
                    <div className="img box"></div>
                </div>
                <div className="slide img">
                    <h1>10</h1>
                </div>
            </Slider>

            <Slider {...settings2}>
                <div className="slide img">
                    <h1>1</h1>
                </div>
                <div className="slide multi">
                
                </div>
                <div className="slide img">
                    <h1>3</h1>
                </div>
                <div className="slide img">
                    <h1>4</h1>
                </div>
                <div className="slide img">
                    <h1>5</h1>
                </div>
                <div className="slide img">
                    <h1>6</h1>
                </div>
                <div className="slide img">
                    <h1>7</h1>
                </div>
                <div className="slide img">
                    <h1>8</h1>
                </div>
                <div className="slide multi">
                </div>
                <div className="slide img">
                    <h1>10</h1>
                </div>
            </Slider>
            <Slider {...settings3}>
                <div className="slide img">
                    <h1>1</h1>
                </div>
                <div className="slide multi">
                    <div className="img box"></div>
                    <div className="img box"></div>
                </div>
                <div className="slide img">
                    <h1>3</h1>
                </div>
                <div className="slide img">
                    <h1>4</h1>
                </div>
                <div className="slide img">
                    <h1>5</h1>
                </div>
                <div className="slide img">
                    <h1>6</h1>
                </div>
                <div className="slide img">
                    <h1>7</h1>
                </div>
                <div className="slide img">
                    <h1>8</h1>
                </div>
                <div className="slide multi">
                    <div className="img box"></div>
                    <div className="img box"></div>
                </div>
                <div className="slide img">
                    <h1>10</h1>
                </div>
            </Slider>
        </div>
     );
}
 
export default Gallery;