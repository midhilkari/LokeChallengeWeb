import React, { useState } from "react";
import AppHeader from "./AppBar";
import Home from "./Home";

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
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DirectionsRunIcon from "@material-ui/icons/DirectionsRun";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import LocalBarIcon from "@material-ui/icons/LocalBar";
import LocalDrinkIcon from "@material-ui/icons/LocalDrink";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import ContactSupportIcon from "@material-ui/icons/ContactSupport";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Popover from "@material-ui/core/Popover";

//Icons
import Booze from "../assets/booze.jpeg";
import Burger from "../assets/burger.jpeg";
import Sides from "../assets/sides.png";

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
    // minwidth: 0,
    // flexdirection: "column",
  },
  buttonWidth: {
    justifyContent: "center",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  width: {
    maxWidth: 345,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
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

const Burgers = () => {
  const [open, setOpen] = React.useState(true);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [expanded, setExpanded] = React.useState(false);
  const [dialog, setDialog] = React.useState(false);
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });
  const [cart, setCart] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const [shop, setShop] = React.useState([""]);

  const classes = useStyles();

  let history = useHistory();

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);

    if (index === 0) {
      console.log("Combo");
      history.push("/");
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

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleClickOpen = () => {
    setDialog(true);
  };

  const handleClose = () => {
    setDialog(false);
  };

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  const handleCart = () => {
    setCart(cart + 1);
    setDialog(false);
  };

  const handleCartClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCartClose = () => {
    setAnchorEl(null);
  };

  const openPopover = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const cards = [1, 2];
  return (
    <div className={classes.root}>
      <CssBaseline />
      {/* <AppHeader /> */}
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
          <IconButton color="inherit" onClick={handleCartClick}>
            <Badge badgeContent={cart} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
          <Popover
            id={id}
            open={openPopover}
            anchorEl={anchorEl}
            onClose={handleCartClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <Typography className={classes.typography}>
              Your Cart
              {shop}
              <br />
            </Typography>
          </Popover>
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
            <Grid item xs={12} spacing={3}>
              <Paper className={classes.paper}>
                {/* <Orders /> */}
                <p>This is Burgers Page</p>
                {cards.map((card) => (
                  <Grid
                    id="top-row"
                    container
                    spacing={24}
                    className={classes.root}
                  >
                    <Grid item lg={4} md={4} xs={12}>
                      <Card className={classes.width}>
                        <CardHeader
                          title="Burger & Beer"
                          subheader="Can't be Better!!!"
                        />
                        <CardMedia
                          className={classes.media}
                          image={Booze}
                          title="Booze"
                        />
                        <CardContent>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            Building for Loke. bla blab blab blab blab blab lba
                          </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                          <IconButton aria-label="add to favorites">
                            <Button
                              variant="contained"
                              color="primary"
                              className={classes.buttonWidth}
                              onClick={handleClickOpen}
                            >
                              Add to Cart
                            </Button>
                            <Dialog
                              open={dialog}
                              onClose={handleClose}
                              aria-labelledby="form-dialog-title"
                            >
                              <DialogTitle id="form-dialog-title">
                                Burger & Beer
                              </DialogTitle>
                              <DialogContent>
                                <DialogContentText>
                                  $30...FREE FOR YOU!!!
                                  <br />
                                  <FormControlLabel
                                    control={
                                      <Checkbox
                                        checked={state.checkedB}
                                        onChange={handleChange}
                                        name="checkedB"
                                        color="primary"
                                      />
                                    }
                                    label="Extra Cheese"
                                  />
                                </DialogContentText>
                              </DialogContent>
                              <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                  Cancel
                                </Button>
                                <Button onClick={handleCart} color="primary">
                                  Add to Cart
                                </Button>
                              </DialogActions>
                            </Dialog>
                          </IconButton>
                        </CardActions>
                      </Card>
                    </Grid>
                    <Grid item lg={4} md={4} xs={12}>
                      <Card className={classes.width}>
                        <CardHeader title="Just a Burger" subheader="Eat Now" />
                        <CardMedia
                          className={classes.media}
                          image={Burger}
                          title="Burger"
                        />
                        <CardContent>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            Building for Loke. bla blab blab blab blab blab lba
                          </Typography>
                        </CardContent>

                        <CardActions disableSpacing>
                          <IconButton aria-label="add to favorites">
                            <Button
                              variant="contained"
                              color="primary"
                              className={classes.buttonWidth}
                              onClick={handleClickOpen}
                            >
                              Add to Cart
                            </Button>
                            <Dialog
                              open={dialog}
                              onClose={handleClose}
                              aria-labelledby="form-dialog-title"
                            >
                              <DialogTitle id="form-dialog-title">
                                Just Burger for You!!!
                              </DialogTitle>
                              <DialogContent>
                                <DialogContentText>
                                  $20...EXTRA FOR YOU!!!
                                  <br />
                                  <FormControlLabel
                                    control={
                                      <Checkbox
                                        checked={state.checkedB}
                                        onChange={handleChange}
                                        name="checkedB"
                                        color="primary"
                                      />
                                    }
                                    label="Extra Cheese"
                                  />
                                </DialogContentText>
                              </DialogContent>
                              <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                  Cancel
                                </Button>
                                <Button onClick={handleCart} color="primary">
                                  Add to Cart
                                </Button>
                              </DialogActions>
                            </Dialog>
                          </IconButton>
                        </CardActions>
                      </Card>
                    </Grid>
                    <Grid item lg={4} md={4} xs={12}>
                      <Card className={classes.width}>
                        <CardHeader title="Some Chips" subheader="Eat Now" />
                        <CardMedia
                          className={classes.media}
                          image={Sides}
                          title="Booze"
                        />
                        <CardContent>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            Building for Loke. bla blab blab blab blab blab lba
                          </Typography>
                        </CardContent>
                        <CardActions disableSpacing>
                          <IconButton aria-label="add to favorites">
                            <Button
                              variant="contained"
                              color="primary"
                              className={classes.buttonWidth}
                              onClick={handleClickOpen}
                            >
                              Add to Cart
                            </Button>
                            <Dialog
                              open={dialog}
                              onClose={handleClose}
                              aria-labelledby="form-dialog-title"
                            >
                              <DialogTitle id="form-dialog-title">
                                Some Chips!!!!
                              </DialogTitle>
                              <DialogContent>
                                <DialogContentText>
                                  $10!!!!
                                  <br />
                                  <FormControlLabel
                                    control={
                                      <Checkbox
                                        checked={state.checkedB}
                                        onChange={handleChange}
                                        name="checkedB"
                                        color="primary"
                                      />
                                    }
                                    label="Extra Cheese"
                                  />
                                </DialogContentText>
                              </DialogContent>
                              <DialogActions>
                                <Button onClick={handleClose} color="primary">
                                  Cancel
                                </Button>
                                <Button onClick={handleCart} color="primary">
                                  Add to Cart
                                </Button>
                              </DialogActions>
                            </Dialog>
                          </IconButton>
                        </CardActions>
                      </Card>
                    </Grid>
                  </Grid>
                ))}
                <br />
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

export default Burgers;
