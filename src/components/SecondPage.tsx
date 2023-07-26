import React, { useEffect } from 'react';
import { Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Tablecomp1 from './Tablecomp1';

const SecondPage: React.FC = () => {
  const navigate = useNavigate();
  const userDetails = JSON.parse(localStorage.getItem('userDetails') || '{}');

  useEffect(() => {
    if (!userDetails.name || !userDetails.phone || !userDetails.email) {
      navigate('/', { state: { message: 'Please enter your details before accessing this page.' } });
    }
  }, [navigate, userDetails]);

  return (

    <>
    <Box   mt={2} mx={'auto'} width={400} >
      <Typography variant="h5">Welcome to the Second Page!</Typography>
      <Typography variant="body1">
        Your name: {userDetails.name}
        <br />
        Your phone number: {userDetails.phone}
        <br />
        Your email: {userDetails.email}
      </Typography>

    </Box>
      <Tablecomp1></Tablecomp1>
    </>
  );
};

export default SecondPage;
