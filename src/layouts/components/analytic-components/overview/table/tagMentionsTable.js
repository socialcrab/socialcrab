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
  { id: 1, instagram: '@loremIpsum', tags: 21 },
  { id: 2, instagram: '@Lipsum', tags: 13 },
  { id: 3, instagram: '@loremIpsumDolor', tags: 17 },
  { id: 4, instagram: '@Lorem', tags: 11 },
  { id: 5, instagram: '@loremDolor', tags: 9 },
  { id: 6, instagram: '@wakwaw', tags: 1 }
]

const TypePostsTable = ({ theme }) => {
  const maxPercent = Math.max(...rows.map(r => r.tags))
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
            <TableCell align='left'>INSTAGRAM</TableCell>
            <TableCell align='left'>TAGS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.id}>
              <TableCell sx={{ width: '10%' }} component='th' scope='row'>
                {row.id}
              </TableCell>
              <TableCell sx={{ width: '40%' }} align='left'>
                {row.instagram}
              </TableCell>
              <TableCell sx={{ width: '30%' }} align='right'>
                <Box display='flex' flexDirection='column'>
                  <span style={{ display: 'flex', alignItems: 'flex-start' }}>{row.tags}</span>
                  <LinearProgress
                    variant='determinate'
                    value={(row.tags / maxPercent) * 100}
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
