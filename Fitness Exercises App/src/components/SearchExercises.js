import React, { useState, useEffect } from 'react'

//mui
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ bodyPart, setBodyPart, setExercises }) => {
  const [search, setsearch] = useState("");
  const [bodyParts, setBodyParts] = useState([])

  //async means that the function will get some time
  const handleSearch = async () => {
    if(search){
      // console.log(search);
      const exercisesData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises',
        exerciseOptions
      );
      
      const searchedExercises = exercisesData.filter(
        (item) => item.name.toLowerCase().includes(search)
               || item.target.toLowerCase().includes(search)
               || item.equipment.toLowerCase().includes(search)
               || item.bodyPart.toLowerCase().includes(search),
      );

      setsearch('');
      setExercises(searchedExercises);
    }
  }

  useEffect(() => {
    const fetchedExercises = async() =>{
      const bodyPartsData = await fetchData(
        'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        exerciseOptions
      );
      setBodyParts(['all', ...bodyPartsData]);
    } 
    fetchedExercises();
  }, [])
  
  return (
    <Stack
      alignItems={'center'}
      justifyContent={'center'}
      mt="37px"
    >
      <Typography
        fontWeight={700}
        textAlign="center"
        mb="50px"
        sx={{
          fontSize:{
            lg: '44px',
            xs: '30px'
          }
        }}
      >
        Awesome Exercise You
        <br />
        Should Know
      </Typography>
      <Box
        position={'relative'}
        justifyContent="center"
        mt="72px"
      >
        <TextField 
          placeholder='Search Exercises'
          onChange={(e) => { setsearch(e.target.value.toLowerCase()); }}
          value={search}
          height="76px"
          type={'text'}
          sx={{
            input: {
              fontWeight: '700',
              border: 'none',
              borderRadius: '4px',
             
            },
            width :{
              lg: '800px',
              xs: '300px'
            },
            backgroundColor: '#fff',
            borderRadius: '40px'
          }}
          
        />
        <Button
          className='search-btn'
          sx={{
            color: '#fff',
            bgcolor: '#ff2625',
            textTransform: 'none',
            width: { lg: '175px', xs: '70px' },
            fontSize: { lg: '20px', xs: "14px" },
            height: '56px',
            position: 'absolute',
            right: 0
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box
        sx={{
          position: 'relative',
          with: "100%",
          p: "20px"
        }}
      >
        <HorizontalScrollbar 
          data={bodyParts} 
          bodyPart={bodyPart} 
          setBodyPart={setBodyPart}
          />
      </Box>
    </Stack>
  )
}

export default SearchExercises