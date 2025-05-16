import React from 'react'
import dynamic from 'next/dynamic'

const ReactApexChart = dynamic(() => import('react-apexcharts'), { ssr: false })

const TotalViewsDayBarchart = ({ theme }) => {
  // Sample data
  const data = [10, 15, 28, 23, 12, 8, 24]

  // Calculate the average
  const average = data.reduce((sum, val) => sum + val, 0) / data.length

  // Chart options
  const options = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: false
      }
    },
    plotOptions: {
      bar: {
        columnWidth: '20%'
      }
    },
    colors: ['#CCCCCC'],
    dataLabels: {
      enabled: false
    },
    grid: {
      borderColor: '#90A4AE',
      strokeDashArray: 0
    },
    stroke: {
      show: true,
      width: 2,
      colors: ['transparent']
    },
    series: [
      {
        name: 'Total Posts',
        data: data
      }
    ],
    xaxis: {
      categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      axisBorder: {
        color: `${theme.palette.text.secondary}`
      },
      axisTicks: {
        color: `${theme.palette.text.secondary}`
      },
      labels: {
        style: {
          colors: `${theme.palette.text.secondary}`
        }
      }
    },
    yaxis: {
      title: {
        text: 'Total Posts',
        style: {
          color: `${theme.palette.text.secondary}`,
          fontSize: '10px'
        }
      },
      labels: {
        style: {
          colors: `${theme.palette.text.secondary}`
        }
      }
    },
    fill: {
      opacity: 1
    },
    tooltip: {
      theme: 'dark',
      y: {
        formatter: function (val) {
          return `${val}`
        }
      }
    },
    grid: {
      borderColor: '#5959594d',
      column: {
        colors: ['transparent'],
        opacity: 0.1
      }
    },
    annotations: {
      yaxis: [
        {
          y: average,
          borderColor: '#666CFF',
          strokeDashArray: 10,
          borderWidth: 2,
          label: {
            borderColor: '#666CFF',
            style: {
              color: '#fff',
              background: '#333'
            }
          }
        }
      ]
    }
  }

  return (
    <div id='chart'>
      <ReactApexChart options={options} series={options.series} type='bar' height={350} />
    </div>
  )
}

export default TotalViewsDayBarchart
