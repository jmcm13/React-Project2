import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function BasicCard({ formData }) {
    return (
        <Card variant="outlined" sx={{ minWidth: "auto", float: "left", margin: "10px", backgroundColor: "#E1D9D1" }}>
            <CardContent>
                <Typography variant="body2">
                    Name: {formData.name}
                </Typography>
                <Typography variant="body2">
                    Date of Birth: {formData.birthdate}
                </Typography>
                <Typography variant="body2">
                    Email Address: {formData.email}
                </Typography>
                <Typography variant="body2">
                    Contact Number: {formData.cnumber}
                </Typography>
                <Typography variant="body2">
                    About yourself: <br />{formData.description}
                </Typography>
            </CardContent>
        </Card>
    );
}