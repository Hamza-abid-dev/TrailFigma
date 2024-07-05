import { BoltRounded, FormatBold, Gradient, LineWeight, Margin, Opacity } from '@mui/icons-material'
import { Typography } from '@mui/material'
import main from '../assets/main.png'
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
    <Typography sx={{display: "flex", justifyContent: "space-between"}}>
      <div className="left">
        <Typography
        variant='h2'
        sx={{ fontWeight: '900',
        fontFamily: '"Kanit", sans-serif',
        mt: 20, ml: 20 }}>
            Social Media <br />Marketing
        </Typography>
        <Typography variant='h6' sx={{width: 600, ml: 20, mt:5}}>
        Social media marketing is the art of crafting your brand's narrative and spreading it across the globe, creating a magnetic presence that attracts and captivates your audience.
        </Typography>
      </div>
      <Typography sx={{ml: 15, mt: 10}} className="right">
        <img width={"70%"} src={main} alt="" />
      </Typography>
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
    </Typography>
  )
}

export default Main
