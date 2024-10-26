import React, { useState } from 'react';
import { 
  TextField, 
  Button, 
  MenuItem, 
  FormControl, 
  FormControlLabel, 
  Radio, 
  RadioGroup, 
  InputLabel, 
  Select, 
  Container, 
  Box 
} from '@mui/material';

function RegistrationForm() {
  // Initialize the state to hold form data
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    mobile: '',
    email: '',
    gender: '',
    dob: '',
    course: ''
  });

  // Handle any input changes and update the form data state
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page reload on form submit
    console.log("Submitted Form Data:", formData); // Output form data to console
  };

  // Reset form data to the initial empty values
  const handleReset = () => {
    setFormData({
      name: '',
      address: '',
      mobile: '',
      email: '',
      gender: '',
      dob: '',
      course: ''
    });
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        {/* Title of the Form */}
        <h1 align="center">Higher Secondary Admission</h1>

        {/* Form starts here */}
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <TextField
            label="Name"
            name="name"
            fullWidth
            margin="normal"
            value={formData.name}
            onChange={handleChange}
            required
          />

          {/* Address Field */}
          <TextField
            label="Address"
            name="address"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={formData.address}
            onChange={handleChange}
            required
          />

          {/* Mobile Field */}
          <TextField
            label="Mobile"
            name="mobile"
            fullWidth
            margin="normal"
            value={formData.mobile}
            onChange={handleChange}
            required
            inputProps={{ maxLength: 10 }} // Limit to 10 characters
          />

          {/* Email Field */}
          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleChange}
            required
          />
       
          {/* Gender Selection with Radio Buttons */}
          <FormControl component="fieldset" margin="normal">
            <InputLabel className='p-1'>Gender</InputLabel>
            <RadioGroup
              row
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className='p-5'
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="other" control={<Radio />} label="Other" />
            </RadioGroup>
          </FormControl>

          {/* Date of Birth Field */}
          <TextField
            label="Date of Birth"
            name="dob"
            type="date"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true, // Shrinks the label to make date selection clearer
            }}
            value={formData.dob}
            onChange={handleChange}
            required
          />

          {/* Course Selection Dropdown */}
          <FormControl fullWidth margin="normal">
            <InputLabel>Course</InputLabel>
            <Select
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <MenuItem value="Biology">Biology</MenuItem>
              <MenuItem value="Computer Science">Computer Science</MenuItem>
              <MenuItem value="Commerce">Commerce</MenuItem>
              <MenuItem value="Humanities">Humanities</MenuItem>
            </Select>
          </FormControl>

          {/* Buttons for Register and Cancel */}
          <Box display="flex" justifyContent="space-between" mt={2}>
            <Button
              type="submit" // Specifies the button to submit form data
              variant="contained"
              color="primary"
            >
              Register
            </Button>
            <Button
              variant="outlined"
              color="secondary"
              onClick={handleReset} // Calls handleReset to clear the form
            >
              Cancel
            </Button>
          </Box>
        </form>
      </Box>
    </Container>
  );
}

export default RegistrationForm;
