import React from 'react';
import { Typography, Link, Box } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{
      backgroundColor: '#f5f5f5',
      minHeight: 300,
      padding: 4,
      marginTop: 4,
    }}>
      <Typography variant="body2" color="textSecondary" align="center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center">
        © {new Date().getFullYear()} Your Company Name
      </Typography>
      <Typography variant="body2" color="textSecondary" align="center" sx={{ marginTop: 2 }}>
        <Link href="#">Privacy Policy</Link> | <Link href="#">Terms of Service</Link>
      </Typography>
    </Box>
  );
};

export default Footer;