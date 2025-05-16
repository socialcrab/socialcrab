import * as React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  LinearProgress,
  Box
} from '@mui/material'
import { makeStyles } from '@mui/styles'

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

const rows = [
  { id: 1, location: 'Special Region of Yogyakarta', tags: 6 },
  { id: 2, location: 'Malioboro, Yogyakarta', tags: 4 },
  { id: 3, location: 'Bandung, Jawa Barat', tags: 3 },
  { id: 4, location: 'Malang', tags: 2 },
  { id: 5, location: 'Cepu', tags: 1 },
  { id: 6, location: 'DKI Jakarta', tags: 1 },
  { id: 7, location: 'Lampung', tags: 1 },
  { id: 8, location: 'Denpasar, Bali', tags: 1 },
  { id: 9, location: 'Surabaya', tags: 1 },
  { id: 10, location: 'Pontianak', tags: 1 }
]

const LocationTaggedTable = ({ theme }) => {
  const maxTags = Math.max(...rows.map(r => r.tags))
  const classes = useStyles()

  return (
    <TableContainer
      component={Paper}
      className={classes.customScrollbar}
      style={{ maxHeight: 400, overflow: 'auto', backgroundColor: theme.palette.background.paper }}
    >
      <Table stickyHeader aria-label='customized table'>
        <TableHead>
          <TableRow>
            <TableCell>NO</TableCell>
            <TableCell align='left'>LOCATION</TableCell>
            <TableCell align='left'>TAGS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell sx={{ width: '10%' }} component='th' scope='row'>
                {row.id}
              </TableCell>
              <TableCell sx={{ width: '60%' }} align='left'>
                {row.location}
              </TableCell>
              <TableCell sx={{ width: '30%' }} align='right'>
                <Box display='flex' flexDirection='column'>
                  <span style={{ display: 'flex', alignItems: 'flex-start' }}>{row.tags}</span>
                  <LinearProgress
                    variant='determinate'
                    value={(row.tags / maxTags) * 100}
                    sx={{
                      width: '100%',
                      mr: 1,
                      height: '10px',
                      borderRadius: '5px',
                      [`& .MuiLinearProgress-bar`]: {
                        backgroundColor: theme.palette.text.primary
                      }
                    }}
                  />
                </Box>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default LocationTaggedTable
