'use client'
import { get } from '../../../functions/axios.get'
import { useState, useEffect } from 'react'
export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const revalidate = 10
export const fetchCache = 'auto'
export const runtime = 'nodejs'
export const preferredRegion = 'auto'
export const maxDuration = 5
import Image from 'next/image'
import styles from './Appointment.module.css'
import LoadingSkeleton from '../adminComponents/LoadingSkeleton/LoadingSkeleton'
export default function Appointment(props) {
  const [appointments, setAppointments] = useState(); // Initialize with an empty array

  async function getData() {
    try {
      await get(props.URL, (data)=>{
        console.log('Data Fetch Successful');
        setAppointments(data.data.reverse()); // Set appointments with the data received
        setTimeout(() => setRefreshToken(Math.random()), 3000);
      });
       // You can alert or console.log the data
    } catch (error) {
      console.error('Error fetching data');
    }
  }

 
  const [refreshToken, setRefreshToken] = useState(Math.random());

        useEffect(() => {
            getData();
          }, [refreshToken]);
    
// Empty dependency array ensures that the effect runs only once on mount

  return (
    <>

     
      {/* Map through appointments if it's an array */}

      <div className={styles.appointments}>
        {appointments?
         <table>
          <thead className={styles.head}>
          <tr >
            <th>S.No.</th>
            <th>Photo</th>
            <th>Username</th>
            <th>App. Date</th>
            <th>App. ID</th>
            <th>Ph. Number</th>
            <th>Email ID</th>
            <th>Status</th>
          </tr>
          </thead>
          {appointments ? appointments.map((appointment, i) => (
        <tr key={i+1} className={styles.tr} >
          
          <td>{i+1}</td>
          {appointment.photo && (
  <td>
    <img
      src={`data:image/png;base64,${Uint8Array.from(appointment.photo.data).reduce((data, byte) => data + String.fromCharCode(byte), '')}`}
      alt="Binary Image"
      width={50}
      height={50}
      className={styles.binimage}
    />
  </td>
)}

          <td>{appointment.username}</td>
          <td>{appointment.appointmentDate.slice(0,16)}</td>
          <td>{appointment._id}</td>
          <td>{appointment.number}</td>
          <td>{appointment.email}</td>
          <td>Status</td>
          
          
        </tr>
      )):'No Data'}
         </table>
:<LoadingSkeleton/>}

      </div>




      {/* {appointments ? appointments.map((appointment, i) => (
        <div key={i}>{appointment.username}</div>
      )):'No Data'} */}
    </>
  );
}
