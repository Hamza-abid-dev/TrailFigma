import { Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import last1 from '../assets/last1.png'
import React from 'react'

const Last = () => {
  return (
    <Typography sx={{display: "flex"}}>
      <div className="left">
        <Typography sx={{width: 40, backgroundColor: "white", height: 350, borderRadius: '100px', position: 'relative', ml:20, mt:20}}>
        <Typography sx={{display: "flex", backgroundColor: "black", width:250, padding: 2, position: "absolute", left:10, borderRadius: '200px', top: 15, color: '#FBC50B'}}>
        <AllInclusiveIcon sx={{color: '#DE2461', mr:4}}/>
        Meta Marketing
        </Typography>
        <FacebookIcon sx={{ color: "#DE2461", borderRadius: '50%', mt: 15, ml: '7px'}}/>
        <InstagramIcon sx={{ color: "#DE2461", borderRadius: '50%', mt: 5, ml: '7px'}}/>
        <XIcon sx={{ color: "#DE2461", borderRadius: '50%', mt:5, ml: '7px'}}/>
        </Typography>
      </div>
      <div className="center">
        <Typography sx={{ml:30, mt:22}}>
            <img width={'65%'} src={last1} alt="" />
        </Typography>
      </div>
      <div className="right">
        <Typography sx={{mt:32, width: 600, ml: -22}}>
            <Typography variant='h5' sx={{mb: 2, color: '#DE2461'}}>
            Meta Marketing
            </Typography>
            <Typography variant='h6'>
            Leverage the power of Meta's vast virtual marketplace to target and engage with the right audience, expanding your brand's reach across various social networks.
            </Typography>
        </Typography>
      </div>
    </Typography>
  )
}

export default Last
