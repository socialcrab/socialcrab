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
  { id: 1, type: 'Photo Feed', percent: 57.1 },
  { id: 2, type: 'Photo Feed', percent: 21.3 },
  { id: 3, type: 'Photo Feed', percent: 14.7 },
  { id: 4, type: 'Photo Feed', percent: 11 },
  { id: 5, type: 'Photo Feed', percent: 3 }
]

const TypePostsTable = ({ theme }) => {
  const maxPercent = Math.max(...rows.map(r => r.percent))
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
            <TableCell align='left'>TYPE</TableCell>
            <TableCell align='left'>TOTAL</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell sx={{ width: '10%' }} component='th' scope='row'>
                {row.id}
              </TableCell>
              <TableCell sx={{ width: '60%' }} align='left'>
                {row.type}
              </TableCell>
              <TableCell sx={{ width: '30%' }} align='right'>
                <Box display='flex' flexDirection='column'>
                  <span style={{ display: 'flex', alignItems: 'flex-start' }}>{row.percent}%</span>
                  <LinearProgress
                    variant='determinate'
                    value={(row.percent / maxPercent) * 100}
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

export default TypePostsTable
