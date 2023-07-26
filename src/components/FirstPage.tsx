import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FirstPage: React.FC = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (name && phone && email) {
      // Save the user details in localStorage
      const userDetails = { name, phone, email };
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
      
      // Redirect the user to the second page
      navigate('/second-page');
    } else {
      alert('Please enter all the details before proceeding.');
    }
  };

  return (
    <Box mt={20} mx={'auto'} width={400} >
      <Typography variant="h5">Enter Your Details:</Typography>
      <form>
        <TextField
          label="Name"
          fullWidth
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="Phone Number"
          fullWidth
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <TextField
          label="Email"
          fullWidth
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginTop: '10px' }}>
          Submit
        </Button>
      </form>
    </Box>
  );
};

export default FirstPage;
