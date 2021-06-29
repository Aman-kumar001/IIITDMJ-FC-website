import { Grid, makeStyles,Typography } from "@material-ui/core";
import Game from "./Game";
const useStyles=makeStyles({
   about:{
        height:"90vh",
        backgroundColor:"white",
        paddingBottom:"80px",
        overflow:"hidden",
        position:"relative"
   },
   heading:{
       marginTop:0,
       fontSize:"50px",
       paddingTop:"10px",
       fontWeight:"lighter",
       marginBottom:"50px"
   },
   content:{
    //    border:"1px solid black",
   },
   paragraph:{
       textAlign:"left",
       position:"relative",
       top:50,
       fontSize:"17px"
   },
   game:{
    //    border:"1px solid black",
        overflow:"hidden",
   }
})
const About = () => {
    const classes=useStyles();
    return ( 
        <div 
            className={classes.about}
        >
            <h1 className={classes.heading}>About</h1>
            <Grid container xs={12} className={classes.content}>
                <Grid item xs={1}>
                </Grid>
                <Grid item xs={4}>
                    <Typography class={classes.paragraph}>
                        We are an intergral part of Gymkhana since 2005.
                    We place equal emphasis on both the Men's and Women's teams with equal opportunity to take part in various intra-college events such as Enthuse and Futsal.
                    </Typography>
                    <Typography class={classes.paragraph}>
                    Regular sessions are also held on evenings and mornings where an organized training plan is followed.
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                <div className={classes.game}>
                    <Game/>
                </div>

                </Grid>
                <Grid item xs={1}>
                </Grid>
            </Grid>
        </div>
     );
}

export default About;
