import styles from "./page.module.css";
import TypedJS from "../../components/Typed/Type";
import Contact from "../../components/Con-Btn/Contact";
import Image from 'next/image'
export const metadata = {
  title: "Golden Hands || About",
  description: "About Our Clinic and More",
  keywords: ["About GH", "About Golden Hands", "About Us", "about"],
};
export default function page() {
  return (
    <main>
      <div className={styles.about}>
        <div className={styles.center}>
          <h1 className={styles.h1}>
            About Our <br />
            {/* {data[0].email} */}
            <TypedJS strings={["Experience", "Doctors", "Clinic"]} />
          </h1>
        </div>
        <div className={styles.content}>
          <h2>FAQ <span></span></h2>
          <div className={styles.grid}>
         <div className={styles.card} data-aos="fade-left">
          <h3>Who We Are? <span className={styles.span}></span></h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere molestias vero beatae ipsum obcaecati consequuntur ducimus et tempora ad, quibusdam</p>
         </div>
         <div  className={styles.card} data-aos="flip-up">
         <h3> What We Do? <span className={styles.span}></span></h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere molestias vero beatae ipsum obcaecati consequuntur ducimus et tempora ad, quibusdam</p>
         </div>
        <div  className={styles.card} data-aos="fade-right">
          <h3>What Is Unique In Us? <span className={styles.span}></span></h3>
         <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere molestias vero beatae ipsum obcaecati consequuntur ducimus et tempora ad, quibusdam</p>
         </div>
        </div>
      </div>

      <div className={styles.wcu}>
          <div className={styles.details} data-aos="flip-up" data-aos-duration="1000">
            <h2 data-aos="fade-up" >Discover More About Us</h2>
            <div>
              <span>
                10+ Years of Experience
              </span>
              <span>
                MBBS + PG
              </span>
              <span>
                MBBS in GMC Jammu
              </span>
              <span>
                Appointed at PHC Sonamarg + Gund
              </span>
              
              <span>
                PG in GMC Srinagar
              </span>
              
            </div>
          </div>
          <div className={styles.img} data-aos="fade-in">
            
          </div>
      </div>
      <div className={styles.doctor} data-aos="fade-left">
          <h2>Our Doctor <span></span></h2>
          <div className={styles.dncon}>
         
          <div className={styles.avatar}>

          </div>
          <div className={styles.name}> <h3> Dr. Aijaz Ahmad Rather</h3></div>
        
          
       
        
        </div>
      </div>
      </div>
      <Contact />
    </main>
  );
}
