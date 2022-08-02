import React, { useEffect, useState } from 'react';

//mui
import { Typography, Stack, Box, Grid } from '@mui/material';
import Pagination from '@mui/material/Pagination';

import { fetchData, exerciseOptions } from '../utils/fetchData';
import { ExerciseCard } from './ExerciseCard';

const Exercises = ({ setExercises, bodyPart, exercises }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const exercisesPerPage = 9;

    const indexOfLastExercise = currentPage * exercisesPerPage;

    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage

    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

    const paginate = (e, value) => {
        setCurrentPage(value);
        window.scrollTo({ top: 1800, behavior: 'smooth' })
    }

    useEffect(() => {
        const fetchExercisesData = async () => {
            let exercisesData = [];
            if(bodyPart === 'all'){
                exercisesData = await fetchData(
                    process.env.REACT_APP_EXERCISE_URL,
                    exerciseOptions
                );
            }else{
                exercisesData = await fetchData(
                    `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`,
                    exerciseOptions
                );
            }
            console.log(exercisesData)
            setExercises(exercisesData);
        }
        fetchExercisesData();
    }, [bodyPart])

    return ( 
        <Box id = "exercises"
        sx = {{
            mt: {
                lg: '110px'
            }
        }}
        mt = "50px"
        p = "20px" >
        
        <Typography 
            variant = 'h3'
            mb = "46px" 
        >
        Showing Results 
        </Typography> 
        <Stack 
            direction = 'row'
            flexWrap = "wrap"
            justifyContent = { 'center' }
            sx = {{
                    gap: {
                        lg: '110px',
                        xs: '50px'
                    }
                }}
        >            
        {
            currentExercises.map((e, index) => (
                <ExerciseCard  
                    key={index}
                    exercise={e}
                />
                
            ))
        } 
        </Stack> 
        <Stack
            sx={{
                mt: '40px'
            }}
        >
            {
                exercises.length > 9 && (
                    <Pagination 
                        color="standard"
                        shape="rounded"
                        defaultPage={1} 
                        count={Math.ceil(exercises.length / exercisesPerPage)}
                        page={currentPage}
                        onChange={paginate}
                        size="large"
                    />
                )

            }
        </Stack>
        </Box>
    )
}

export default Exercises