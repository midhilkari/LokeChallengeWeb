import React, { useState } from "react";

//Material UI Components
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import SmsIcon from "@material-ui/icons/Sms";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import LocalDrinkIcon from "@material-ui/icons/LocalDrink";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

//Icons
import booze from "../assets/booze.jpeg";

//Routing
import { useHistory } from "react-router-dom";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        LOKE by Midhil
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

const Sides = () => {
  const [open, setOpen] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const classes = useStyles();

  let history = useHistory();

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);

    if (index === 0) {
      console.log("Combo");
      history.push("/Combos");
    } else if (index === 1) {
      console.log("Burgers");
      history.push("/Burgers");
    } else if (index === 2) {
      console.log("Secret");
      history.push("/SecretMenu");
    } else if (index === 3) {
      console.log("Sides");
      history.push("/Sides");
    } else if (index === 4) {
      console.log("kids");
      history.push("/KidsMenu");
    } else if (index === 5) {
      console.log("drinks");
      history.push("/Drinks");
    } else if (index === 6) {
      console.log("booze");
      history.push("/Booze");
    } else if (index === 7) {
      console.log("retail");
      history.push("/Retail");
    } else if (index === 8) {
      console.log("contact us");
      history.push("/ContactUs");
    }
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Brades Burgers Parramatta
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={1} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />

        {/* <List>{mainListItems}</List> */}
        <ListItem
          button
          selected={selectedIndex === 0}
          // onClick={loadDashboard}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon>
            <FastfoodIcon />
          </ListItemIcon>
          <ListItemText primary="Combos" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 1}
          // onClick={loadSms}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <FastfoodIcon />
          </ListItemIcon>
          <ListItemText primary="Burgers" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 2}
          // onClick={loadCustomers}>
          onClick={(event) => handleListItemClick(event, 2)}
        >
          <ListItemIcon>
            <FastfoodIcon />
          </ListItemIcon>
          <ListItemText primary="Secret Menu" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 3}
          onClick={(event) => handleListItemClick(event, 3)}
        >
          <ListItemIcon>
            <FastfoodIcon />
          </ListItemIcon>
          <ListItemText primary="Sides" />
        </ListItem>
        {/* <List>{secondaryListItems}</List> */}
        <ListItem
          button
          selected={selectedIndex === 4}
          onClick={(event) => handleListItemClick(event, 4)}
        >
          <ListItemIcon>
            <FastfoodIcon />
          </ListItemIcon>
          <ListItemText primary="Kids Menu" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 5}
          onClick={(event) => handleListItemClick(event, 5)}
        >
          <ListItemIcon>
            <LocalDrinkIcon />
          </ListItemIcon>
          <ListItemText primary="Drinks" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 6}
          onClick={(event) => handleListItemClick(event, 6)}
        >
          <ListItemIcon>
            <LocalBarIcon />
          </ListItemIcon>
          <ListItemText primary="Booze" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 7}
          onClick={(event) => handleListItemClick(event, 7)}
        >
          <ListItemIcon>
            <LocalMallIcon />
          </ListItemIcon>
          <ListItemText primary="Retail" />
        </ListItem>
        <Divider />
        <br />

        <ListItem
          button
          selected={selectedIndex === 8}
          onClick={(event) => handleListItemClick(event, 8)}
        >
          <ListItemIcon>
            <ContactSupportIcon />
          </ListItemIcon>
          <ListItemText primary="Contact Us" />
        </ListItem>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper className={classes.paper}>
                {/* <Orders /> */}
                <p>Sides Page Under Development</p>
                <h1>STAY TUNED!!!!</h1>
                <DirectionsRunIcon />
              </Paper>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
};

export default Sides;
