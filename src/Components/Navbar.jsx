import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import logo from '../media/logo.png'

const useStyles = makeStyles({
    root:{
        background:"pink",
        height:"100vh",
        width:120,
        position:"fixed"
    },
    img:{
        width:"100px",
        margin: "50px 10px"
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
            </Grid>
        </div>
    )
}

export default Navbar
