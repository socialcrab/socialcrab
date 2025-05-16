// ** MUI Imports
import React, { useState, useEffect } from 'react'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import dynamic from 'next/dynamic'

const PiechartTotalPosts = dynamic(() => import('./piechart/piechartTotalPosts'), { ssr: false })

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
            <Grid item md={12} xs={12} display='flex' justifyContent='space-between' alignItems='center'>
              <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>Total Posts</Typography>
              <Button sx={{ mt: 2 }} variant='contained' color='primary' size='small'>
                Export PNG
              </Button>
            </Grid>
          </Grid>
          <Grid container sx={{ mt: 3 }}>
            <Grid item md={12} xs={12}>
              <PiechartTotalPosts />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export default TotalPostsBox
