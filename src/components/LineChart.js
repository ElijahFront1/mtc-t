import React from 'react'
import { Line } from 'react-chartjs-2'

const LineChart = () => {
  return (
    <div>
      <Line
        data={{
          labels: ['30.05', '31.05', '01.06', '02.06', '03.06', '04.06', '05.06', '06.06', '07.06', '08.06', '09.06'],
          datasets: [
            {
              label: 'Havy Lines',
              data: [35, 51, 40, 54, 46, 51, 42, 50, 35, 50, 36],
              backgroundColor: [
                'rgba(111, 201, 233, 0.8)',
              ],
              borderColor: [
                'rgba(111, 201, 233, 0.8)',
              ],
              borderWidth: 0,
              fontWeight: 600,
            },
            {
              label: 'Working Hours',
              data: [53, 42, 50, 35, 50, 36, 51, 40, 54, 46, 51],
              fontWeight: 600,
              backgroundColor: [
                'rgba(200, 227, 243, 0.8)',
              ],
              borderColor: [
                'rgba(200, 227, 243, 0.8)',
              ],
            },
          ],
        }}
        height={400}
        width={600}
        options={{
          maintainAspectRatio: false,
          elements: {
            point: {
              radius: 0
            }
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
              },
            ],
            xAxes: [
              {
                ticks: {
                  beginAtZero: true,
                },
                gridLines: {
                  display: false
                }
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 25,
            },
          },
        }}
      />
    </div>
  )
}

export default LineChart