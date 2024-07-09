import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" p={2} bgcolor="text.secondary" color="white" textAlign="center">
      <Typography variant="body1">
        © 2024 Fiverr Clone. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
