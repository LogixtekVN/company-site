import React, { useState } from "react";
import styles from "../../styles/jss/components/contactForm";
import { Grid, TextField, Button } from "@material-ui/core";

export default function ContactForm(props) {
  const classes = styles();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const { onSubmit } = props;

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
    setFormData({
      name: "",
      email: "",
      phoneNumber: "",
      message: "",
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  let isValidForm = true;
  for (let key in formData) {
    if (!formData[key]) {
      isValidForm = false;
      break;
    }
  }

  return (
    <form
      noValidate
      autoComplete="off"
      className={classes.contactForm}
      onSubmit={handleSubmit}
    >
      <TextField
        fullWidth
        type="text"
        label="Name"
        variant="outlined"
        size="small"
        margin="normal"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />
      <Grid
        item
        container
        xs={12}
        sm={12}
        md={12}
        className={classes.inlineInputWrapper}
      >
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            fullWidth
            type="email"
            label="Email"
            variant="outlined"
            size="small"
            margin="normal"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <TextField
            fullWidth
            type="text"
            label="Phone Number"
            variant="outlined"
            size="small"
            margin="normal"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </Grid>
      </Grid>
      <TextField
        fullWidth
        multiline
        rows={4}
        label="Message"
        variant="outlined"
        size="small"
        margin="normal"
        name="message"
        value={formData.message}
        onChange={handleChange}
      />
      <Button
        variant="contained"
        color="secondary"
        type="submit"
        disabled={!isValidForm}
        className={classes.submitButton}
      >
        Send message
      </Button>
    </form>
  );
}
