"use client"
import React from "react"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from "chart.js"
import { Line } from "react-chartjs-2"
 import {faker} from '@faker-js/faker'

ChartJS.register( 
  CategoryScale,
  LinearScale,   
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
 
export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "Weekly Appointments"
    }
  }
}
const labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]

export const data = {
  labels,
  datasets: [
    {
      label: "This Week",
      data:  [100,200,300,400,500,600,700],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)"
    },
    {
      label: "Previous Week",
      data: [700,600,500,400,300,200,100],
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)"
    }
  ]
}

export default function LineChart() {
  return <Line options={options} data={data} style={{ width: '580px !important',
    height: '380px !important'}}/>
} 
