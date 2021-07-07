import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

import Button from "../theme/Button";

//1. create a useForm function.
//2. Identify all of the stateful logic in the component.
//3. Return the needed pieces of state/functions.
//4. Use useForm instead of hardcoded stateful logic.

const useForm = (initialState) => {
  const [values, setValues] = useState(initialState);

  const handleChanges = e => {
    setValues(e.target.value);
  };

  const clearForm = e => {
    e.preventDefault();
    setValues(initialState);
  };

  return ([values, handleChanges, clearForm]);
}

const initialState = {
  firstName: "warren",
  lastName: "longmire"
}

export default function SignupForm() {
  const classes = useStyles();
  const [values, handleChanges, clearForm] = useForm(initialState);

  console.log(values);

  const handleSubmit = e => {
    e.preventDefault();
    alert(values.firstName + ' ' + values.lastName);
  };

  return (
    <div p={2} className="form">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Add New Client</legend>
          <TextField
            id="outlined-name"
            label="First Name"
            className={classes.textField}
            name="firstName"
            value={values.firstName}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
          <TextField
            id="outlined-name"
            label="Last Name"
            className={classes.textField}
            name="lasttName"
            value={values.lastName}
            onChange={handleChanges}
            margin="normal"
            variant="outlined"
          />
          <div className="flexer">
            <Button color="red" onClick={clearForm}>
              Clear
            </Button>
            <Button color="blue" type="submit">
              Submit
            </Button>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}));