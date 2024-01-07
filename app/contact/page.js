import styles from './page.module.css'
import Form from '../../components/Form-Contact/Form'
export const metadata = {
    title: "Golden Hands || Contact",
    description: "Contact Golden Hands Clinic",
    keywords: ["About GH", "About Golden Hands", "About Us", "about"],
  };
export default function page() {
  return (
    <div className={styles.contact}>
        <div className={styles.cont}>
          <div className={styles.img}></div>
          <div className={styles.form}>
            <Form/>
          </div>
        </div>
        
    </div>
  )
}
