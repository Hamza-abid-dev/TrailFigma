import { Typography, Grid } from '@mui/material'
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import last1 from '../assets/last1.png'
import React from 'react'

const Last = () => {
  return (
    <Grid container>
            {/* Text content */}
            <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center' }}>
            <div>
        <Typography sx={{width: {
          lg:40,
          xs: 30
        }, backgroundColor: "white", height: {
          lg:350,
        }, borderRadius: '100px', position: 'relative', ml:{
          lg:20,
          xs:4
        }, mt:{
          lg:20,
          xs:10
        }}}>
        <Typography sx={{display: "flex", backgroundColor: "black", width:250, padding: 2, position: "absolute", left:10, borderRadius: '200px', top: 15, color: '#FBC50B'}}>
        <AllInclusiveIcon sx={{color: '#DE2461', mr:4}}/>
        Meta Marketing
        </Typography>
        <FacebookIcon sx={{ color: "#DE2461", borderRadius: '50%', mt: {
          lg:15,
          xs: 10
        }, ml: {
          lg: '7px',
          xs: '5px'
        }}}/>
        <InstagramIcon sx={{ color: "#DE2461", borderRadius: '50%', mt: {
          lg:5,
          xs: 4
        }, ml: {
          lg:'7px',
          xs: '5px'
        }}}/>
        <XIcon sx={{ color: "#DE2461", borderRadius: '50%', mt:{
          lg:5,
          xs: 4
        }, ml: {
          lg:'7px',
          xs: '5px'
        },
        mb: {
          xs: 3,
        }
        }}/>
        </Typography>
      </div>
            {/* Image content */}
            <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', ml: {lg: '200px', xs: '20px'}, mt: {lg: '140px', xs: '80px'}}}>
                <img
                    src={last1}
                    alt="Hero Image"
                    style={{ maxWidth: '100%', height: 'auto' }}
                />
            </Grid>
            </Grid>
            <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: {lg: '7rem 7rem 0 7rem', xs: '0rem 2rem'}, mt:{lg: 0, xs: 5}}}>
                <div>
                    <Typography variant="h3" sx={{ mb: 2, color: '#DE2461', fontSize: {lg: '40px', xs: '30px'} }}>
                        Meta Marketing
                    </Typography>
                    <Typography variant="body1" sx={{fontSize: {lg: '17px', xs: '14px'}}}>
                    Leverage the power of Meta's vast virtual marketplace to target and engage with the right audience, expanding your brand's reach across various social networks.                    
                    </Typography>
                </div>
            </Grid>
        </Grid>
            
  )
}

export default Last
