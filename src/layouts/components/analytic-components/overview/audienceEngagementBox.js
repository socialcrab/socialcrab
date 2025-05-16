// ** MUI Imports
import React, { useState, useEffect } from 'react'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import CaptionWordsTable from './table/captionWordsTable'
import AudienceEngHeatmap from './heatmap/audienceEngHeatmap'

const AudienceEngagementBox = () => {
  const theme = useTheme()

  return (
    <>
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
            <Typography sx={{ fontSize: '18px', fontWeight: '600', lineHeight: '1.2' }}>
              Audience Engagement
              <br />
              <span
                style={{
                  color: `${theme.palette.text.secondary}`,
                  fontSize: '12px',
                  fontWeight: '400'
                }}
              >
                Engagement Times (Likes + Comments) by Audience
              </span>
            </Typography>
          </Grid>
          <Grid item md={4} xs={12} sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant='contained' color='primary' size='small'>
              Export PNG
            </Button>
          </Grid>
        </Grid>
        <Grid container sx={{ mt: 8, pb: 3 }}>
          <Grid item md={12} xs={12}>
            <AudienceEngHeatmap theme={theme} />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default AudienceEngagementBox
