import React, { useState, useEffect } from 'react'
import { Box, Button, Grid, Typography } from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import RefreshIcon from '@mui/icons-material/Refresh'
import DateRangePicker from 'mui-daterange-picker'
import { useTheme } from '@mui/material/styles'
import { hexToRGBA } from 'src/@core/utils/hex-to-rgba'
import Image from 'next/image'

export const StatusIndicator = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 1,
        background: `${theme.palette.background.paper}`,
        p: 4,
        borderRadius: 1
      }}
    >
      <Typography variant='body1'>Done Analyzing</Typography>
      <CheckCircleIcon sx={{ color: 'success.main' }} />
    </Box>
  )
}

export const ExportButton = () => {
  return (
    <Button size='small' variant='outlined' endIcon={<ArrowDropDownIcon />}>
      <Typography sx={{ fontSize: '14px' }}>Export</Typography>
    </Button>
  )
}

export const UpdateButton = () => {
  return (
    <Button size='small' variant='contained' color='primary' endIcon={<RefreshIcon />}>
      <Typography sx={{ fontSize: '14px' }}>Check for Update</Typography>
    </Button>
  )
}

export const DateRangeFilter = () => {
  const [open, setOpen] = useState(false)
  const [dates, setDates] = useState({})
  const toggle = () => setOpen(!open)

  return (
    <div>
      <Button onClick={toggle}>Pick date range</Button>
      {/* <DateRangePicker open={open} toggle={toggle} onChange={range => setDates(range)} /> */}
    </div>
  )
}

const FilteringComponent = ({ data }) => {
  const [isFixed, setIsFixed] = useState(false)
  const theme = useTheme()

  // Effect to add or remove the fixed position based on the scroll position
  useEffect(() => {
    const handleScroll = () => {
      const setFixed = window.scrollY > document.querySelector('#filtering-component').getBoundingClientRect().bottom
      setIsFixed(setFixed)
    }

    // Register the scroll event listener
    window.addEventListener('scroll', handleScroll)

    // Initial check
    handleScroll()

    // Cleanup the event listener
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const fixedStyle = {
    position: 'sticky',
    top: 0,
    right: 0,
    zIndex: 1100,
    backgroundColor: hexToRGBA(theme.palette.background.paper, 1),
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }
  return (
    <Box
      id='filtering-component'
      sx={{
        ...{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 2,
          [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center'
          },
          [theme.breakpoints.up('lg')]: {
            flexDirection: 'row'
          }
        },
        ...(isFixed ? fixedStyle : {})
      }}
    >
      <Box sx={{ display: 'flex', gap: 2 }}>
        {isFixed ? (
          <Grid item md={12} xs={12} display='flex' alignItems='center'>
            <Box display='flex' flexDirection='row' alignItems='center' sx={{ mx: '2em' }}>
              <Image
                alt='Profile Picture'
                src='https://via.placeholder.com/150'
                width={0}
                height={0}
                style={{ width: '50px', height: 'auto', marginRight: '.8em', borderRadius: '50%' }}
              />
              <Typography sx={{ fontWeight: '600', fontSize: '20px', mb: 2 }}>
                <span>Lorem</span>
              </Typography>
            </Box>
          </Grid>
        ) : (
          <StatusIndicator />
        )}
      </Box>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <ExportButton />
        <DateRangeFilter />
        <UpdateButton />
      </Box>
    </Box>
  )
}

export default FilteringComponent
