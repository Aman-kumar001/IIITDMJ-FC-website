import React from 'react'
import { Grid, makeStyles, List, Button, Typography } from '@material-ui/core'
import logo from '../media/logo-football.svg'
const useStyles = makeStyles({
    root:{
        background:"#ddd",
        // opacity:"0.1",
        height:"100vh",
        width:120,
        position:"fixed",
        zIndex:"100",
    },
    img:{
        width:"100px",
        margin: "20px 10px",
        marginBottom:"40%"
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
        color:"black",
        "&:hover":{
            // background:"rgba(200,200,200,1)",
            background:"white",
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
        backgroundImage: "linear-gradient(left, rgba(255,255,255,1), rgba(255,255,255,0))",
        position:"absolute",
        top:"50%",
        transform:"translate(-25px,-50%)",
        zIndex:100,
        padding:10,
        visibility:"hidden",
        opacity:0,
        transition:"all 1s  ease",

    },
    join:{
        marginTop:"20%",
    },
    links:{
        color:"black"
    }
})


const Navbar = () => {
    const classes = useStyles()

    const navs = [
        {
            id:1,
            icon:"face",
            label:"About",
            link:"about"
        },
        {
            id:2,
            icon:"football",
            label:"Events",
            link:"events"
        },
        {
            id:3,
            icon:"photo-album",
            label:"Gallery",
            link:"gallery"
        },
        {
            id:4,
            icon:"terminal",
            label:"WebTeam",
            link:"contributors"
        }
    ]
    return (
        <div>
            <Grid className={classes.root}>
                <section className={classes.imgSection}>
                    <a href="#home">
                        <img className={classes.img} src={logo}/>
                    </a>
                </section>
                <List className={classes.iconList}>

                    {
                        navs.map(nav => {
                            return(
                                <span className={classes.icons} >
                                    <a href={`#${nav.link}`} className={classes.links}>
                                        <box-icon name={nav.icon} size="lg"/>
                                        <span className={classes.label}>
                                            <Typography variant="h5">
                                                {nav.label}    
                                            </Typography>
                                        </span>
                                    </a>
                                </span>
                            )
                        })
                    }
                </List>

                <section className={classes.join}>
                    <Button variant="outlinedd" color="Primary">
                        <Typography color="secondary" variant="h6">
                            Join Us
                        </Typography>
                    </Button>
                </section>
            </Grid>
        </div>
    )
}

export default Navbar
