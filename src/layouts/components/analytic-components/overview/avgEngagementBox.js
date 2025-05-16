// ** MUI Imports
import React, { useState, useEffect } from 'react'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import dynamic from 'next/dynamic'

const AvgEngagementChart = dynamic(() => import('./charts/avgEngagementChart'), { ssr: false })

const AvgEngagementBox = () => {
  const theme = useTheme()

  return (
    <Grid container sx={{ pt: 5 }}>
      <Grid item md={12} xs={12}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'column',
            mb: 2,
            background: `${theme.palette.background.paper}`,
            p: 5
          }}
        >
          <Grid container display='flex' alignItems='center'>
            <Grid item md={6} xs={12}>
              <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>
                Average Engagement <span style={{ fontSize: '13px', fontWeight: '400' }}>(Likes + Comments)</span>
              </Typography>
              <Button sx={{ mt: 2 }} variant='contained' color='primary' size='small'>
                Export PNG
              </Button>
            </Grid>
            <Grid item md={6} xs={12}>
              <Grid container>
                <Grid item md={4} xs={12} sx={{ px: 2 }}>
                  <Box className='box-detail-chart'>
                    <Typography
                      className='text-size-14 font-weight-600 text-right'
                      sx={{ color: `${theme.palette.text.primary}` }}
                    >
                      25,999
                    </Typography>
                    <Typography
                      className='text-size-12 font-weight-400 text-right'
                      sx={{ color: `${theme.palette.text.secondary}` }}
                    >
                      Avg. Engagement
                      <br /> per Post
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={4} xs={12} sx={{ px: 2 }}>
                  <Box className='box-detail-chart'>
                    <Typography
                      className='text-size-14 font-weight-600 text-right'
                      sx={{ color: `${theme.palette.text.primary}` }}
                    >
                      25,999
                    </Typography>
                    <Typography
                      className='text-size-12 font-weight-400 text-right'
                      sx={{ color: `${theme.palette.text.secondary}` }}
                    >
                      Avg. Likes
                      <br /> per Post
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={4} xs={12} sx={{ px: 2 }}>
                  <Box className='box-detail-chart'>
                    <Typography
                      className='text-size-14 font-weight-600 text-right'
                      sx={{ color: `${theme.palette.text.primary}` }}
                    >
                      25,999
                    </Typography>
                    <Typography
                      className='text-size-12 font-weight-400 text-right'
                      sx={{ color: `${theme.palette.text.secondary}` }}
                    >
                      Avg. Comments
                      <br /> per Post
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container sx={{ mt: 8 }}>
            <Grid item md={12} xs={12}>
              <AvgEngagementChart theme={theme} />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export default AvgEngagementBox
