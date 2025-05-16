import React from 'react'
import ApexCharts from 'react-apexcharts'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Box, Typography } from '@mui/material'
import FormatNumberThousand from 'src/helper/formatNumberThousand'

const data = [
  { name: '@gretaim', followers: 804771, percentage: '49.0%' },
  { name: '@razer_patricia', followers: 203221, percentage: '12.0%' },
  { name: '@christianstella', followers: 191586, percentage: '12.0%' },
  { name: '@tengkulakariska', followers: 108511, percentage: '7.0%' },
  { name: '@neeschristy', followers: 92549, percentage: '6.0%' },
  { name: '@other', followers: 226424, percentage: '14.0%' }
]

const colors = ['#757BFF', '#9498FF', '#B3B6FF', '#D1D3FF', '#F0F0FF', '#72E128']

const getSeriesFromData = data => {
  return data.map(item => item.followers)
}

const getChartOptions = data => {
  return {
    labels: data.map(item => item.name),
    legend: {
      show: false
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      width: 1,
      colors: ['#30334E']
    },
    plotOptions: {
      pie: {
        expandOnClick: false
      }
    },
    tooltip: {
      y: {
        formatter: value => FormatNumberThousand(value)
      }
    },
    colors: colors
  }
}

const PiechartFollowersReach = () => {
  return (
    <Box display='flex' justifyContent='center' alignItems='center' flexDirection='row'>
      <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
        <ApexCharts options={getChartOptions(data)} series={getSeriesFromData(data)} type='pie' width='300' />
        <Typography sx={{ fontWeight: '600', fontSize: '14px', mt: 5 }}>12,123,848</Typography>
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
      <TableContainer component={Paper} style={{ marginTop: '20px' }}>
        <Table aria-label='simple table'>
          <TableHead sx={{ backgroundColor: '#3A3E5B' }}>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell align='left'>Top 5 Ranking</TableCell>
              <TableCell align='center'>Total Posts</TableCell>
              <TableCell align='center'>Percentage (%)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={row.name}>
                <TableCell component='th' scope='row'>
                  {index + 1}
                </TableCell>
                <TableCell align='left' sx={{ display: 'flex', alignItems: 'center' }}>
                  <Box
                    width={14}
                    height={14}
                    borderRadius='10%'
                    bgcolor={colors[index]}
                    marginRight={3}
                    display='inline-block'
                  />
                  {row.name}
                </TableCell>
                <TableCell align='center'>{row.followers.toLocaleString()}</TableCell>
                <TableCell align='center'>{row.percentage}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default PiechartFollowersReach
