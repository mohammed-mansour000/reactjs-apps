import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';

import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

//redux
import { useSelector, useDispatch } from 'react-redux';
import { filterSearchedExercises, getData } from '../redux/actions';
import { FETCH_BODY_PART_LIST, FETCH_EXERCISES, FILTER_SEARCHED_EXERCISES } from '../redux/constants';

const SearchExercises = () => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  const dispatch = useDispatch();
  const ex = useSelector((state) => state.exerciseReducer);
  const bPs = useSelector((state) => state.bodypartsReducer);
  // console.log(exerciseList);
  useEffect(() => {
    const fetchExercisesData = async () => {
      // const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      dispatch(getData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions, FETCH_BODY_PART_LIST))
      // setBodyParts(['all', ...bodyPartsData]);
    };

    fetchExercisesData();
  }, []);

  const handleSearch = async () => {
    if (search) {
      // const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
      dispatch(getData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions, FILTER_SEARCHED_EXERCISES, search))
      // const searchedExercises = exercisesData.filter(
      //   (item) => item.name.toLowerCase().includes(search)
      //          || item.target.toLowerCase().includes(search)
      //          || item.equipment.toLowerCase().includes(search)
      //          || item.bodyPart.toLowerCase().includes(search),
      // );

      // dispatch(filterSearchedExercises(search));

      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

      setSearch('');
      // setExercises(searchedExercises);
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          height="76px"
          sx={{ input: { fontWeight: '700', border: 'none', borderRadius: '4px' }, width: { lg: '1170px', xs: '350px' }, backgroundColor: '#fff', borderRadius: '40px' }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button className="search-btn" sx={{ bgcolor: '#FF2625', color: '#fff', textTransform: 'none', width: { lg: '173px', xs: '80px' }, height: '56px', position: 'absolute', right: '0px', fontSize: { lg: '20px', xs: '14px' } }} onClick={handleSearch}>
          Search
        </Button>
      </Box>
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bPs.bodyPartList} bodyParts />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
