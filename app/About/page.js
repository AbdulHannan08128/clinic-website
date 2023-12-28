import styles from './page.module.css'
import TypedJS from "../../components/Typed/Type";
import Contact from '../../components/Con-Btn/Contact';
export default function page() {
  return (
    <main>
    <div className={styles.about}>
             <div className={styles.center}>
        <h1 className={styles.h1}>
          About Our <br/>
          {/* {data[0].email} */}
          
          <TypedJS strings={["Experience", "Doctors","Clinic"]} />
        </h1>
      </div>
    </div>
    <Contact/>
    </main>
    
  )
}
