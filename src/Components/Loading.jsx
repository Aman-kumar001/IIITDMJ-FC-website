import { makeStyles } from '@material-ui/core/styles';
import logo from '../media/logo.png'

const style=makeStyles({
    cover:{
        height:"100vh",
        width:"100vw",
        overflow:"hidden"
    },
    frame:{
        height:"200px",
        width:"200px",
        margin:"auto",
        marginTop:"30vh",
        perspective:"400px",
        animation:`spin 3s ease infinite`
    },
    front:{
        height:"100%",
        width:"100%",
        backgroundImage:`url(http://www.mandysam.com/img/random.jpg)`,
        backgroundSize:"cover",
        transformOrigin:"center",
        borderRadius:"50%",
        transformStyle:"preserve-3d",
        animation:`$spin 3s ease infinite`
    },
    back:{
        height:"100%",
        width:"100%",
        backgroundImage:`url(${logo})`,
        backgroundSize:"cover",
        transformOrigin:"center",
        position:"absolute",
        top:"0",
        backfaceVisibility: "hidden",
        animation:`$spin 3s ease infinite`
    },
    "@keyframes spin":{
        "0%":{transform: "rotateY(0deg)"},
        "100%":{transform: "rotateY(360deg)"}
    }
    
})
const Loading = () => {
    const classes=style();
    return ( 
        <div className={classes.cover}>
            <div className={classes.frame}>
                <div className={classes.front}></div>
                <div className={classes.back}></div>
            </div>
        </div>
     );
}
 
export default Loading;