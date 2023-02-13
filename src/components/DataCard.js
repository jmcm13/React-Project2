import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function DataCard({ formData }) {

    const card = (
        <React.Fragment>
            <CardContent>
                <Typography variant="h5" component="div">
                    Employee:
                </Typography>
                <Typography variant="body2" sx={{ fontSize: 14 }}>
                    {formData.name}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: 14 }}>
                    {formData.dob}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: 14 }}>
                    {formData.email}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: 14 }}>
                    {formData.cnumber}
                </Typography>
                <Typography variant="body2" sx={{ fontSize: 14 }}>
                    {formData.description}
                </Typography>
            </CardContent>
        </React.Fragment>
    );
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    );
}