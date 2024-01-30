import styles from './page.module.css'
import Linechart from './linechart'
import Barchart from './barchart'
import AppointmentIcon from './adminComponents/Icons/Appointment'
import PlusIcon from './adminComponents/Icons/Plus'
import RupeeIcon from './adminComponents/Icons/Rupee'
import PatientIcon from './adminComponents/Icons/Patient'
import MessageIcon from './adminComponents/Icons/Message'
import SettingIcon from './adminComponents/Icons/Change'
import PersonAddIcon from './adminComponents/Icons/Patient'
import WebIcon from './adminComponents/Icons/Website'
import {get} from '../../functions/axios.get'


async function getData(Data){
   await get(process.env.appointmentURL, (data)=>{
    console.log('Data Fetch Successful');
    Data(data);
    
   })
}
export default async function page() {
  let appointments;
  await getData((Data)=>{
      appointments=Data.data
   });
 

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

    <div className={styles.chart}>
       <div><span><Linechart/></span></div>
       <div><span><Barchart/></span></div>
      
    </div>
    </>
  )
}
