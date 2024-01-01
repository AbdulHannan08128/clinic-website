import styles from "./page.module.css";
import TypedJS from "../../components/Typed/Type";
import Contact from "../../components/Con-Btn/Contact";
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
      </div>
      <Contact />
    </main>
  );
}
