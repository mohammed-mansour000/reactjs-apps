import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';

import Exercises from '../components/Exercises';
import SearchExercises from '../components/SearchExercises';
import HeroBanner from '../components/HeroBanner';

import { useSelector, useDispatch } from 'react-redux';
import { getData } from '../redux/actions';
import { FETCH_EXERCISES } from '../redux/constants';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <Box>
      <HeroBanner />
      <SearchExercises />
      <Exercises />
    </Box>
  );
};

export default Home;
