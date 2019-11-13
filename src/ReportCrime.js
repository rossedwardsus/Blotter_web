import React, {useState} from 'react';

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

import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';


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

export default function ReportCrime() {
  const classes = useStyles();
  const [selectedDate, setSelectedDate] = useState("")

  const reportCrime = () => {

    alert()

  }

  return (<div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
             Report a Crime
            <br/>
            <FormGroup row={false}>
              <FormControl className={classes.formControl}>
                <TextField
                  id="standard-name"
                  label="Description"
                  value={"description"}
                  onChange={(e) => this.changeDescription(e)}
                  margin="normal"
                />
              </FormControl>
              <br/>
              <FormControl className={classes.formControl}>
                <InputLabel shrink htmlFor="Category">Category</InputLabel>
                <Select
                  native
                  value={"category_name"}
                  onChange={(e: any) => this.handleCategoryNameChange(e)}
                  inputProps={{
                    name: 'Category',
                    id: 'age-simple',
                  }}
                >
                  <option value={10}>Ten</option>
                  <option value={20}>Twenty</option>
                  <option value={30}>Thirty</option>
               </Select>
              </FormControl>
              <br/>
             <FormControl className={classes.formControl}>
               <MuiPickersUtilsProvider utils={DateFnsUtils}>
                 <KeyboardDatePicker
                    disableToolbar
                    variant="inline"
                    format="MM/dd/yyyy"
                    margin="normal"
                    id="date-picker-inline"
                    label="Date picker inline"
                    value={selectedDate}
                    onChange={setSelectedDate}
                    KeyboardButtonProps={{
                      'aria-label': 'change date',
                    }}
                  />
                </MuiPickersUtilsProvider>
              </FormControl>
              <br/>
              <FormControl className={classes.formControl}>
              <TextField
                id="standard-name"
                label="Amount"
                value={"amount"}
                onChange={(e) => this.changeAmount(e)}
                margin="normal"
              />
              </FormControl>
            </FormGroup>
            <br/>
            <Button disabled={false} onClick={() => this.reportCrime()}>Submit Report</Button>
        </div>)
}