import React from 'react'
import Appointment from './Appointment'
export default function page() {
  return (
    <Appointment URL={process.env.appointmentURL}/>
  )
}
