import { Typography } from "@material-ui/core";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core"; 

const styles=makeStyles({
    font:{
        fontFamily:"Avenir Light",
    }
})


const Events = () => {
    const classes=styles();
    return ( 
        <div className="events">
            <h1>EVENTS</h1>
            <Grid container xs={12} className="grid">
                <Grid item xs={2}>

                </Grid>
                <Grid item xs={5} className="content odd">
                    <Typography className={classes.font} variant="h4">
                        Gusto
                    </Typography>
                    <Typography className={classes.font}>
                    An Inter-college fest allowing every Indian college to show their passion for the sport is organized by us under the name Gusto. With 11 players on ground and 5 substitute players, a team from each college participates, indulging in a breath-taking group cum knockout tournament. With separate men’s and women’s tournament, we make sure to give equal chances of victory to everyone.
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <div style={{height:"100%",width:"100%",
                    backgroundColor:"blue"}}>

                    </div>
                </Grid>
                <Grid item xs={2}>

                </Grid>
            </Grid>
            <Grid container xs={12} className="grid">
                <Grid item xs={2}>

                </Grid>
                <Grid item xs={3}>
                    <div style={{height:"100%",width:"100%",
                    backgroundColor:"blue"}}>

                    </div>
                    
                </Grid>
                <Grid item xs={5} className="content even">
                    <Typography className={classes.font} variant="h4">
                        Enthuse
                    </Typography>
                    <Typography className={classes.font}>
                    We organize this yearly event to tighten the muscles of every club member. With eleven players on ground, and four substitute players waiting to play, a fierce group cum knockout tournament takes place. Teams representing the year they belong to compete with each other to pick out the best. Students irrespective of the year or course participate and take pride in proving their skill.
                    </Typography>
                </Grid>
                <Grid item xs={2}>

                </Grid>
            </Grid>
            <Grid container xs={12} className="grid">
                <Grid item xs={2}>

                </Grid>
                <Grid item xs={5} className="content odd">
                    <Typography className={classes.font} variant="h4">
                        Futsal
                    </Typography>
                    <Typography className={classes.font}>
                    An annual intra college fun event which eases out the competitiveness called Futsal is also organized. We play in small teams consisting of 5 players each along with 3 substitutes and enjoy the fun filled group cum knockout tournament. Futsal registrations are open for every student team, making the club a warmer place for any new player in sight.
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <div style={{height:"100%",width:"100%",
                    backgroundColor:"blue"}}>

                    </div>
                </Grid>
                
                <Grid item xs={2}>

                </Grid>
            </Grid>
        </div>
     );
}
 
export default Events;