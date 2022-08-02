import React from 'react'
//mui
import { Box, Stack, Typography } from '@mui/material';

import logo from '../assets/images/Logo-1.png';
const Footer = () => {
  return (
    <Box mt="80px" bgcolor={'#fff3f4'}>
      <Stack gap="40px" alignItems={'center'} justifyContent={'center'} px="40px" pt="24px">
        <img src={logo} alt="logo" width={'200px'} height={'40px'}/>
        <Typography variant='h5' mt="20px" pb="40px">
          Made with ❤️ by JavaScript Mastery
        </Typography>
      </Stack>
    </Box>
  )
}

export default Footer