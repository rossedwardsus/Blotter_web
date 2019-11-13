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
                  <TableCell>Description</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell align="right">Date</TableCell>
                  <TableCell align="right">Amount($)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                  <TableRow key={"item.description"}>
                    <TableCell component="th" scope="row">
                      {"item.description"}
                    </TableCell>
                    <TableCell align="right">{"item.date"}</TableCell>
                    <TableCell align="right">{"$ + parseFloat(item.amount).toFixed(2)"}</TableCell>
                  </TableRow>
              </TableBody>
            </Table>
            </div>)
}