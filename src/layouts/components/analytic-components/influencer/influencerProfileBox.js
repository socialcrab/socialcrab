// ** MUI Imports
import React, { useState, useEffect } from 'react'
import { Avatar, Box, Button, Grid, Paper, Stack, Typography } from '@mui/material'
import Icon from 'src/@core/components/icon'
import { useTheme } from '@mui/material/styles'
import { fontSize } from '@mui/system'

const InfluencerProfileBox = () => {
  const theme = useTheme()

  const users = [
    {
      id: 1,
      username: 'gretairm',
      avatar: '/images/avatar1.jpg',
      followers: 80477,
      posts: 1,
      engagement: '0.23%'
    },
    {
      id: 2,
      username: 'razer_patricia',
      avatar: '/images/avatar2.jpg',
      followers: 203221,
      posts: 1,
      engagement: '1.83%'
    },
    {
      id: 3,
      username: 'christianistella',
      avatar: '/images/avatar3.jpg',
      followers: 119586,
      posts: 1,
      engagement: '2.90%'
    },
    {
      id: 4,
      username: 'tengkulaiariska',
      avatar: '/images/avatar4.jpg',
      followers: 108511,
      posts: 1,
      engagement: '2.90%'
    },
    {
      id: 5,
      username: 'neschristy',
      avatar: '/images/avatar5.jpg',
      followers: 92549,
      posts: 1,
      engagement: '3.43%'
    }
  ]

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
              <Typography sx={{ fontSize: '18px', fontWeight: '600' }}>Influencer Profile</Typography>
              <Button sx={{ mt: 2 }} variant='contained' color='primary' size='small'>
                Export PNG
              </Button>
            </Grid>
          </Grid>
          <Grid container sx={{ mt: 5 }}>
            <Grid item md={12} xs={12}>
              <UserProfileBar users={users} />
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  )
}

export const UserProfileBar = users => {
  return (
    <Box
      sx={{
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        '&::-webkit-scrollbar': {
          width: '8px'
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
      }}
    >
      {users.users.map((user, index) => (
        <Paper
          key={index}
          sx={{
            position: 'relative',
            display: 'inline-block',
            width: 250,
            border: '1px solid #eaeaff14',
            borderTop: '0',
            borderBottom: '0',
            borderRadius: '0',
            textAlign: 'center'
          }}
        >
          <Box
            display='flex'
            alignItems='center'
            sx={{
              color: '#DF9F23',
              pl: 1
            }}
          >
            <Icon icon='mdi:crown' />
            <Typography
              sx={{
                fontSize: '12px',
                color: '#DF9F23',
                fontWeight: 'bold',
                padding: '3px 0 0 3px'
              }}
            >
              {index + 1}
            </Typography>
          </Box>
          <Avatar src={user.avatar} sx={{ width: 100, height: 100, mb: 2, margin: 'auto' }} />
          <Typography my={2} variant='subtitle1'>
            @{user.username}
          </Typography>
          <Stack sx={{ background: '#eaeaff0d', p: 3 }}>
            <Box sx={{ py: 1 }} display='flex' justifyContent='space-between'>
              <Box>
                <Typography variant='body2'>Followers</Typography>
              </Box>
              <Box>
                <Typography variant='body2'>{user.followers}</Typography>
              </Box>
            </Box>
            <Box sx={{ py: 1 }} display='flex' justifyContent='space-between'>
              <Box>
                <Typography variant='body2'>Posts</Typography>
              </Box>
              <Box>
                <Typography variant='body2'>{user.posts}</Typography>
              </Box>
            </Box>
            <Box sx={{ py: 1 }} display='flex' justifyContent='space-between'>
              <Box>
                <Typography variant='body2'>Post Engagement</Typography>
              </Box>
              <Box>
                <Typography variant='body2'>{user.engagement}</Typography>
              </Box>
            </Box>
          </Stack>
        </Paper>
      ))}
    </Box>
  )
}

export default InfluencerProfileBox
