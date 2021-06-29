import React from 'react'
import { Typography, Grid, makeStyles } from '@material-ui/core'
import { Tween } from 'react-gsap';
import { Controller, Scene } from 'react-scrollmagic';
import home from "../media/home.jpg"



const useStyles=makeStyles({
    root:{
        height:"95vh",
        backgroundImage:`url(${home})`,
        backgroundSize:"cover",
        dsipaly:"flex",
        flexDirection:"column",
        alignItems:"center",
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        overflow:"hidden",
        fontFamily:"Avenir Light",
    },
    headerSection:{
        position:"relative",
        top:"50%",
        transform:"translateY(-100%)",
        color:"white",
        fontFamily:"Avenir Light",
    },
    header:{
        fontSize:"8em",
        fontFamily:"Avenir Light",
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
            
            <div/>
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
