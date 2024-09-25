import React from 'react'
import Grid from '@mui/material/Grid2';
import { Avatar, Box, Rating } from '@mui/material';
import { deepPurple } from '@mui/material/colors';

function ProductReviewCard() {
    return (
        <div>
            <Grid container gap={3}>
                <Grid size={1}>
                    <Box>
                        <Avatar className='text-white' sx={{ width: 56, height: 56, bgcolor: deepPurple[500] }}>R</Avatar>
                    </Box>
                </Grid>
                <Grid size={9}>
                    <div className='space-y-2'>
                        <div>
                            <p className='font-semibold text-lg'>Ram</p>
                            <p className='opacity-70'>April 25, 2025</p>
                        </div>
                    </div>

                    <Rating name="read-only" value={3.5} precision={0.5} readOnly />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProductReviewCard
