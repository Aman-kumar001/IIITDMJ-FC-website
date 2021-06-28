import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core";
import trophy from "../media/trophy-svgrepo-com.svg"


const styles=makeStyles({
    achieve:{
        backgroundColor:"white",
        marginTop:"0px",
    },
    header:{
        marginTop:0,
        fontWeight:"lighter",
        fontSize:"50px",
    },
    grid:{
        width:"60%",
        margin:"auto",
        // border:"1px solid black",
    },
    disc:{
        position:"relative",
        textAlign:"center",
    },
    men:{
        position:"relative",
        top:"-200px",
    },
    svg:{
        display:"flex",
    }
})
const Achieve = () => {
    const classes=styles();
    return ( 
        <div className={classes.achieve}>
            <h1 className={classes.header}>Glorious Moments</h1>
            <Grid container xs={12} spacing={2} className={classes.grid}>
                <Grid item sm={12} md={4}>
                    <div className="panel">
                        <div className="hover"></div>
                        <div className={classes.svg}>
                           <img src={trophy} alt=""
                            height="100px"
                            style ={{position:"relative",margin:"auto",zIndex:"2",}} />
                           <img src={trophy} alt=""
                            height="100px"
                            style ={{position:"relative",margin:"auto",zIndex:"2",}} />
                        </div>
                        <p className={classes.disc}>Inter IIIT Winners (Mens) x2 </p>
                    </div>
                </Grid>
                <Grid item sm={12} md={4}>
                    <div className="panel">
                    <div className="hover"></div>
                        <div className={classes.svg}>
                        <img src={trophy} alt=""
                        height="100px"
                        style ={{position:"relative",margin:"auto",zIndex:"2",}}  />
                        </div>
                        <p className={classes.disc}>Enthuse Champions</p>
                    </div>
                </Grid>
                <Grid item sm={12} md={4}>
                <div className="panel">
                <div className="hover"></div>
                        <div className={classes.svg}>
                        <img src={trophy}  alt=""
                        height="100px"
                        style ={{position:"relative",margin:"auto",zIndex:"2",}}/>
                        </div>
                        <p className={classes.disc}>Inter IIIT Winners (womens)</p>
                    </div>
                </Grid>
            </Grid>
        </div>
     );
}
 
export default Achieve;