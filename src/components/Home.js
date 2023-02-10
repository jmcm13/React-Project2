import React from 'react';
import { Container } from '@mui/system';
import { Typography } from '@mui/material';
import Hoc from './Hoc';

const Home = () => {
    return (
        <Container color="inherit" maxWidth="xl">
            <Typography variant='h3'>
                HOME
            </Typography>
        </Container>
    );
};

export default Hoc(Home);