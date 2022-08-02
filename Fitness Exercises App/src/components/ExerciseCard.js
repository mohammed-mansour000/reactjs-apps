import { Button, Stack, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom'

export const ExerciseCard = ({ exercise }) => {
    // console.log(exercise);
  return (
    <Link to={`/exercise/${exercise.id}`} className="exercise-card">
        <img src={exercise.gifUrl} alt={exercise.name} loading="lazy"/>
        <Stack
            direction={'row'}
        >
            <Button
                sx={{
                    ml: "21px",
                    color: '#fff',
                    background: '#ffa9a9',
                    fontSize: '14px',
                    borderRadius: '20px',
                    textTransform: 'capitalize'
                }}
            >
                {exercise.bodyPart}
            </Button>
            <Button
                sx={{
                    ml: "21px",
                    color: '#fff',
                    background: '#fcc757',
                    fontSize: '14px',
                    borderRadius: '20px',
                    textTransform: 'capitalize'
                }}
            >
                {exercise.target}
            </Button>
        </Stack>
        <Typography variant='' color='#000' fontWeight={'bold'} ml="21px" pb="10px" fontSize='22px' textTransform={'capitalize'} mt="11px">
            {exercise.name}
        </Typography>
    </Link>
  )
}
