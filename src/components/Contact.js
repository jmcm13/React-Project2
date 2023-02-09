import React from 'react';
import { useNavigate } from 'react-router';

const Contact = () => {
    const navigate = useNavigate();
    setTimeout(() => {
        navigate('/employee');
    }, 2000)
    return (
        <div>
            Hello World Contact
        </div>
    );
};

export default Contact;