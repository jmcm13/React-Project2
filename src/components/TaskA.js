import React, { useState } from 'react';
import {
    Grid,
    Button,
    Container,
    Typography,
    Tooltip
} from '@mui/material';

const TaskA = () => {
    const [emp, setEmp] = useState([
        {
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
        },
        {
            "id": 1002,
            "imageUrl": "https://hub.dummyapis.com/Image?text=JB&height=120&width=120",
            "firstName": "Joanie",
            "lastName": "Brakus",
            "email": "Joanie.Brakus@dummyapis.com",
            "contactNumber": "4472691419",
            "age": 67,
            "dob": "03/02/1956",
            "salary": 2.0,
            "address": "Address2"
        },
        {
            "id": 1003,
            "imageUrl": "https://hub.dummyapis.com/Image?text=SG&height=120&width=120",
            "firstName": "Saige",
            "lastName": "Glover",
            "email": "Saige.Glover@dummyapis.com",
            "contactNumber": "4672693733",
            "age": 35,
            "dob": "22/09/1988",
            "salary": 3.0,
            "address": "Address3"
        },
    ]);

    const handleClick = () => {
        //updating array of object
        const empData = [...emp];
        empData[1].age = 25;
        setEmp(empData);
    }

    return (
        <Container sx={{ marginTop: '1rem' }}>
            <Grid container spacing={2}>
                <Grid item xs={10}>
                    <Typography>Task A: Create an array of object and update its second index</Typography>
                </Grid>
                <Grid item xs={2}>
                    <Tooltip title={
                        <p>
                            Clicking this will update the data on the second row.
                            <br />
                            E.g. Joanie Brakus age from 67 to 25
                        </p>
                    }>
                        <Button variant='outlined' className='right' onClick={handleClick}>
                            Update
                        </Button>
                    </Tooltip>
                </Grid>
                {emp.map((det) => {
                    return (
                        <React.Fragment key={det.id}>
                            <Grid item xs={2}>
                                <img
                                    src={det.imageUrl}
                                    alt={det.imageUrl}
                                    loading="lazy"
                                />
                            </Grid>
                            <Grid item xs={5}>
                                <Grid container spacing={2}>
                                    <Grid item xs={4}>
                                        <Typography>Name:</Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography>{det.firstName + ' ' + det.lastName}</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography>Email:</Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography>{det.email}</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography>Contact Number:</Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography>{det.contactNumber}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={5}>
                                <Grid container spacing={2}>
                                    <Grid item xs={4}>
                                        <Typography>Age:</Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography>{det.age}</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography>Date of birth:</Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography>{det.dob}</Typography>
                                    </Grid>
                                    <Grid item xs={4}>
                                        <Typography>Address:</Typography>
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography>{det.address}</Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </React.Fragment>
                    );
                })}
            </Grid>
        </Container>
    );
};

export default TaskA;