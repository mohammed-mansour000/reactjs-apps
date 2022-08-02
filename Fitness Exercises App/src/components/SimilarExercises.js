import React from 'react'
//comp
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';

//mui
import { Box, Stack, Typography } from '@mui/material';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {
  console.log(targetMuscleExercises, equipmentExercises);
  return (
    <Box sx={{
      mt: {
        lg: '100px',
        xs: '0'
      }
    }}>
      <Typography variant='h3' mb={5}>
        Exercises that target the same muscle group
      </Typography>
      <Stack direction={'row'} sx={{p: '2', position: 'relative'}}>
        {
          targetMuscleExercises.length ? 
          <HorizontalScrollbar data={targetMuscleExercises} isBodyParts={false}/>
          : <Loader />
        }
      </Stack>

      <Typography variant='h3' mb={5}>
        Exercises that use the same equipment
      </Typography>
      <Stack direction={'row'} sx={{p: '2', position: 'relative'}}>
        {
          equipmentExercises.length ? 
          <HorizontalScrollbar data={equipmentExercises} isBodyParts={false}/>
          : <Loader />
        }
      </Stack>
    </Box>
  )
}

export default SimilarExercises