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
  DateTimePicker
} from '@material-ui/pickers';

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

function ReportCrime(props) {
  const classes = useStyles();
  const [crimeDateTime, setCrimeDateTime] = useState(new Date())
  const [crime_type, setCategoryType] = useState("")
  const [crime_description, setCrimeDescription] = useState("")
  const [crime_address, setCrimeAddress] = useState("")

  const reportCrime = () => {

    //alert(crimeDateTime.toISOString());
    alert(crimeDateTime.getUTCFullYear() + "-" + (crimeDateTime.getUTCMonth()+1) + "-" + crimeDateTime.getUTCDate() + " " + crimeDateTime.getUTCHours() + ":" + crimeDateTime.getUTCMinutes() + ":" + crimeDateTime.getUTCSeconds());

    //var datetime = "";


    axios.post('https://police-api.herokuapp.com/api/blotter/', {
    //axios.post('http://127.0.0.1:8001/api/blotter/', {
      crime_type: crime_type,
      crime_description: crime_description,
      crim_address: crime_address,
      crime_datetime: crimeDateTime.getUTCFullYear() + "-" + (crimeDateTime.getUTCMonth()+1) + "-" + crimeDateTime.getUTCDate() + " " + crimeDateTime.getUTCHours() + ":" + crimeDateTime.getUTCMinutes() + ":" + crimeDateTime.getUTCSeconds()
    })
    .then(function (response) {
      console.log(response);
      alert(JSON.stringify(response))

      //props.history.push("/blotter");
    })
    .catch(function (error) {
      console.log(error);
      alert(error);
    });

    /*axios({
      method: 'post',
      url: 'http://127.0.0.1:8001/api/blotter/',
      data: {
        crime_type: crime_type,
        crime_description: crime_description,
        crimeDate: crimeDate
      }
    });*/
  }

  const handleDateTimeChange = date => {
    alert(date);

    setCrimeDateTime(date);
  };

  return (<div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
             Report a Crime
            <br/>
            <FormGroup row={false}>
              <br/>
              <FormControl className={classes.formControl}>
                <InputLabel shrink htmlFor="Category">Category</InputLabel>
                <Select
                  native
                  value={crime_type}
                  onChange={(e: any) => setCategoryType(e.target.value)}
                  inputProps={{
                    name: 'Category',
                    id: 'age-simple',
                  }}
                >
                  <option value={""}></option>
                  <option value={"robbery"}>Robbery</option>
                  <option value={"drug_deal"}>Drug Deal</option>
                  <option value={"assault"}>Assault</option>
               </Select>
              </FormControl>
              <br/>
             <FormControl className={classes.formControl}>
               <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DateTimePicker
                  label="DateTimePicker"
                  inputVariant="outlined"
                  value={crimeDateTime}
                  onChange={handleDateTimeChange}
                />
              </MuiPickersUtilsProvider>
            </FormControl>
            <br/>
            <FormControl className={classes.formControl}>
              <TextField
                multiline
                id="standard-name"
                label="Address"
                value={crime_address}
                onChange={(e) => setCrimeAddress(e.target.value)}
                margin="normal"
              />
            </FormControl>
            <FormControl className={classes.formControl}>
              <TextField
                multiline
                id="standard-name"
                label="Description"
                value={crime_description}
                onChange={(e) => setCrimeDescription(e.target.value)}
                margin="normal"
              />
            </FormControl>
          </FormGroup>
          <br/>
          <Button disabled={false} onClick={() => reportCrime()}>Submit Report</Button>
        </div>)
}

export default withRouter(ReportCrime);