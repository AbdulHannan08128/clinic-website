'use client'
import { get } from '../../../functions/axios.get'
import { useState, useEffect } from 'react'

export default function Appointment(props) {
  const [appointments, setAppointments] = useState([]); // Initialize with an empty array

  async function getData() {
    try {
      await get(props.URL, (data)=>{
        console.log('Data Fetch Successful', data);
        setAppointments(data.data); // Set appointments with the data received
        
      });
       // You can alert or console.log the data
    } catch (error) {
      console.error('Error fetching data', error);
    }
  }


    getData();
// Empty dependency array ensures that the effect runs only once on mount

  return (
    <>
      <h1>Appointments</h1>
      {/* Map through appointments if it's an array */}
      {appointments ? appointments.map((appointment, i) => (
        <div key={i}>{appointment.username}</div>
      )):'No Data'}
    </>
  );
}
