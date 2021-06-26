import Slider from 'infinite-react-carousel';
import { makeStyles } from '@material-ui/core';
import trail from "../media/trial.JPG"
import trail2 from "../media/trial2.jpg"
const style=makeStyles({
    gallery:{
        width:"100%",
        marginLeft:"120.1px",
        backgroundColor:"green",
        marginTop:"0",
        overflow:"hidden",
    },
    heading:{
        textAlign:"center",
        fontSize:"50px",
        marginTop:"0px",
        paddingTop:"20px",
        fontWeight:"lighter"
    },
})



const Gallery = ({width}) => {
    const classes=style();
    const settings =  {
        arrows: false,
        className: 'slider',
        initialSlide: 5,
        overScan: 3,
        slidesToShow: 5,
        wheel: true,
    };
    const settings2 =  {
        arrows: false,
        className: 'slider',
        initialSlide: 1,
        overScan: 3,
        slidesToShow: 4,
        wheel: true,
    };
    const settings3 =  {
        arrows: false,
        className: 'slider',
        initialSlide: 1,
        overScan: 3,
        slidesToShow: 5,
        wheel: true,
    };
    return ( 
        <div className={classes.gallery} style={{width:`${width-137.5}px`}}>
            <div><h1 className={classes.heading}>GALLERY</h1></div>
            <Slider {...settings}>
                <div className="slide img">
                    <h1>1</h1>
                </div>
                <div className="slide multi">
                    <div className="img box"><img src={trail2} alt="" height="100%" width="100%"/></div>
                    <div className="img box"><img src={trail2} alt="" height="100%" width="100%"/></div>
                </div>
                <div className="slide img">
                    <img src={trail} alt="" height="100%" width="100%"/>
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