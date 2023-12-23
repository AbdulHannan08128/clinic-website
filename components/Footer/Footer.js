import React from 'react'
import styles from './Footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
export default function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.grid}>
            
                <div className={styles.logo}>
                    
                    <Image src='/logo-no-bg.png' width={100} height={180} alt='LOGO' className={styles.lgo}/>
                    
                    {/* <div className={styles.ftext}>Copyright &copy;     https://mydomain.com.All Rights Reserved.</div> */}

                </div>
            
            <div className={styles.ql}><div> <h5>Quick Links</h5>
                    <ul>
                        <li>
                            <Link href='/'>Home</Link>
                        </li>
                        <li>
                            <Link href='/about'>About</Link>
                        </li>
                        <li>
                            <Link href='/browse'>Browse</Link>
                        </li>
                        <li>
                            <Link href='/book-an-appointment'>Book An Appointment</Link>
                        </li>
                        <li>
                            <Link href='/online-treatment'>Online Treatment</Link>
                        </li>
                        
                    </ul></div>
                    <div>
                        <h5>New Links</h5>
                    <ul>
                        <li>
                            <Link href='/'>Terms And Conditions</Link>
                        </li>
                        <li>
                            <Link href='/about'>Suggest Changes</Link>
                        </li>
                        
                    </ul>
                    </div>
                    </div>
        </div>
    </div>
  )
}
