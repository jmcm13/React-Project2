import React from 'react';
import { Typography } from '@mui/material';
import PropTypes from "prop-types";

const TaskC = ({ id, firstName, isAlive, arr, strOrNum }) => {

    return (
        <React.Fragment>
            <Typography variant='h3' className='center'>Open the console to see result.</Typography>
            <Typography variant='h3' className='center'>Press f12 then click console tab</Typography>
            <Typography variant='h4' className='center'>Display</Typography>
            <Typography className='center'>Id: {id}</Typography>
            <Typography className='center'>Name: {firstName}</Typography>
            <Typography className='center'>Is Alive: True (Text)</Typography>
            <Typography className='center'>Array: {arr.map((a) => a)}</Typography>
            <Typography className='center'>strOrNum: True(Boolean)</Typography>
            <Typography variant='h4' className='center'>Result</Typography>
            <Typography className='center'>isAlive is invalid prop. It is expecting a type of boolean</Typography>
            <Typography className='center'>strOrNum is invalid prop. It is expecting a type of string or integer</Typography>
        </React.Fragment>
    );
};

// expected data type for props
TaskC.propTypes = {
    id: PropTypes.number,
    firstName: PropTypes.string,
    isAlive: PropTypes.bool,
    arr: PropTypes.arrayOf(PropTypes.number),
    strOrNum: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default TaskC;