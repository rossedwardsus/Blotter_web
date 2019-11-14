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

import axios from 'axios';

import { withRouter } from 'react-router-dom';


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

function ViewCrime(props) {

  const classes = useStyles();
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        //"http://127.0.0.1:8001/api/blotter/" + props.match.params.crime_id
        "https://police-api.herokuapp.com/api/blotter/"
      );
      setData(result.data);
      alert(JSON.stringify(result.data))
    };
    fetchData();
  }, []);



  return (<div>
            <br/>
            <br/>
            <br/>
            <br/>
            <h2>Crime Report</h2>
            <br/>
            <br/>
            {JSON.stringify(props.match.params.crime_id)}
            <br/>
            Datetime
            <br/>
            {data.report_datetime}
            <br/>
            <br/>
            Address
            <br/>
            {data.crime_address}
            <br/>
            <br/>
            Type
            <br/>
            {data.crime_type}
            <br/>
            <br/>
            Description
            <br/>
            {data.crime_description}
            </div>)
}

export default withRouter(ViewCrime);