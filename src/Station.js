import React, {useState, useEffect} from 'react';

import { makeStyles } from '@material-ui/core/styles';
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

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import { Link, withRouter } from "react-router-dom";

import axios from 'axios';

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

function Station(props) {

  const classes = useStyles();
  const [data, setData] = useState([]);
  const station_id = props.match.params.station_id;

  var station_name = "";

  if (station_id == 1){

    station_name = "Santa Monica";

  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        //"http://127.0.0.1:8001/api/blotter/"
        "https://police-api.herokuapp.com/api/blotter/"
      );
      setData(result.data);
      //alert(JSON.stringify(result.data))
    };
    fetchData();
  }, []);



  return (<div>
            <br/>
            <br/>
            <br/>
            <br/>
            <h2>Welcome to {station_name} Police Department</h2>
            <br/>
            <br/>
            Our address is
            <br/>
            333 Olympic Dr, Santa Monica, CA 90401
            <br/>
            <br/>
            Report a crime:
            <br/>
            <Link to="/station/1/crime/add">Report a crime</Link> 
            </div>)
}

export default withRouter(Station);