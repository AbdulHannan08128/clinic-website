
import Image from "next/image";
import styles from "./page.module.css";
import Script from "next/script";
import TypedJS from "../components/Typed/Type";
import {get} from '../functions/axios.get'
import Location from '../components/Icons/Location'
import Whatsapp from '../components/Icons/Whatsapp'
import Email from '../components/Icons/Email'
 import Contact from '../components/Con-Btn/Contact'
 import Navbar from '../components/Navbar/Nav'
 import Footer from '../components/Footer/Foot'

 async function getData(success) {


 


 

  await get(process.env.url,(data)=>{
     
     success(data)
  },
  (err)=>{
      console.log('Something went wrong while sending get request...');
  });
  
}




export default async function Home() {
let data;
 await getData((Data)=>{
     data = Data.data; 
 })

//  console.log(data);
  return (
    <>
    <Navbar/>
    <main className={styles.main}>
     
      {/* <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.js</code>
        </p>
        <div>
         
            <Link href='/book-an-appointment'>
           <span className={styles.book}>Book An Appointment</span>
           </Link>
         
        </div>
      </div> */}

      <div className={styles.center}>
        <h1 className={styles.h1}>
          Your Wellness Journey Starts Here: Compassionate Care, Trusted
          Expertise, Endless Possibilities.
          {/* {data[0].email} */}
          <TypedJS strings={[""]} />
        </h1>
      </div>

      <div className={styles.grid}>
        <a
          href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Appointment <span>-&gt;</span>
          </h2>
          <p>Book an Appointment to Visit Us in Coming Days.</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Work With Us <span>-&gt;</span>
          </h2>
          <p>Work With Us by Providing a Service</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Suggest Changes <span>-&gt;</span>
          </h2>
          <p>Suggest Some Changes in Our Platform or Clinic.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Online Treatment <span>-&gt;</span>
          </h2>
          <p>
            Instantly get Feedback by a Professional Doctor according to Your
            Symptoms.
          </p>
        </a>
      </div>
      
      <div className={styles.features} data-aos="fade-up">
        <h2 className={styles.h2}>
          OUR FEATURES
          <div className={styles.line}></div>
        </h2>

        <div data-aos="zoom-out-down">
          <span className={styles.ftext}>
            <h2>Online Treatment</h2>
            <p>
              Empower Your Wellness Journey Anytime, Anywhere. Unleash the
              healing power of technology with our online treatment platform.
              Bridging the gap between you and well-being, our virtual solutions
              deliver personalized care, fostering resilience, and transforming
              lives. Your path to a healthier, happier you starts online –
              because your wellness knows no bounds.
            </p>
          </span>
          <span className={styles.fimg}>
            <Image
              src="/treatment.png"
              width={400}
              height={300}
              className={styles.fimg}
            />
          </span>
        </div>

        <div className={styles.second} data-aos="zoom-out-left">
          <span className={styles.ftext}>
            <h2>Online Appointment</h2>
            <p>
              Seamless Scheduling, Effortless Connections. Elevate your life
              with our online appointment platform, where convenience meets
              care. Book, confirm, and manage your appointments effortlessly,
              bringing you closer to the services you need. Your time matters,
              and with us, scheduling has never been smoother. Your journey to
              well-being begins with a click.
            </p>
          </span>
          <span className={styles.fimg}>
            <Image
              src="/appointment.png"
              width={500}
              height={400}
              className={styles.fimg}
            />
          </span>
        </div>

        <div data-aos="zoom-out-right">
          <span className={styles.ftext}>
            <h2>Online Treatment</h2>
            <p>
              Empower Your Wellness Journey Anytime, Anywhere. Unleash the
              healing power of technology with our online treatment platform.
              Bridging the gap between you and well-being, our virtual solutions
              deliver personalized care, fostering resilience, and transforming
              lives. Your path to a healthier, happier you starts online –
              because your wellness knows no bounds.
            </p>
          </span>
          <span className={styles.fimg}>
            <Image
              src="/treatment.png"
              width={400}
              height={300}
              className={styles.fimg}
            />
          </span>
        </div>
      </div>

      <div className={styles.services}>
        <h2 className={styles.h2}>
          OUR SERVICES
          <div className={styles.line}></div>
        </h2>
        <div className={styles.swrapper}>
          <div data-aos="fade-right">
            <span className={styles.simg}>
              <Image
                src="/tablets.jpg"
                height={160}
                width={260}
                className={styles.fimg}
              />
            </span>
            <span className={styles.stext}>
              <h3>General Medicine</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nostrum fugiat numquam deleniti maxime omnis illo! Enim quisquam
                incidunt natus corporis repudiandae pariatur, architecto
                provident veritatis, necessitatibus quo
              </p>
            </span>
          </div>
          <div data-aos="fade-left">
            <span className={styles.simg}>
              <Image
                src="/surgery.jpg"
                height={160}
                width={260}
                className={styles.fimg}
              />
            </span>
            <span className={styles.stext}>
              <h3>Surgery</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Nostrum fugiat numquam deleniti maxime omnis illo! Enim quisquam
                incidunt natus corporis repudiandae pariatur, architecto
                provident veritatis, necessitatibus quo
              </p>
            </span>
          </div>
        </div>
      </div>

      <div className={styles.visit} data-aos="fade-down">
      <h2 className={styles.h2}>
          VISIT US
          <div className={styles.line}></div>
        </h2>
        <div className={styles.vwrapper} data-aos="flip-up">
        <a href='https://www.google.com/maps/place/Malshahi+Bagh+191201/@34.2090553,74.7872872,200m/data=!3m1!1e3!4m6!3m5!1s0x38e1833b6874b0f9:0xb01ee6de77c0d80c!8m2!3d34.2115213!4d74.7914171!16s%2Fg%2F12hr56c6f?entry=ttu' target="_blank">
          <div className={styles.vitem}>
            <div className={styles.icon}>
              <Location className={styles.icon}/>
            </div>
             <h2 className={styles.vtitle}>Beehama Ganderbal</h2>

          </div>
          </a>
          <a href='https://wa.me/917051499639?text=Hi, I have come from Your Website' target="_blank">
          <div className={`${styles.vitem} ${styles.whatsapp}`}>
            <div className={styles.icon}>
              <Whatsapp className={styles.icon}/>
            </div>
             <h2 className={styles.vtitle}>+91 7051499639</h2>

          </div>
          </a>
          <a href='mailto:mohammadayaan08128@mgmail.com' target="_blank">
          <div className={`${styles.vitem} ${styles.email}`}>
            <div className={styles.icon}>
              <Email className={styles.icon}/>
            </div>
             <h2 className={styles.vtitle}>mohammadayaan08128@gmail.com</h2>

          </div>
          </a>
      </div>
      </div>

     

     <Contact/>
    </main>
    <Footer/>
    </>
  );
}
