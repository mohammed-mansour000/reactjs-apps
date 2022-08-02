import React from 'react'
//mui
import { Typography, Stack, Button } from '@mui/material';

//images
import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
    const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;
    const extraDetail = [
        {
            icon: BodyPartImage,
            name: bodyPart
        },
        {
            icon: TargetImage,
            name: target
        },
        {
            icon: EquipmentImage,
            name: equipment
        },
    ]
  return (
    <Stack
        gap='60px'
        sx={{
            flexDirection: {
                lg: 'row',
            },
            p: '20px',
            alignItems: 'center'
        }}
    >
        <img  src={gifUrl} alt={name} loading="lazy" className='detail-image'/>    
        <Stack
            sx={{
                gap: {
                    lg: '35px',
                    xs: '20px'
                }
            }}
        >
            <Typography variant='h5' fontWeight={'bold'} textTransform="capitalize">
                {name}
            </Typography>
            <Typography>
                Exercises keep you strong.{' '}
                <span style={{ textTransform: 'capitalize' }}>{name}</span> bup is one
                of the best <br /> exercises to target your {target}. It will help you improve your{' '}
                <br /> mood and gain energy.
            </Typography>
            {
                extraDetail.map((item, index) => (
                    <Stack key={index} direction={'row'} gap="24px" alignItems={'center'}>
                        <Button sx={{
                            background: '#fff2db',
                            borderRadius: '50%',
                            padding: '1.5rem'
                        }}>
                            <img src={item.icon} alt={bodyPart}/>
                        </Button>
                        <Typography variant='h5' textTransform={'capitalize'}>
                            {item.name}
                        </Typography>
                    </Stack>
                ))
            }
        </Stack>
    </Stack>
  )
}

export default Detail