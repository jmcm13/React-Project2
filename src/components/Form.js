import React, { useState } from 'react';
import { Box, TextField, Grid, Container, Tooltip, Typography, CssBaseline, Button } from '@mui/material';
import moment from 'moment';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { DatePicker } from '@mui/x-date-pickers';


const Form = (props) => {
    // const [propsData, setPropsData] = useState({});

    const dateToday = moment().format('L');
    const [formData, setFormData] = useState({
        name: "",
        dob: dateToday,
        email: "",
        cnumber: "",
        description: "",
        error: {
            nameError: "",
            birthdateError: "",
            emailError: "",
            cnumberError: "",
            descriptionError: "",
        },
    });




    const handleChange = (e) => {

        if (e._isAMomentObject) {
            validateBirthdate(e._i);
        } else if (e.target.id === "name") {
            validateName(e.target.value);
        } else if (e.target.id === "email") {
            validateEmail(e.target.value);
        } else if (e.target.id === "cnumber") {
            validateCnumber(e.target.value);
        } else if (e.target.id === "description") {
            validateDescription(e.target.value);
        }
    };

    const validateName = (name) => {
        let nameError = formData.error.nameError;
        let formValid = formData.formValid;
        let pattern = /^[A-Za-z ]+$/;

        if (name.trim() === "") {
            nameError = "This is required";
            formValid = false;
        } else if (name.trim().length < 3 || !pattern.test(name)) {
            nameError = "This is invalid name";
            formValid = false;
        } else {
            nameError = "";
            formValid = true;
        }

        //spread operator (...)
        setFormData({
            ...formData,
            name,
            formValid,
            error: { ...formData.error, nameError },
        });

        return formValid;
    };

    const validateBirthdate = (dob) => {
        setFormData({
            ...formData,
            dob: dob,
        });
    }

    const validateEmail = (email) => {
        let emailError = formData.error.emailError;
        let formValid = formData.formValid;

        let pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        //regex
        if (!pattern.test(email)) {
            emailError = "Please enter valid email";
            formValid = false;
        } else {
            emailError = "";
            formValid = true;
        }

        setFormData({
            ...formData,
            email,
            formValid,
            error: { ...formData.error, emailError },
        });

        return formValid;
    };

    const validateCnumber = (cnumber) => {
        let cnumberError = formData.error.cnumberError;
        let formValid = formData.formValid;
        let pattern = /^[0-9]+$/;

        if (cnumber.trim() === "") {
            cnumberError = "This is required";
            formValid = false;
        } else if (cnumber.trim().length !== 10 || !pattern.test(cnumber)) {
            cnumberError = "This is invalid contact number";
            formValid = false;
        } else {
            cnumberError = "";
            formValid = true;
        }

        //spread operator (...)
        setFormData({
            ...formData,
            cnumber,
            formValid,
            error: { ...formData.error, cnumberError },
        });

        return formValid;
    };

    const validateDescription = (description) => {
        let descriptionError = formData.error.descriptionError;
        let formValid = formData.formValid;

        if (description.trim() === "") {
            descriptionError = "This is required";
            formValid = false;
        } else {
            descriptionError = "";
            formValid = true;
        }

        //spread operator (...)
        setFormData({
            ...formData,
            description,
            formValid,
            error: { ...formData.error, descriptionError: descriptionError },
        });

        return formValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (
            validateName(formData.name) &&
            validateEmail(formData.email) &&
            validateCnumber(formData.cnumber) &&
            validateDescription(formData.description)
        ) {
            alert("Form is submitted");

            props.getFormData(formData);

            setFormData({
                name: "",
                dob: dateToday,
                email: "",
                cnumber: "",
                description: "",
                error: {
                    nameError: "",
                    birthdateError: "",
                    emailError: "",
                    cnumberError: "",
                    descriptionError: "",
                },
                formValid: false,
            });
        }
    };

    return (
        <Container component='main' maxWidth='md'>
            <CssBaseline />
            <Box
                sx={{
                    mt: 8,
                    mb: 8,
                }}
            >
                <Typography component='h1' variant='h5'>
                    Create employee record
                </Typography>
                <Box component='form' noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="name"
                                label="Name"
                                placeholder="Enter name"
                                value={formData.name}
                                onChange={handleChange}
                                helperText={formData.error.nameError}
                                error={formData.error.nameError ? true : false}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <LocalizationProvider dateAdapter={AdapterMoment}>
                                <DatePicker
                                    label="Date of Birth"
                                    inputFormat="MM/DD/YYYY"
                                    defaultValue={dateToday}
                                    value={formData.dob ? formData.dob : dateToday}
                                    onChange={handleChange}
                                    renderInput={(params) =>
                                        <Tooltip title='Please select using the date picker'>
                                            <TextField {...params}
                                                fullWidth
                                                readOnly
                                            />
                                        </Tooltip>
                                    }
                                    disableFuture
                                />

                            </LocalizationProvider>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email"
                                placeholder="Enter email"
                                value={formData.email}
                                onChange={handleChange}
                                helperText={formData.error.emailError}
                                error={formData.error.emailError ? true : false}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="cnumber"
                                label="Contact Number"
                                placeholder="Enter contact number"
                                value={formData.cnumber}
                                onChange={handleChange}
                                helperText={formData.error.cnumberError}
                                error={formData.error.cnumberError ? true : false}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="description"
                                label="Description"
                                fullWidth
                                multiline
                                rows={4}
                                columns={12}
                                placeholder="Enter description"
                                value={formData.description}
                                onChange={handleChange}
                                helperText={formData.error.descriptionError}
                                error={formData.error.descriptionError ? true : false}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="inherit"
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
};

export default Form;