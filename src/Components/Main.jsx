import { BoltRounded, FormatBold, Gradient, LineWeight, Margin, Opacity } from '@mui/icons-material'
import { Typography, Grid } from '@mui/material'
import main from '../assets/main.png'
import './main.css'
import React from 'react'

const Main = () => {
    const divStyle = {
    width: '7px',
    height: '7px',
    borderRadius: '50%',
    backgroundColor: '#89CFF0',
    filter: 'blur(2px)',
    opacity: 0.5,
    // Apply the blur filter here
  };
  const divStyle1 = {
    width: '7px',
    height: '7px',
    borderRadius: '50%',
    backgroundColor: 'yellow',
    filter: 'blur(2px)',
    opacity: 0.5,
    // Apply the blur filter here
  };
  const divStyle2 = {
    width: '7px',
    height: '7px',
    borderRadius: '50%',
    backgroundColor: 'red',
    filter: 'blur(2px)',
    opacity: 0.5,
    // Apply the blur filter here
  };
  
  return (
    <Grid container>
    {/* Text content */}
    <Grid item xs={12} md={6} sm={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: {lg: '7rem', xs: '2rem'} }}>
        <div className='borderdesign'>
        <div className="borderdesign1"></div>
      <div className="borderdesign2"></div>
      <div className="borderdesign3"></div>
      <div className="borderdesign4"></div>
            <Typography variant="h3" sx={{ mb: 2, fontFamily: '"Kanit", sans-serif', fontWeight: 900, fontSize:{lg: '45px', xs: '20px'} }}>
            Social Media Marketing
            </Typography>
            <Typography variant="body1" sx={{fontSize: {lg: '20px', xs: '10px'}}}>
            Social media marketing is the art of crafting your brand's narrative and spreading it across the globe, creating a magnetic presence that attracts and captivates your audience.
            </Typography>
        </div>
    </Grid>
    {/* Image content */}
    <Grid item xs={12} md={6} sm={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img
            src={main}
            alt="Hero Image"
            style={{ maxWidth: '55%', height: 'auto' }}
        />
    </Grid>
    <div style={{position: 'absolute', marginLeft: '55%'}}>
        <div style={divStyle}></div>
      </div>
      <div style={{position: 'absolute', marginLeft: '40%', marginTop: '35%'}}>
        <div style={divStyle}></div>
      </div>
      <div style={{position: 'absolute', marginLeft: '85%', marginTop: '40%'}}>
        <div style={divStyle}></div>
      </div>
      <div style={{position: 'absolute', marginLeft: '53%', marginTop: '55%'}}>
        <div style={divStyle1}></div>
      </div>
      <div style={{position: 'absolute', marginLeft: '35%', marginTop: '73%'}}>
        <div style={divStyle2}></div>
      </div>
      <div style={{position: 'absolute', marginLeft: '85%', marginTop: '80%'}}>
        <div style={divStyle2}></div>
      </div>
      <div style={{position: 'absolute', marginLeft: '80%', marginTop: '100%'}}>
        <div style={divStyle}></div>
      </div>
      <div style={{position: 'absolute', marginLeft: '25%', marginTop: '97%'}}>
        <div style={divStyle1}></div>
      </div>
</Grid>
    
  )
}

export default Main
