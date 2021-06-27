import React from 'react'
import { Typography, Grid, makeStyles } from '@material-ui/core'
import { Tween } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';
import home from "../media/home.JPG"
import grainy from '../media/grainy.png'


const useStyles=makeStyles({
    root:{
        height:"95vh",
        marginLeft:"120px",
        backgroundImage:`url(${home})`,
        backgroundSize:"cover",
        dsipaly:"flex",
        flexDirection:"column",
        alignItems:"center",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow:"hidden"
    },
    headerSection:{
        position:"relative",
        top:"50%",
        transform:"translateY(-100%)",
        color:"white",
    },
    header:{
        fontSize:"8em"
    },
    grain:{
        backgroundImage:`url(${grainy})`,
        height:"300%",
        left: "-50%",
        opacity: 0.25,
        position: "fixed",
        top: "-100%",
        width: "300%",
        animation: "$grain 8s steps(10) infinite"
    },
    "@keyframes grain" : {
        "0%" : { transform:"translate(0, 0)" },
        "10%" : { transform:"translate(-5%, -10%)" },
        "20%" :{ transform:"translate(-15%, 5%)" },
        "30%" :{ transform:"translate(7%, -25%)" },
        "40%" :{ transform:"translate(-5%, 25%)" },
        "50%" :{ transform:"translate(-15%, 10%)" },
        "60%" :{ transform:"translate(15%, 0%)" },
        "70%" :{ transform:"translate(0%, 15%)" },
        "80%" :{ transform:"translate(3%, 35%)" },
        "90%" :{ transform:"translate(-10%, 10%)" },
        "100%":{ transform:"translate(0, 0)" },
    }
})

const Home = () => {
    const classes = useStyles()

    return (
        <Grid className={classes.root}>
            
            <div className={classes.grain}/>
            <Grid className={classes.headerSection}>
                <Controller>
                    <Scene
                        duration={300}
                        pin={false}
                    >
                    {(progress) => (
                        <Tween
                        from={{
                            css: {
                                transform:"translateX(0%)"
                            },
                            ease: 'Strong.easeIn',
                        }}
                        to={{
                            css: {
                                transform:"translateX(100%)"
                            },
                            ease: 'Strong.easeIn',
                        }}
                        totalProgress={progress}
                        paused
                        >
                            <Typography variant="h1" className={classes.header}>
                                IIITDM Jabalpur
                            </Typography>
                        </Tween>
                    )}        
                    </Scene>
                </Controller>
            </Grid>

            <Grid className={classes.headerSection}>
                <Controller>
                    
                <Scene
                        duration={250}
                        pin={false}
                    >
                    {(progress) => (
                        <Tween
                        from={{
                            css: {
                                transform:"translateX(0%)"
                            },
                            ease: 'Strong.easeIn',
                        }}
                        to={{
                            css: {
                                transform:"translateX(-100%)"
                            },
                            ease: 'Strong.easeIn',
                        }}
                        totalProgress={progress}
                        paused
                        >
                            <Typography variant="h1" className={classes.header}>
                                Football Club
                            </Typography>
                        </Tween>
                    )}        
                    </Scene>
                </Controller>
            </Grid>
            
        </Grid>
    )
}

export default Home
