import React from 'react'
import { Typography, Grid } from '@mui/material'
import one from '../assets/center1.png'
import two from '../assets/center2.png'

const Center = () => {
  return (
    <Grid container sx={{mt: {md: 13, lg: 10}}}>
            {/* Text content */}
            <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
                <div>
                    <Typography variant="h3" sx={{ mb: 2, fontSize: {lg: '50px', xs: '30px'}, padding: {lg: '3.5rem'} }}>
                    Connect and <span style={{color: "#DE2461"}}>Engage</span> Your Audience with Precision
                    </Typography>
                </div>
            </Grid>
            {/* Image content */}
            <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px'}}>
                <div style={{width: '40%'}}>
                <img
                    src={two}
                    alt="Hero Image"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                <Typography sx={{fontSize: {lg: '18px', xs: '12px'}, my: 1}}>
                  RESEARCH
                </Typography>
                <Typography sx={{fontSize: {lg: '12px', xs: '8px'}}}>
                We dive deep into understanding your audience's interests and expectations, ensuring your message resonates perfectly.                </Typography>
                </div>
                <div style={{width: '32%'}}>
                <img
                    src={one}
                    alt="Hero Image"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
                <Typography sx={{fontSize: {lg: '18px', xs: '12px'}, my: 1}}>
                  RESEARCH
                </Typography>
                <Typography sx={{fontSize: {lg: '12px', xs: '7px'}}}>
                Our experience with top brands equips us to craft bespoke strategies and solutions for every aspect of your social media presence.                </Typography>
                </div>
            </Grid>
        </Grid>
  )
}

export default Center
