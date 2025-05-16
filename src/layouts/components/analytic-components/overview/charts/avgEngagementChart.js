// ** React and ApexCharts Imports
import React from 'react'
import dynamic from 'next/dynamic'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const AvgEngagementChart = ({ theme }) => {
  const series = [
    {
      name: 'Likes',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 30, 40, 35, 50, 49, 60, 70, 91]
    },
    {
      name: 'Comments',
      data: [10, 20, 15, 25, 27, 30, 45, 52, 10, 20, 15, 25, 27, 30, 45, 52]
    }
  ]

  const categories = [
    '2022-03-01',
    '2022-08-01',
    '2022-09-01',
    '2022-11-01',
    '2022-12-01',
    '2023-02-01',
    '2023-03-01',
    '2023-05-01',
    '2023-06-01',
    '2023-10o-01',
    '2023-11-01',
    '2023-12-01',
    '2023-12-06',
    '2023-12-09',
    '2023-12-17',
    '2023-12-21'
  ]

  // Options for the ApexChart
  const options = {
    chart: {
      type: 'line',
      height: 350,
      toolbar: {
        tools: {
          download: false
        }
      }
    },
    colors: [theme.palette.primary.main, theme.palette.secondary.main],
    stroke: {
      width: 3,
      curve: 'straight'
    },
    grid: {
      borderColor: '#5959594d',
      row: {
        colors: ['transparent'],
        opacity: 0.5
      },
      column: {
        colors: ['#90A4AE'],
        opacity: 0.1
      }
    },
    xaxis: {
      type: 'datetime',
      categories: categories,
      labels: {
        style: {
          colors: `${theme.palette.text.primary}`,
          fontSize: '12px'
        }
      }
    },
    yaxis: {
      title: {
        text: 'Likes & Comments',
        rotate: -90,
        style: {
          color: `${theme.palette.text.secondary}`,
          fontSize: '10px'
        }
      },
      labels: {
        formatter: function (val) {
          return val.toLocaleString()
        },
        style: {
          colors: `${theme.palette.text.primary}`,
          fontSize: '12px'
        }
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
      x: {
        format: 'dd-MMM-yyyy'
      },
      y: {
        formatter: function (val) {
          return val.toLocaleString()
        }
      },
      style: {
        fontSize: '12px'
      },
      theme: 'dark'
    },
    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    }
  }

  return <ReactApexChart options={options} series={series} type='line' height={350} />
}

export default AvgEngagementChart
