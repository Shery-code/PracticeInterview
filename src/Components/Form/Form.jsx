import React, { useState } from "react";
import { nanoid } from "nanoid";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

export default function Form() {
  const [data, setData] = useState([]);
  const classes = useStyles();
  const [addFormData, setAddFormData] = useState({
    firstname: "",
    lastname: "",
  });

  const handleAddFormChange = (event) => {
    event.preventDefault();
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };
  // const handleAddFormSubmit = (event) => {
  //   event.preventDefault();

  //   const newName = {
  //     id: nanoid(),
  //     firstname: addFormData.firstname,
  //     lastname: addFormData.lastname,
  //   };

  //   const newNames = [...names, newName];
  //   setName(newNames);
  // };
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <Button
          variant="contained"
          color="primary"
          onClick={() =>
            setData([...data, <TextField id="standard-basic" label="Name" />])
          }
        >
          Add Field
        </Button>
        <br />
        {data?.map((item) => item)}

        <br />
      </form>

      <h2>Add | Edit Data</h2>
      <form>
        <input
          type="text"
          name="firstname"
          required="required"
          placeholder="Enter First Name"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="lastname"
          required="required"
          placeholder="Enter Last Name"
          onChange={handleAddFormChange}
        />
        <button type="submit">Add Data</button>
      </form>
    </div>
  );
}
