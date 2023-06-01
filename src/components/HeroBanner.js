import React from 'react'
import {Box, Stack, Typography, Button} from '@mui/material';
import HeroBannerImage from '../assets/images/banner3.jpg'

const HeroBanner = () => {
  return (

    <Box sx={{
        mt: {lg:"212px", xs: "70px"},
        ml: {sm:'50px'}
    }} position="relative" p="20px">
        <Typography color="#336699" fontWeight="600" fontSize="30px">
            FitnessX - Your one stop fitness guide
        </Typography>

        <Typography 
            fontWeight="700" 
            sx={{fontSize: {lg: '44px', xs: '40px'}}}
            mb="23px"
            mt="30px"
        >
            Sweat, Smile and Repeat
        </Typography>

        <Typography fontSize="22px" lineHeight='35px' mb={2}>
            Check out the most effective exercises
        </Typography>

        <Button variant='contained' href="#exercises" sx={{padding:'10px'}}>
            Explore Exercises
        </Button>

        <Typography
            fontWeight={600}
            fontSize="100px"
            color='#336699'
            sx={{
                opacity: 0.1,
                display: {lg: 'block', xs: 'none'}
            }}
        >
            Get In, Get Fit!
        </Typography>
        <img src ={HeroBannerImage} alt='banner' className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner