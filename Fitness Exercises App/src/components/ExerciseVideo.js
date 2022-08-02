import React from 'react'

//mui 
import { Box, Stack, Typography } from '@mui/material';
import Loader from './Loader';

const ExerciseVideo = ({ exercisesVidoes, name }) => {
  if(!exercisesVidoes.length) return <Loader />
  return (
    <Box sx={{ marginTop: { lg: '200px', xs: '20px' } }} p='20px'>
      <Typography variant="h4" mb="33px">
        Watch <span style={{ color: '#ff2625', textTransform: 'capitalize' }}>{ name }</span> exercise vidoes
      </Typography>
      <Stack justifyContent={'center'} flexWrap="wrap" alignItems={'center'}
        sx={{
          flexDirection: {
            lg: 'row'
          },
          gap: {
            lg: '110px',
            xs: '0'
          }
        }}
      >
        {
          exercisesVidoes?.slice(0, 6).map((item, index) => (
            <Box sx={{
                mt: {
                  lg: '0',
                  xs: '30px'
                },
            }}
            key={index}
            >
              <a
                 
                  className="exercise-video"
                  href={`https://www.youtube.com/watch?v=${item?.video?.videoId}`}
                  target={'_blank'}
                  rel="noreferrer"
                >
                <img src={item?.video?.thumbnails[0].url} alt={item?.video?.title}/>
                <Box>
                  <Typography variant='h6' color={'#000'}>
                    { item?.video?.title }
                  </Typography>
                  <Typography variant='body1' color={'#444'}>
                    { item?.video?.channelName }
                  </Typography>
                </Box>
              </a>
            </Box>
          ))
        }
      </Stack>
    </Box>
  )
}

export default ExerciseVideo