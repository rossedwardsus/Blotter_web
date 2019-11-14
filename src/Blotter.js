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

import { Link } from "react-router-dom";

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

export default function Blotter() {

  const classes = useStyles();
  const [data, setData] = useState([]);

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
            <h2>Blotter</h2>
            <br/>
            <br/>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Crime Datetime</TableCell>
                  <TableCell>Crime Type</TableCell>
                  <TableCell align="right">Report Datetime</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  {data.map((report) => 
                    <TableRow key={"item.description"}>
                      <TableCell align="right"><Link to={"/blotter/" + report.report_id}>{report.crime_datetime}</Link></TableCell>
                      <TableCell component="th" scope="row">
                        {report.crime_type}
                      </TableCell>
                      <TableCell component="th" scope="row">
                        {report.report_datetime}
                      </TableCell>
                    </TableRow>
                  )}
              </TableBody>
            </Table>
            </div>)
}