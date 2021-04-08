import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import { makeStyles } from '@material-ui/core/styles';
import './App.css'
import React from 'react';
import { Paper } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';



const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 260,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 260,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
    }
  },

}));


export default function MaterialUIPickers() {
  const classes = useStyles();
  const [value, setValue] = React.useState();

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const help = () =>{
    alert("Your form is submitted.");
  };
  return (
    <Paper className="P1">
    <header>
      PythonMate - Shift Form
    </header>
    <form>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justify="space-around">
        
        <TextField
          id="date"
          label="Start Date"
          type="date"
          defaultValue=""
          className={classes.textField}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
        id="time"
        label="Arrival Time"
        type="time"
        defaultValue=""
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 0,
        }}
      />
        <TextField
        id="time"
        label="Departure Time"
        type="time"
        defaultValue=""
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 0,
        }}
      />
        <div className="I1">
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="grouped-native-select">Repetition</InputLabel>
          <Select native defaultValue="Select" id="grouped-native-select">
            <option aria-label="None" value="" />
              <option value="None">None</option>
              <option value="Daily">Daily</option>
              <option value="Weekly">Weekly</option>
          </Select>
        </FormControl>
        </div>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="grouped-native-select">Shifts</InputLabel>
          <Select native defaultValue="Select" id="grouped-native-select">
            <option aria-label="" value="" />
              <option value="Morning Shift - 5am to 9am">Morning Shift - 5am to 9am</option>
          </Select>
        </FormControl>
        <div className="I2">
         <FormControl component="fieldset">
          <FormLabel component="legend">Weekdays</FormLabel>
          <RadioGroup row aria-label="position" name="position" defaultValue="Sunday" value={value} onChange={handleChange}>
            <FormControlLabel
              value="Sunday"
              control={<Radio color="primary" />}
              label="0"
              labelPlacement="top"
            />
            <FormControlLabel
              value="Monday"
              control={<Radio color="primary" />}
              label="1"
              labelPlacement="top"
            />
            <FormControlLabel
              value="Tuesday"
              control={<Radio color="primary" />}
              label="2"
              labelPlacement="top"
            />
            <FormControlLabel 
              value="Wednesday" 
              control={<Radio color="primary" />} 
              label="3"
              labelPlacement="top" 
            />
            <FormControlLabel 
              value="Thursaday" 
              control={<Radio color="primary" />} 
              label="4"
              labelPlacement="top" 
            />
            <FormControlLabel 
              value="Friday" 
              control={<Radio color="primary" />} 
              label="5"
              labelPlacement="top" 
            />
            <FormControlLabel 
              value="Saturday" 
              control={<Radio color="primary" />} 
              label="6"
              labelPlacement="top" 
            />
          </RadioGroup>
        </FormControl>
        </div>
        <Button variant="contained"  type="submit" onClick={help}>
          Submit
        </Button>
        
      </Grid>
    </MuiPickersUtilsProvider>
    </form>
    </Paper>
  );
}

MaterialUIPickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

MaterialUIPickers.propTypes = {
  classes: PropTypes.object.isRequired,
};