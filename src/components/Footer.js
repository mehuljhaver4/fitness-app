import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo2.jpg';

const Footer = () => (
  <Box mt="80px" bgcolor="#def0fb">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{width: '48px', height: '48px', margin: '0 20px'}} />
    </Stack>
    <Typography color="#336699" fontWeight="600" fontSize="25px" align='center' mt="10px">
            FitnessX
    </Typography>
    <Typography variant="h5" sx={{ fontSize: { lg: '19px', xs: '10px' } }} mt="8px" textAlign="center" pb="40px">"What seems impossible today will one day become your warm-up." -Danielle Carson</Typography>
  </Box>
);

export default Footer;