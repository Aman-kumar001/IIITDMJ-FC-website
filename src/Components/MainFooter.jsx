import React from 'react'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Link from '@material-ui/core/Link'
import {makeStyles} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const style = makeStyles({
  upper:{
    width:"100%",
    marginLeft:"120.1px",
    backgroundColor:"red",
    marginTop:"0px",
    overflow:"hidden",
  },
});
const MainFooter = ({width}) => {
   const classes = style();
   return (
     <footer style={{width:`${width-137.5}px`}} className={classes.upper}>
       <Box px={{xs:3,sm:10}} py ={{xs:5,sm:10}} bgcolor="text.secondary" color="white">
         <Container maxWidth="lg">
           <Grid container spacing = {5}>
             <Grid item xs={12} sm = {6} md={4}>
               <Box borderBottom={3} fontSize="30px">Help</Box>
               <Box>
                 <Link href="/" color="inherit" style={{fontSize:'20px'}}>
                   About
                 </Link>
               </Box>
               <Box>
                 <Link href="/" color="inherit" style={{fontSize:'20px'}}>
                  Event
                 </Link>
               </Box>
               <Box>
                 <Link href="/" color="inherit" style={{fontSize:'20px'}}>
                  Gallery
                 </Link>
               </Box>
             </Grid>
             <Grid item xs={12} sm = {6} md={4}>
               <Box borderBottom={3} fontSize="30px">Support</Box>
               <Box>
                 <Link href="/" color="inherit">
                   <FacebookIcon fontSize = "large"/>
                 </Link>
               </Box>
               <Box>
                 <Link href="/" color="inherit">
                  <InstagramIcon fontSize = "large"/>
                 </Link>
               </Box>
             </Grid>
             <Grid item xs={12} sm = {12} md={4}>
               <Box borderBottom={3} fontSize="30px">Contributors</Box>
               <Box>
                 <Link href="/" color="inherit" style={{fontSize:'20px',textAlign:"center"}}>
                   Aman Kumar
                 </Link>
               </Box>
               <Box>
                 <Link href="/" color="inherit" style={{fontSize:'20px'}}>
                  Jayraj Rathod
                 </Link>
               </Box>
               <Box>
                 <Link href="/" color="inherit" style={{fontSize:'20px'}}>
                  Kartik Singh Chuphal
                 </Link>
               </Box>
             </Grid>
           </Grid>
            <Box textAlign="center" pt = {{xs:5,sm:10}} pb={{xs:5,sm:0}}>
              @Footbal Club IIITDMJ
            </Box>
         </Container>
       </Box>
     </footer>
   )
}

export default MainFooter;
