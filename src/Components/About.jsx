import { Grid, makeStyles,Typography } from "@material-ui/core";
import Game from "./Game";
const useStyles=makeStyles({
   about:{
        // height:"100vh",
        marginLeft:"120px",
        backgroundColor:"white",
        paddingBottom:"100px",
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
       border:"1px solid black",
   },
   paragraph:{
       textAlign:"left",
       position:"relative",
       top:50,
   },
   game:{
    //    border:"1px solid black",
        overflow:"hidden",
   }
})
const About = ({width}) => {
    const classes=useStyles();
    return ( 
        <div 
            className={classes.about} 
            style={{width:`${width-137.5}px`}}
        >
            <h1 className={classes.heading}>About</h1>
            <Grid container xs={12} className={classes.content}>
                <Grid item xs={1}>
                </Grid> 
                <Grid item xs={4}>
                    <Typography class={classes.paragraph}>
                    We place equal emphasis on both the Men's and Women's teams with equal opportunity to take part in various intra-college events such as Enthuse and Futsal. Regular sessions are also held on evenings and mornings where an organized training plan is followed.
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