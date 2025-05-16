// ** MUI Imports
import React, { useState, useEffect } from 'react'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const InfluencerSummaryBox = () => {
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
              <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>
                Identify Potential Influencers & Contributors
              </Typography>
              <Button sx={{ mt: 2 }} variant='contained' color='primary' size='small'>
                Export PNG
              </Button>
            </Grid>
            <Grid item md={12} xs={12} sx={{ mt: 5 }}>
              <Box display='flex' alignItems='center' justifyContent='space-between' sx={{ my: 3, width: '100%' }}>
                <Box display='flex' flexDirection='column' alignItems='flex-start' sx={{ py: 2 }}>
                  <Typography
                    sx={{
                      color: 'text.primary',
                      fontSize: '14px',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      fontWeight: '500'
                    }}
                  >
                    Participating Instagrammers
                  </Typography>
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      fontSize: '12px',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    Follower Count
                  </Typography>
                </Box>
                <Box display='flex' flexDirection='column' alignItems='center' sx={{ py: 2 }}>
                  <Typography sx={{ fontWeight: '600', fontSize: '14px' }}>6</Typography>
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      fontSize: '12px',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    Less than 5K
                  </Typography>
                </Box>
                <Box display='flex' flexDirection='column' alignItems='center' sx={{ py: 2 }}>
                  <Typography sx={{ fontWeight: '600', fontSize: '14px' }}>0</Typography>
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      fontSize: '12px',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    5K - 10K
                  </Typography>
                </Box>
                <Box display='flex' flexDirection='column' alignItems='center' sx={{ py: 2 }}>
                  <Typography sx={{ fontWeight: '600', fontSize: '14px' }}>7</Typography>
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      fontSize: '12px',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    10K - 100K
                  </Typography>
                </Box>
                <Box display='flex' flexDirection='column' alignItems='center' sx={{ py: 2 }}>
                  <Typography sx={{ fontWeight: '600', fontSize: '14px' }}>2</Typography>
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      fontSize: '12px',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    100K - 500K
                  </Typography>
                </Box>
                <Box display='flex' flexDirection='column' alignItems='center' sx={{ py: 2 }}>
                  <Typography sx={{ fontWeight: '600', fontSize: '14px' }}>0</Typography>
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      fontSize: '12px',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    500K - 1000K+
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export default InfluencerSummaryBox
