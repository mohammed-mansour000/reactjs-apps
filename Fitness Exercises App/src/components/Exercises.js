import React, {useEffect, useState} from 'react';
import { Pagination, Typography, Stack, Box } from '@mui/material';
import { fetchData, exerciseOptions } from '../utils/fetchData';

const Exercises = ({ setExercises, bodyPart, exercises }) => {
  return (
   <Box 
    id="exercises"
    sx={{
      mt: {
        lg: '110px'
      }
    }}
    mt="50px"
    p={20}
   >
    <Typography variant='h3' mb="46px">
      Showing Results  
    </Typography>
    <Stack
      direction='row'
      flexWrap="wrap"
      justifyContent={'center'}
      sx={{
        gap: {
          lg: '110px',
          xs: '50px'
        }
      }}
    >
      {
        exercises.map((e, index) => (
          <p>e.name</p>
        ))
      }
    </Stack>
   </Box>
  )
}

export default Exercises