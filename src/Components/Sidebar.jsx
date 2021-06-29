import {
    Drawer,
    IconButton,
    Button,
    Grid,
    Typography,
    makeStyles
  } from "@material-ui/core";
  import { useState } from "react";
  import MenuIcon from '@material-ui/icons/Menu';

  const useStyles = makeStyles({
      paper:{
        backgroundColor:"#605F5D",
        textAlign:"center"
      },
      list:{
        display:"flex",
        flexDirection:"column",
        width: "100%",
        marginTop:40,
      },
      links:{
        textDecoration: "none",
        color:"#FEF9EE"
      },
      underline:{
        position:"relative",
        top:"-0.8em",
        color:"#FEF9EE"
      }
  });
  
  const Sidebar = (props) => {
    const classes = useStyles();
    const [state, setState] = useState({ right: false });
  
    const toggleDrawer = (anchor, open) => event => {
      if (
        event.type === "keydown" &&
        (event.key === "Tab" || event.key === "Shift")
      ) {
        return;
      }
  
      setState({ [anchor]: open });
    };
  
    const sideDrawerList = anchor => (
      <div
        
        role="presentation"
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
      <Grid container className={classes.list}  >

        {
          props.navs.map(nav => {
            return (
              <>
                <a href={nav.link} className={classes.links}>
                  <Button color="secondary" >
                    <Typography variant="subtitle1" style={{ letterSpacing: 3, fontWeight:700}}>
                      {nav.label}
                      <hr className={classes.underline}/>
                    </Typography>
                  </Button>
                </a>
              </>
            )
          })
        }
      </Grid>
      </div>
    );
  
    return (
      <>
        <IconButton
          edge="start"
          aria-label="menu"
          onClick={toggleDrawer("right", true)}
        >
            <MenuIcon/>
        </IconButton>
  
        <Drawer
          classes={{ paper: classes.paper }}
          anchor="right"
          open={state.right}
          onOpen={toggleDrawer("right", true)}
          onClose={toggleDrawer("right", false)}
        >
          {sideDrawerList("right")}
        </Drawer>
      </>
    );
  };
  
  export default Sidebar;
  