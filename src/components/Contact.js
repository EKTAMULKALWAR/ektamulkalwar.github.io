import React from 'react';
import { TextField, Button } from '@mui/material';

const Contact = () => (
  <>
    <h2 className="text-5xl font-bold -mb-3 text-center text-white">Contact</h2>
    <div className="h-3 w-24 bg-red-500 mb-20 mx-auto"></div>
    <form className="bg-black/50 shadow-lg rounded-lg p-8 space-y-4 max-w-xl mx-auto">
      <TextField 
        label="Name" 
        variant="outlined" 
        fullWidth 
        className="mb-4 bg-transparent" 
        InputProps={{ style: { backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#ffffff' } }} 
        InputLabelProps={{ style: { color: '#ffffff' } }} // White color for placeholder text
      />
      <TextField 
        label="Email" 
        variant="outlined" 
        fullWidth 
        className="mb-4 bg-transparent" 
        InputProps={{ style: { backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#ffffff' } }}
        InputLabelProps={{ style: { color: '#ffffff' } }} // White color for placeholder text
      />
      <TextField 
        label="Message" 
        variant="outlined" 
        fullWidth 
        multiline 
        rows={4} 
        className="mb-4 bg-transparent" 
        InputProps={{ style: { backgroundColor: 'rgba(255, 255, 255, 0.1)', color: '#ffffff' } }}
        InputLabelProps={{ style: { color: '#ffffff' } }} // White color for placeholder text
      />
      <Button
        variant="contained"
        fullWidth
        style={{ backgroundColor: '#FF0000', color: '#ffffff', fontWeight: 'bold' }}
        className="hover:bg-red-600 transition"
      >
        Send Message
      </Button>
    </form>
  </>
);

export default Contact;
