import React, { useState } from 'react';
import {
    Grid,
    Button,
    Container,
    Typography,
    Tooltip
} from '@mui/material';

const TaskB = () => {
    const [emp, setEmp] = useState({
        "id": 1001,
        "imageUrl": "https://hub.dummyapis.com/Image?text=AC&height=120&width=120",
        "firstName": "Abigale",
        "lastName": "Conroy",
        "email": "Abigale.Conroy@dummyapis.com",
        "contactNumber": "4852092341",
        "age": 33,
        "dob": "24/01/1990",
        "salary": 1.0,
        "address": "Address1"
    });

    const handleClick = () => {
        //updating object
        setEmp({
            ...emp,
            firstName: 'Abegail',
            lastName: 'Cabrera',
            age: '54',
            dob: '14/02/1968',
        })
    }

    return (
        <Container sx={{ marginTop: '1rem' }}>
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    <Typography>Task B: Create an object, update it's 2 property values</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Tooltip title={
                        <p>
                            Clicking this will update details.
                        </p>
                    }>
                        <Button variant='outlined' className='right' onClick={handleClick}>
                            Update
                        </Button>
                    </Tooltip>
                </Grid>
                <Grid item xs={2}>
                    <img
                        src={emp.imageUrl}
                        alt={emp.imageUrl}
                        loading="lazy"
                    />
                </Grid>
                <Grid item xs={5}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Typography>Name:</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography>{emp.firstName + ' ' + emp.lastName}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>Email:</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography>{emp.email}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>Contact Number:</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography>{emp.contactNumber}</Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={5}>
                    <Grid container spacing={2}>
                        <Grid item xs={4}>
                            <Typography>Age:</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography>{emp.age}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>Date of birth:</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography>{emp.dob}</Typography>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography>Address:</Typography>
                        </Grid>
                        <Grid item xs={8}>
                            <Typography>{emp.address}</Typography>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </Container>
    );
};

export default TaskB;