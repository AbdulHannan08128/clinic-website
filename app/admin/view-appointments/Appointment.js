'use client'
import {get} from '../../../functions/axios.get'
import {useState, useEffect} from 'react'
export default async function Appointment(props) {
  const [Appointments, setAppointments] = useState([{username:'name'}]);
    async function getData(success){
        await get(props.URL, (data)=>{
            console.log('Data Fetch Successful');
            
            try {
                setAppointments([{username:'Username'}]);  
                
            } catch (error) {
                alert('Error!')
            }
            
            
           })
    }
   
    await getData();
   
 

  return (
    <>
    <h1>Appointments</h1>
      {Appointments.map((appointment, i) => {
         return <div key={i}>{appointment.username}</div>
      })}
    </>
  )
}
