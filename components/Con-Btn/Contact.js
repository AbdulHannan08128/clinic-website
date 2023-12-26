
import styles from "./Contact.module.css"
import Whatsapp from '../Icons/Whatsapp'
import Phone from '../Icons/Phone'
export default function Contact() {
  return (
    <div className={styles.wrapper}>
         <a href="https://wa.me/917051499639?text=Hi, I have come from Your Website">
         <div className={`${styles.btn} ${styles.whatsapp}`}>
           <Whatsapp className={styles.icon}/>
         </div>
         </a>
         <a href="tel:+917051499639">
         <div className={`${styles.btn} ${styles.phone}`}>
           <Phone className={styles.icon}/>
         </div>
         </a>
    </div>
  )
}
