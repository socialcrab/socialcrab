import React, { useState, useEffect } from 'react'
import { Box, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import { useTheme } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'

const HashtagSummaryInstagram = () => {
  const theme = useTheme()

  const useStyles = makeStyles({
    customScrollbar: {
      '&::-webkit-scrollbar': {
        width: '8px' // Scrollbar width
      },
      '&::-webkit-scrollbar-track': {
        boxShadow: 'inset 0 0 5px grey',
        borderRadius: '10px'
      },
      '&::-webkit-scrollbar-thumb': {
        background: 'rgb(120 126 255 / 70%)',
        borderRadius: '10px'
      },
      '&::-webkit-scrollbar-thumb:hover': {
        background: 'rgb(120 126 255 / 50%)'
      }
    }
  })
  const classes = useStyles()

  return (
    <>
      <Box sx={{ background: `${theme.palette.background.paper}`, borderRadius: 1, p: 4, mb: 2 }}>
        <Stack direction='row' spacing={2} justifyContent='space-between' alignItems='center'>
          <Grid container sx={{ width: '100%' }}>
            <Grid item md={4} xs={12} display='flex' alignItems='center'>
              <Box sx={{ mx: '2em' }}>
                <Typography sx={{ fontWeight: '600', fontSize: '20px', mb: 2 }}>
                  <span>#herbalkurangilemak</span>
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              md={8}
              xs={12}
              display='flex'
              flexDirection='column'
              alignItems='flex-start'
              justifyContent='center'
              sx={{ pl: 2 }}
            >
              <Box display='flex' alignItems='center' justifyContent='space-between' sx={{ my: 3, width: '100%' }}>
                <Box display='flex' flexDirection='column' alignItems='center' sx={{ px: 6, py: 2 }}>
                  <Typography
                    sx={{
                      color: 'text.primary',
                      fontSize: '14px',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      fontWeight: 'bold'
                    }}
                  >
                    Audience
                  </Typography>
                </Box>
                <Box display='flex' flexDirection='column' alignItems='center' sx={{ px: 6, py: 2 }}>
                  <Typography sx={{ fontWeight: '600', fontSize: '14px' }}>25</Typography>
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      fontSize: '12px',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    Contributor
                  </Typography>
                </Box>
                <Box display='flex' flexDirection='column' alignItems='center' sx={{ px: 6, py: 2 }}>
                  <Typography sx={{ fontWeight: '600', fontSize: '14px' }}>1,234,222</Typography>
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      fontSize: '12px',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    Follower Reach
                  </Typography>
                </Box>
                <Box display='flex' flexDirection='column' alignItems='center' sx={{ px: 6, py: 2 }}>
                  <Typography sx={{ fontWeight: '600', fontSize: '14px' }}>1,234,222</Typography>
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      fontSize: '12px',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    Follower Impresion
                  </Typography>
                </Box>
              </Box>
              <Box display='flex' alignItems='center' justifyContent='space-between' sx={{ my: 3, width: '100%' }}>
                <Box display='flex' flexDirection='column' alignItems='center' sx={{ px: 6, py: 2 }}>
                  <Typography
                    sx={{
                      color: 'text.primary',
                      fontSize: '14px',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      fontWeight: 'bold'
                    }}
                  >
                    Engagement
                  </Typography>
                </Box>
                <Box display='flex' flexDirection='column' alignItems='center' sx={{ px: 6, py: 2 }}>
                  <Typography sx={{ fontWeight: '600', fontSize: '14px' }}>3,848</Typography>
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      fontSize: '12px',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    Posts
                  </Typography>
                </Box>
                <Box display='flex' flexDirection='column' alignItems='center' sx={{ px: 6, py: 2 }}>
                  <Typography sx={{ fontWeight: '600', fontSize: '14px' }}>221,742</Typography>
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      fontSize: '12px',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    Likes
                  </Typography>
                </Box>
                <Box display='flex' flexDirection='column' alignItems='center' sx={{ px: 6, py: 2 }}>
                  <Typography sx={{ fontWeight: '600', fontSize: '14px' }}>21,000</Typography>
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      fontSize: '12px',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    Comments
                  </Typography>
                </Box>
                <Box display='flex' flexDirection='column' alignItems='center' sx={{ px: 6, py: 2 }}>
                  <Typography sx={{ fontWeight: '600', fontSize: '14px' }}>21,293,292</Typography>
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      fontSize: '12px',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    Total Video Views
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Stack>
      </Box>
    </>
  )
}

export default HashtagSummaryInstagram
