import { useParams } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { fetchData, exerciseOptions, youtubeOptions } from '../utils/fetchData';

//mui
import { Box } from '@mui/material';

//components
import Detail from '../components/Detail';
import ExerciseVideo from '../components/ExerciseVideo';
import SimilarExercises from '../components/SimilarExercises';

function ExerciseDetail() {
	const { id } = useParams();
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exercisesVidoes, setExercisesVidoes] = useState({});
  const [targetMuscleExercises, setTargetMuscle] = useState({});
  const [equipmentExercises, setEquipment] = useState({});
	
  useEffect(() => {
    const fetchedData = async() => {
      const exercisedbUrl = process.env.REACT_APP_EXERCISE_URL;
      const youtubeSearchUrl = process.env.REACT_APP_YOUTUBE_URL;

      const exerciseDetailData = await fetchData(
        `${exercisedbUrl}/exercise/${id}`,
        exerciseOptions
        );
        setExerciseDetail(exerciseDetailData);

      const exercicesVidoesData = await fetchData(
        `${youtubeSearchUrl}/search?query=${exerciseDetailData.name}`,
        youtubeOptions
      )
        setExercisesVidoes(exercicesVidoesData.contents);

      const targetMuscleExercisesData = await fetchData(
        `${exercisedbUrl}/target/${exerciseDetailData.target}`,
        exerciseOptions
      )
        setTargetMuscle(targetMuscleExercisesData);

      const equipmentExercisesData = await fetchData(
        `${exercisedbUrl}/equipment/${exerciseDetailData.equipment}`,
        exerciseOptions
      )
        setEquipment(equipmentExercisesData);
      
     
   }
   fetchedData();
  }, [id])
  
  return (
    <Box>
      <Detail exerciseDetail={exerciseDetail}/>
      <ExerciseVideo  exercisesVidoes={exercisesVidoes} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises}/>
    </Box>
  )
}

export default ExerciseDetail