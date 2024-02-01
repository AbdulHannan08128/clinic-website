'use client'
import {useState, useEffect} from 'react';
import styles from './page.module.css'
import AppointmentIcon from './adminComponents/Icons/Appointment'
import PlusIcon from './adminComponents/Icons/Plus'
import RupeeIcon from './adminComponents/Icons/Rupee'
import PatientIcon from './adminComponents/Icons/Patient'
import MessageIcon from './adminComponents/Icons/Message'
import SettingIcon from './adminComponents/Icons/Change'
import PersonAddIcon from './adminComponents/Icons/Patient'
import WebIcon from './adminComponents/Icons/Website'
import {get} from '../../functions/axios.get'

export const dynamic = 'force-dynamic'
export const dynamicParams = true
export const revalidate = 10
export const fetchCache = 'auto'
export const runtime = 'nodejs'
export const preferredRegion = 'auto'
export const maxDuration = 5


export default function page(props) {
      

  
    const [appointments, setAppointments] = useState([]); // Initialize with an empty array

    async function getData() {
      try {
        await get(props.URL, (data)=>{
          console.log('Data Fetch Successful');
          setAppointments(data.data); // Set appointments with the data received
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

  
 
 

  return (
    <>
    <div className={styles.ul}>
       <div>
        <span className={styles.icon}><AppointmentIcon/></span>
        <span className={styles.details}><span>{appointments.length}</span>Total Appointments</span>
       </div>
       <div className={styles.sec}>
        <span className={styles.icon}><PlusIcon/></span>
        <span className={styles.details}><span>21</span>Patients Treated</span> 
       </div>
       <div>
        <span className={styles.icon}><PatientIcon/></span>
        <span className={styles.details}><span>121</span>Pending Appointments</span>
       </div>
       <div className={styles.sec}>
        <span className={styles.icon}><RupeeIcon/></span>
        <span className={styles.details}><span>₹12100</span>Total Earning</span>
       </div>
       <div>
        <span className={styles.icon}><MessageIcon/></span>
        <span className={styles.details}><span>10</span>Total Messages</span>
       </div>
       <div className={styles.sec}>
        <span className={styles.icon}><SettingIcon/></span>
        <span className={styles.details}><span>10</span>Total Requested Changes</span>
       </div>
       <div>
        <span className={styles.icon}><PersonAddIcon/></span>
        <span className={styles.details}><span>10</span>Total Requested Partners</span>
       </div>
       <div className={styles.sec}>
        <span className={styles.icon}><WebIcon/></span>
        <span className={styles.details}><span>10</span>Website Clients</span>
       </div>
      
    </div>

  
    </>
  )
}
