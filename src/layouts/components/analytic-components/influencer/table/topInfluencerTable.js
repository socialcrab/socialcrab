import * as React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TableSortLabel,
  Box,
  TextField
} from '@mui/material'
import { useState } from 'react'

const TopInfluencerTable = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const data = [
    {
      id: 1,
      name: 'Edelenyi Greta Irén',
      instagram: '@gretairn',
      followers: 804771,
      totalPosts: 1,
      postEngagement: '0.23%'
    },
    {
      id: 2,
      name: 'Razer Patricia',
      instagram: '@razer_patricia',
      followers: 203221,
      totalPosts: 1,
      postEngagement: '1.83%'
    }
  ]

  const handleSearch = event => {
    setSearchTerm(event.target.value)
  }

  const filteredData = searchTerm
    ? data.filter(
        row =>
          row.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          row.instagram.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : data

  return (
    <Box sx={{ width: '100%' }}>
      <TextField id='search' label='Search' variant='outlined' fullWidth onChange={handleSearch} />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>NO</TableCell>
              <TableCell>NAME</TableCell>
              <TableCell>INSTAGRAM</TableCell>
              <TableCell>FOLLOWERS</TableCell>
              <TableCell>TOTAL POSTS</TableCell>
              <TableCell>POST ENGAGEMENT</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredData.map((row, index) => (
              <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component='th' scope='row'>
                  {index + 1}
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.instagram}</TableCell>
                <TableCell>{row.followers.toLocaleString()}</TableCell>
                <TableCell>{row.totalPosts}</TableCell>
                <TableCell>{row.postEngagement}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default TopInfluencerTable
