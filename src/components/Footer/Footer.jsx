import React from 'react'
import Grid from '@mui/material/Grid2';
import { Button, Typography } from '@mui/material';
import Box from '@mui/material/Box';

function Footer() {
    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container sx={{ bgcolor: "#7e22ce", color: "white", py: 3, textAlign:"center" }}>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography className='p-5' variant='h6'>Company</Typography>
                        <div>
                            <Button className='pb-5' variant='h6' >About</Button>
                        </div>
                        <div>
                            <Button className='pb-5' variant='h6' >Blog</Button>
                        </div>
                        <div>
                            <Button className='pb-5' variant='h6' >Press</Button>
                        </div>
                        <div>
                            <Button className='pb-5' variant='h6' >Jobs</Button>
                        </div>
                        <div>
                            <Button className='pb-5' variant='h6' >Partners</Button>
                        </div>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography className='p-5' variant='h6'>Solutions</Typography>
                        <div>
                            <Button className='pb-5' variant='h6' >Marketing</Button>
                        </div>
                        <div>
                            <Button className='pb-5' variant='h6' >Analytics</Button>
                        </div>
                        <div>
                            <Button className='pb-5' variant='h6' >Commerce</Button>
                        </div>
                        <div>
                            <Button className='pb-5' variant='h6' >Insights</Button>
                        </div>
                        <div>
                            <Button className='pb-5' variant='h6' >Support</Button>
                        </div>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography className='p-5' variant='h6'>Documentation</Typography>
                        <div>
                            <Button className='pb-5' variant='h6' >Guides</Button>
                        </div>
                        <div>
                            <Button className='pb-5' variant='h6' >API Status</Button>
                        </div>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                        <Typography className='p-5' variant='h6'>Legal</Typography>
                        <div className=''>
                        <div>
                            <Button className='pb-5' variant='h6' >Claim</Button>
                        </div>
                        <div>
                            <Button className='pb-5' variant='h6' >Privacy</Button>
                        </div>
                        <div>
                            <Button className='pb-5' variant='h6' >Terms</Button>
                        </div>
                        </div>
                    </Grid>
                    <Grid className='pt-20' size={{xs:12}}>
                        <Typography variant='body2' component="p" align='center'>&copy; 2024 My Company. All rights reserved.</Typography>
                    </Grid>
                </Grid>
            </Box>
        </div>
    )
}

export default Footer
