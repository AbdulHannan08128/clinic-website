import styles from './page.module.css'
import Form from '../../components/Form-Contact/CFORM'
import Contact from '../../components/Con-Btn/Contact'
import Navbar from '../../components/Navbar/Nav'
import Footer from '../../components/Footer/Foot'
export const metadata = {
    title: "Golden Hands || Contact",
    description: "Contact Golden Hands Clinic",
    keywords: ["About GH", "About Golden Hands", "About Us", "about"],
  };
 
export default function page() {
  return (
    <>
     <Navbar/>
    <div className={styles.contact}>
        <div className={styles.cont}>
          <div className={styles.img}><h1>Contact Us</h1></div>
          <div className={styles.form}>
            <Form URL={process.env.url}/>
          </div>
        </div>
        <Contact/>
        
    </div>
    <Footer/>
    </>
  )
}
