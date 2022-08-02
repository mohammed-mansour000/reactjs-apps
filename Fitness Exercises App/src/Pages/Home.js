import { Box } from '@mui/material'
import React, { useState, useEffect } from 'react'
import Exercises from '../components/Exercises'
import HeroBanner from '../components/HeroBanner'
import SearchExercises from '../components/SearchExercises'

function Home() {
  const [exercises, setExercises] = useState([])
  const [bodyPart, setBodyPart] = useState('all')

  console.log(bodyPart)
  return (
    <Box>
      <HeroBanner />
      <SearchExercises 
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises 
         setExercises={setExercises}
         bodyPart={bodyPart}
         exercises={exercises}
      />
    </Box>
  )
}

export default Home