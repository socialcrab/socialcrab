import React, { useState, useEffect } from 'react'
import { Box, Grid, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import { useTheme } from '@mui/material/styles'
import { makeStyles } from '@mui/styles'

const ProfileSummaryInstagram = () => {
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
            <Grid item md={1} xs={12} display='flex' alignItems='center'>
              <Image
                alt='Profile Picture'
                src='https://via.placeholder.com/150'
                width={0}
                height={0}
                style={{ width: '100%', height: 'auto' }}
              />
            </Grid>
            <Grid item md={5} xs={12} display='flex' alignItems='center'>
              <Box sx={{ mx: '2em' }}>
                <Typography sx={{ fontWeight: '600', fontSize: '20px', mb: 2 }}>
                  <span>@jeevesindonesia</span>&nbsp;|&nbsp;<span>JEEVES Indonesia</span>
                </Typography>
                <Typography
                  className={classes.customScrollbar}
                  sx={{
                    fontWeight: '400',
                    fontSize: '14px',
                    color: 'text.secondary',
                    maxHeight: '60px',
                    overflow: 'auto'
                  }}
                >
                  Finest Dry Cleaning & Laundry Since 1996 \n🥇 Winner Indonesia Best Practice Laundry Awards 2022\n🥈
                  Winner Global Best Practice Awards 2022.
                </Typography>
              </Box>
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
              display='flex'
              flexDirection='column'
              alignItems='center'
              justifyContent='center'
              sx={{ pl: 2 }}
            >
              <Box display='flex' alignItems='center' justifyContent='space-evenly' sx={{ my: 3 }}>
                <Box display='flex' flexDirection='column' alignItems='center' sx={{ px: 6 }}>
                  <Typography sx={{ fontWeight: '600', fontSize: '14px' }}>0.25%</Typography>
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      fontSize: '12px',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    Engagement Rate
                  </Typography>
                </Box>
                <Box display='flex' flexDirection='column' alignItems='center' sx={{ px: 6 }}>
                  <Typography sx={{ fontWeight: '600', fontSize: '14px' }}>0.25%</Typography>
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      fontSize: '12px',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    Like Rate
                  </Typography>
                </Box>
                <Box display='flex' flexDirection='column' alignItems='center' sx={{ px: 6 }}>
                  <Typography sx={{ fontWeight: '600', fontSize: '14px' }}>0.25%</Typography>
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      fontSize: '12px',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    Comment Rate
                  </Typography>
                </Box>
              </Box>
              <Box display='flex' alignItems='center' justifyContent='space-evenly' sx={{ my: 3 }}>
                <Box display='flex' flexDirection='column' alignItems='center' sx={{ px: 6 }}>
                  <Typography sx={{ fontWeight: '600', fontSize: '14px' }}>12,223,848</Typography>
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      fontSize: '12px',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    Followers
                  </Typography>
                </Box>
                <Box display='flex' flexDirection='column' alignItems='center' sx={{ px: 6 }}>
                  <Typography sx={{ fontWeight: '600', fontSize: '14px' }}>742</Typography>
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      fontSize: '12px',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    Following
                  </Typography>
                </Box>
                <Box display='flex' flexDirection='column' alignItems='center' sx={{ px: 6 }}>
                  <Typography sx={{ fontWeight: '600', fontSize: '14px' }}>1,000</Typography>
                  <Typography
                    sx={{
                      color: 'text.secondary',
                      fontSize: '12px',
                      overflow: 'hidden',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis'
                    }}
                  >
                    Total Posts
                  </Typography>
                </Box>
                <Box display='flex' flexDirection='column' alignItems='center' sx={{ px: 6 }}>
                  <Typography sx={{ fontWeight: '600', fontSize: '14px' }}>1,293,292</Typography>
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

export default ProfileSummaryInstagram
