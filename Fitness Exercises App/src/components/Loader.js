import React from 'react'

import { ThreeDots } from 'react-loader-spinner';
//mui
import { Stack } from '@mui/material';

const Loader = () => {
  return (
    <Stack direction={'row'} alignItems={'center'} justifyContent={'center'} width="100%">
        <ThreeDots  color="#FF2625" />
    </Stack>
  )
}

export default Loader