import React from 'react';
import DataCard from './DataCard';
import { Container, Box, Grid, CssBaseline } from '@mui/material';

const Display = (props) => {
    console.log(typeof props.formData);
    const dataList = props.formData.map((item) => {
        return (
            <Grid item xs={4}>
                <DataCard formData={item} />
            </Grid>
        );
    });

    return (
        <Container maxWidth='md'>
            <CssBaseline />
            <Box
                sx={{
                    mt: 8,
                    mb: 8,
                }}
            >
                <Grid container spacing={2}>
                    {dataList}
                </Grid>
            </Box>
        </Container>
    );
};

export default Display;