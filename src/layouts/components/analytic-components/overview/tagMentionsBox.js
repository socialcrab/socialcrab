// ** MUI Imports
import React, { useState, useEffect } from 'react'
import { Box, Button, Grid, Stack, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import TagMentionsTable from './table/tagMentionsTable'

const TagMentionsBox = () => {
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
              Tag and Mentions
              <br />
              <span
                style={{
                  color: `${theme.palette.text.secondary}`,
                  fontSize: '12px',
                  fontWeight: '400'
                }}
              >
                Brand and Instagrammers often Tagged or Mentioned
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
            <TagMentionsTable theme={theme} />
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default TagMentionsBox
