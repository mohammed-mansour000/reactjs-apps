import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../redux/actions';
import { FETCH_EXERCISES } from '../redux/constants';

const Exercises = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(6);

  const dispatch = useDispatch();
  const { exerciseList } = useSelector((state) => state.exerciseReducer);
  const bd = useSelector((state) => state.bodypartsReducer.bodyPart);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bd === 'all') {
        // exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
        dispatch(getData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions, FETCH_EXERCISES))
      } else {
        // exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bd}`, exerciseOptions);
        dispatch(getData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bd}`, exerciseOptions, FETCH_EXERCISES))
      }

      // setExercises(exercisesData);
    };

    fetchExercisesData();
  }, [bd]);

  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exerciseList?.slice(indexOfFirstExercise, indexOfLastExercise);

  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  if (!currentExercises.length) return <Loader />;

  return (
    <Box id="exercises" sx={{ mt: { lg: '109px' } }} mt="50px" p="20px">
      <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">Showing Results</Typography>
      <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
        {currentExercises?.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: '114px', xs: '70px' } }} alignItems="center">
        {exerciseList?.length > 9 && (
          <Pagination
            color="standard"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exerciseList?.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;

