import { Grid } from "@material-ui/core"
import { makeStyles } from "@material-ui/core";
const styles=makeStyles({
    achieve:{

    },
    panel:{

    },
})
const Achieve = () => {
    const classes=styles();
    return ( 
        <div className="achieve">
            <Grid container xs={12}>
                <Grid item xs={4}>
                    <div className={classes.panel}>
                        
                    </div>
                </Grid>
            </Grid>
        </div>
     );
}
 
export default Achieve;