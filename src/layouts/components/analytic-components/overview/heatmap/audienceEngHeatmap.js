import React from 'react'
import dynamic from 'next/dynamic'
import { Box, useTheme } from '@mui/material'

// Import ApexCharts dynamically due to SSR in Next.js
const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

// Helper function to format the hour in AM/PM format
const formatHour = hour => {
  const period = hour >= 12 ? 'PM' : 'AM'
  const formattedHour = hour % 12 === 0 ? 12 : hour % 12

  return `${formattedHour} ${period}`
}

const AudienceEngHeatmap = () => {
  const theme = useTheme()

  const data = [
    [0, 0, 0],
    [0, 1, 20],
    [0, 2, 120],
    [0, 3, 230],
    [0, 4, 20],
    [0, 5, 20],
    [0, 6, 10],
    [0, 7, 10],
    [0, 8, 10],
    [0, 9, 0],
    [0, 10, 0],
    [0, 11, 0],
    [0, 12, 148],
    [0, 13, 20],
    [0, 14, 0],
    [0, 15, 0],
    [0, 16, 0],
    [0, 17, 30],
    [0, 18, 0],
    [0, 19, 0],
    [0, 20, 50],
    [0, 21, 60],
    [0, 22, 0],
    [0, 23, 0],
    [1, 0, 0],
    [1, 1, 0],
    [1, 2, 0],
    [1, 3, 0],
    [1, 4, 0],
    [1, 5, 0],
    [1, 6, 0],
    [1, 7, 0],
    [1, 8, 58],
    [1, 9, 0],
    [1, 10, 0],
    [1, 11, 0],
    [1, 12, 0],
    [1, 13, 110],
    [1, 14, 220],
    [1, 15, 330],
    [1, 16, 560],
    [1, 17, 0],
    [1, 18, 0],
    [1, 19, 0],
    [1, 20, 0],
    [1, 21, 0],
    [1, 22, 0],
    [1, 23, 0],
    [2, 0, 0],
    [2, 1, 0],
    [2, 2, 0],
    [2, 3, 0],
    [2, 4, 0],
    [2, 5, 0],
    [2, 6, 0],
    [2, 7, 0],
    [2, 8, 0],
    [2, 9, 0],
    [2, 10, 0],
    [2, 11, 0],
    [2, 12, 0],
    [2, 13, 0],
    [2, 14, 0],
    [2, 15, 0],
    [2, 16, 0],
    [2, 17, 0],
    [2, 18, 0],
    [2, 19, 0],
    [2, 20, 0],
    [2, 21, 0],
    [2, 22, 0],
    [2, 23, 0],
    [3, 0, 0],
    [3, 1, 0],
    [3, 2, 230],
    [3, 3, 0],
    [3, 4, 210],
    [3, 5, 0],
    [3, 6, 0],
    [3, 7, 0],
    [3, 8, 0],
    [3, 9, 0],
    [3, 10, 0],
    [3, 11, 0],
    [3, 12, 0],
    [3, 13, 0],
    [3, 14, 0],
    [3, 15, 0],
    [3, 16, 0],
    [3, 17, 0],
    [3, 18, 0],
    [3, 19, 0],
    [3, 20, 0],
    [3, 21, 0],
    [3, 22, 0],
    [3, 23, 0],
    [4, 0, 0],
    [4, 1, 0],
    [4, 2, 0],
    [4, 3, 0],
    [4, 4, 0],
    [4, 5, 0],
    [4, 6, 0],
    [4, 7, 0],
    [4, 8, 120],
    [4, 9, 110],
    [4, 10, 0],
    [4, 11, 220],
    [4, 12, 0],
    [4, 13, 0],
    [4, 14, 0],
    [4, 15, 0],
    [4, 16, 0],
    [4, 17, 0],
    [4, 18, 0],
    [4, 19, 0],
    [4, 20, 0],
    [4, 21, 0],
    [4, 22, 0],
    [4, 23, 0],
    [5, 0, 0],
    [5, 1, 0],
    [5, 2, 0],
    [5, 3, 0],
    [5, 4, 0],
    [5, 5, 0],
    [5, 6, 0],
    [5, 7, 0],
    [5, 8, 0],
    [5, 9, 0],
    [5, 10, 0],
    [5, 11, 0],
    [5, 12, 86],
    [5, 13, 182],
    [5, 14, 0],
    [5, 15, 0],
    [5, 16, 0],
    [5, 17, 0],
    [5, 18, 0],
    [5, 19, 0],
    [5, 20, 0],
    [5, 21, 0],
    [5, 22, 0],
    [5, 23, 0],
    [6, 0, 0],
    [6, 1, 0],
    [6, 2, 0],
    [6, 3, 0],
    [6, 4, 0],
    [6, 5, 0],
    [6, 6, 0],
    [6, 7, 220],
    [6, 8, 0],
    [6, 9, 110],
    [6, 10, 20],
    [6, 11, 111],
    [6, 12, 50],
    [6, 13, 40],
    [6, 14, 30],
    [6, 15, 20],
    [6, 16, 10],
    [6, 17, 90],
    [6, 18, 70],
    [6, 19, 60],
    [6, 20, 550],
    [6, 21, 330],
    [6, 22, 220],
    [6, 23, 220]
  ]

  // Find the maximum value from the data to scale opacity correctly
  const maxDataValue = Math.max(...data.map(d => d[2]))

  const series = Array.from({ length: 24 }, (_, hour) => {
    const hourData = data.filter(d => d[1] === hour)

    return {
      name: formatHour(hour),
      data: hourData.map(d => ({ x: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][d[0]], y: d[2] }))
    }
  })

  const options = {
    chart: {
      type: 'heatmap',
      background: 'transparent',
      height: 350
    },
    plotOptions: {
      heatmap: {
        enableShades: true,
        shadeIntensity: 0.5,
        distributed: false,
        colorScale: {
          ranges: [
            {
              from: 0,
              to: maxDataValue,
              color: '#CCCCCC',
              name: 'custom-range',
              opacityFrom: 0.0,
              opacityTo: 1
            }
          ],
          min: 0,
          max: maxDataValue
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    xaxis: {
      type: 'category',
      categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      position: 'bottom'
    },
    yaxis: {
      reversed: true
    },
    grid: {
      padding: {
        right: 20
      }
    },
    theme: {
      mode: theme.palette.mode
    }
  }

  return (
    <Box>
      <ReactApexChart options={options} series={series} type='heatmap' />
    </Box>
  )
}

export default AudienceEngHeatmap
