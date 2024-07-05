import { Typography } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import React from 'react'

const a = () => {
  return (
      <Typography sx={{mt:10, width: '95%', ml: 4}}>
      <hr />
        <Typography sx={{ display: 'flex', justifyContent: 'space-between'}}>
      <Typography sx={{fontSize:9, mt:2, color: 'grey'}}>
      ©2023., All Rights Reserved
      </Typography>
      <Typography>
        <FacebookIcon sx={{padding: '3px', backgroundColor: '#DE2461', borderRadius:'50%', mr:1}}/>
        <InstagramIcon sx={{padding: '3px', backgroundColor: '#DE2461', borderRadius:'50%', mr:1}}/>
        <XIcon sx={{padding: '3px', backgroundColor: '#DE2461', borderRadius:'50%', mr:1}}/>
        <AllInclusiveIcon sx={{padding: '3px', backgroundColor: '#DE2461', borderRadius:'50%', mr:1}}/>
      </Typography>
    </Typography>
      </Typography>
  )
}

export default a
