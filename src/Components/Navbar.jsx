import React from 'react'
import { Grid, makeStyles, List, Button, Typography } from '@material-ui/core'
import logo from '../media/logo-football.svg'
const useStyles = makeStyles({
    root:{
        background:"#002984",
        height:"100vh",
        width:120,
        position:"fixed",
        zIndex:"100"
    },
    img:{
        width:"100px",
        margin: "20px 10px",
        marginBottom:"20px"
    },
    iconList:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-around",
        alignContent:"center",
        // height:"60%",
        height:"45%",
        // border:"1px solid black",
    },
    icons:{
        position:"relative",
        justifyItems:"center",
        // border:"1px solid black",
        // marginBottom:"40px",
        margin:"auto",
        // height:"22%",
        transition:"all 0.4s ease",
        width:"85%",
        zIndex:"100",
        color:"white",
        "&:hover":{
            // background:"rgba(200,200,200,1)",
            background:"#3f51b5",
            transform:"scale(1.2)",
            "& span":{
                visibility:"visible",
                opacity:1,
                transform:"translate(25px,-50%)",
            }
        }
    },
    label:{
        position:"relative",
        zIndex:"100",
        backgroundImage: "linear-gradient(left, rgba(63,81,181,1), rgba(63,81,181,0))",
        position:"absolute",
        top:"50%",
        transform:"translate(-25px,-50%)",
        zIndex:100,
        padding:10,
        visibility:"hidden",
        // height:"74.5%",
        // border:"1px solid black",
        opacity:0,
        transition:"all 1s  ease",

    }
})


const Navbar = () => {
    const classes = useStyles()
    return (
        <div>
            <Grid className={classes.root}>
                <section className={classes.imgSection}>
                    <img className={classes.img} src={logo}/>
                </section>
                <List className={classes.iconList}>
                    <span className={classes.icons} >
                        <box-icon color="white" name='face' size="lg"/>
                        <span className={classes.label}>
                            <Typography variant="h5">
                                About    
                            </Typography>
                        </span>
                    </span>
                    <span className={classes.icons}>
                        <box-icon color="white" name='football' size="lg"/>
                        <span className={classes.label}>
                            <Typography variant="h5">
                                Events    
                            </Typography>
                        </span>
                    </span>
                    <span className={classes.icons}>
                        <box-icon color="white" name='photo-album' size="lg"/>
                        <span className={classes.label}>
                            <Typography variant="h5">
                                Gallery    
                            </Typography>
                        </span>
                    </span>
                    <span className={classes.icons}>
                        <box-icon color="white" name='terminal' size="lg"/>
                        <span className={classes.label}>
                            <Typography variant="h5">
                                Contributors    
                            </Typography>
                        </span>
                    </span>
                </List>

                <section className={classes.join}>
                    <Button variant="outlinedd" color="Primary">
                        Join Us
                    </Button>
                </section>
            </Grid>
        </div>
    )
}

export default Navbar
