import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Hidden from '@material-ui/core/Hidden';

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import Blotter from './Blotter';
import ReportCrime from './ReportCrime';
import ViewCrime from './ViewCrime';
import Station from './Station';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));


function App() {
  const classes = useStyles();

  return (
    <Router>
      <div>
        <div >
          <AppBar position="static" style={{ margin: 0, position: "fixed" }}>
            <Toolbar>
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Police Blotter
              </Typography>
              <Button color="inherit" component={props => <Link to="/signup" {...props}/>}>Signup</Button>
              <Button color="inherit">Blotter</Button>
            </Toolbar>
          </AppBar>
        </div>
        <div>
          <Grid container spacing={2}>
            <Grid item md={1}>
            </Grid>
            <Grid item md={2}>
                <br/>
                <br/>
                <br/>
                <br/>
                <Hidden smDown>
                  <nav>
                    <ul>
                      <li>
                        <Link to="/station/1">Santa Monica Police Department</Link>
                      </li>
                      <li>
                        <Link to="/1/blotter">Santa Monica Blotter</Link>
                      </li>
                      <br/>
                      <li>
                        <Link to="/station/1/crime/add">Report a crime</Link>
                      </li>
                      <br/>
                     </ul>
                  </nav>
                </Hidden>
              </Grid>
            <Grid item md={8}>
               <Switch>
                 
                  <Route exact path="/station/:station_id/crime/add">
                      <ReportCrime/>
                  </Route>
                  <Route exact path="/station/:station_id/blotter">
                      <Blotter/>
                  </Route>
                  <Route path="/station/:station_id/blotter/:crime_id" component={ViewCrime}>
                  </Route>
                   <Route exact path="/station/:station_id">
                      <Station/>
                  </Route>
              </Switch>
            </Grid>
          </Grid>
        </div>
      </div>
    </Router>
  );
}

export default App;
