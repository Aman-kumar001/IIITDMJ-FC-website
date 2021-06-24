import React from 'react'
import { Typography, Grid, makeStyles } from '@material-ui/core'

const useStyles=makeStyles({
    root:{
        height:"200vh",
        background:"green"
    }
})

const Home = () => {
    const classes = useStyles()

    return (
        <Grid className={classes.root}> 
            <Typography variant="h1">HELLO THERE</Typography>
        </Grid>
    )
}

export default Home
