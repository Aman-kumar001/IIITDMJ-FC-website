import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core";
import trophy from "../media/trophy-svgrepo-com.svg"


const styles=makeStyles({
    achieve:{
        marginLeft:"120px",
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
    panel:{
        height:200,
        border:"1px solid black",
        width:"100%",
    },
    disc:{
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
const Achieve = ({width}) => {
    const classes=styles();
    return ( 
        <div className={classes.achieve} style={{width:`${width-137.5}px`}} >
            <h1 className={classes.header}>Glorious Moments</h1>
            <Grid container xs={12} className={classes.grid}>
                <Grid item xs={4}>
                    <div className={classes.panel}>
                        <div className={classes.svg}>
                           <img src={trophy} alt=""
                            height="100px"
                            style ={{margin:"auto"}} />
                           <img src={trophy} alt=""
                            height="100px"
                            style ={{margin:"auto"}} />
                        </div>
                        <p></p>
                    </div>
                </Grid>
                <Grid item xs={4}>
                    <div className={classes.panel}>
                        <div className={classes.svg}>
                        <img src={trophy} alt=""
                        height="100px"
                        style ={{margin:"auto"}}  />
                        </div>
                        <p className={classes.disc}></p>
                    </div>
                </Grid>
                <Grid item xs={4}>
                <div className={classes.panel}>
                        <div className={classes.svg}>
                        <img src={trophy}  alt=""
                        height="100px"
                        style ={{margin:"auto"}}/>
                        </div>
                        <p className={classes.disc}>Inter IIIT Winners (womens)</p>
                    </div>
                </Grid>
            </Grid>
        </div>
     );
}
 
export default Achieve;