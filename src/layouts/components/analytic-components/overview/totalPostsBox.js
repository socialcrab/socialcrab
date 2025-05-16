// ** MUI Imports
import React, { useState, useEffect } from 'react'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import dynamic from 'next/dynamic'

const TotalPostsChart = dynamic(() => import('./charts/totalPostsChart'), { ssr: false })

const TotalPostsBox = () => {
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
            <Grid item md={8} xs={12}>
              <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>Total Posts</Typography>
              <Button sx={{ mt: 2 }} variant='contained' color='primary' size='small'>
                Export PNG
              </Button>
            </Grid>
            <Grid item md={4} xs={12}>
              <Grid container>
                <Grid item md={4} xs={12} sx={{ px: 2 }}>
                  <Box className='box-detail-chart'>
                    <Typography
                      className='text-size-14 font-weight-600 text-right'
                      sx={{ color: `${theme.palette.text.primary}` }}
                    >
                      0.04
                    </Typography>
                    <Typography
                      className='text-size-12 font-weight-400 text-right'
                      sx={{ color: `${theme.palette.text.secondary}` }}
                    >
                      Avg. Posts
                      <br /> per Day
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={4} xs={12} sx={{ px: 2 }}>
                  <Box className='box-detail-chart'>
                    <Typography
                      className='text-size-14 font-weight-600 text-right'
                      sx={{ color: `${theme.palette.text.primary}` }}
                    >
                      0.28
                    </Typography>
                    <Typography
                      className='text-size-12 font-weight-400 text-right'
                      sx={{ color: `${theme.palette.text.secondary}` }}
                    >
                      Avg. Posts
                      <br /> per Week
                    </Typography>
                  </Box>
                </Grid>
                <Grid item md={4} xs={12} sx={{ px: 2 }}>
                  <Box className='box-detail-chart'>
                    <Typography
                      className='text-size-14 font-weight-600 text-right'
                      sx={{ color: `${theme.palette.text.primary}` }}
                    >
                      1.22
                    </Typography>
                    <Typography
                      className='text-size-12 font-weight-400 text-right'
                      sx={{ color: `${theme.palette.text.secondary}` }}
                    >
                      Avg. Posts
                      <br /> per Month
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Grid container sx={{ mt: 8 }}>
            <Grid item md={12} xs={12}>
              <TotalPostsChart theme={theme} />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export default TotalPostsBox
