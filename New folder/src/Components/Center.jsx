import React from 'react'
import { Typography } from '@mui/material'
import one from '../assets/center1.png'
import two from '../assets/center2.png'

const Center = () => {
  return (
    <div>
        <Typography sx={{display: "flex", justifyContent: "space-between"}}>
      <div className="left">
        <Typography
        variant='h3'
        sx={{ fontWeight: '400',
        width: 500,
        fontFamily: '"Kanit", sans-serif',
        mt: 30, ml: 20 }}>
            Connect and <br /><span style={{color: "#DE2461"}}>Engage</span> Your Audience <br/> with Precision
        </Typography>
      </div>
      <div  className="right">
        <Typography sx={{ display: "flex", mt:20, ml:40, gap: 2}}>
        <Typography>
        <img width={"100%"} src={two} alt="" />
        <Typography variant='h6' sx={{fontSize: 17, mb:1}}>
        RESEARCH
        </Typography>
        <Typography variant='h6' sx={{width: 250, fontSize: 12}}>
        We dive deep into understanding your audience's interests and expectations, ensuring your message resonates perfectly.
        </Typography>
        </Typography>
        <Typography>
        <img width={"77%"} src={one} alt="" />
        <Typography variant='h6' sx={{fontSize: 17, mb:1}}>
        RESEARCH
        </Typography>
        <Typography variant='h6' sx={{width: 250, fontSize: 12}}>
        We dive deep into understanding your audience's interests and expectations, ensuring your message resonates perfectly.
        </Typography>
        </Typography>
        </Typography>
      </div>
    </Typography>
    </div>
  )
}

export default Center
