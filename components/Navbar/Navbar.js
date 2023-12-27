'use client';


import React from 'react'
import styles from './Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import MenuIcon from '../Icons/Menu'
import CloseIcon from '../Icons/Close'
export default function Navbar() {

function toggleShow(){
   
 let element =  document.querySelector('#mob')
 console.log(element);
 element.classList.remove('hide')
 element.classList.add('show')
}
function toggleHide(){
  
let element =  document.querySelector('#mob')
console.log(element);
element.classList.remove('show')
element.classList.add('hide')
}




  return (
    <>
    <nav className={styles.nav}>
    
      <ul>
      <span className={styles.logo}><Image src="/gh-3.png" width={100} height={80} alt='GH'/></span>
        
        <li>
        <Link href='/'>Home</Link>
        </li>
        <li>
        <Link href='/features'>Features</Link>
        </li>
        <li>
        <Link href='/specialty'>Specialty</Link>
        </li>
        <li>
        <Link href='/contact'>Contact</Link>
        </li>
        <li>
        <Link href='/browse'>Browse</Link>
        </li>
      <span className={styles.menu} onClick={toggleShow} style={{zIndex:100}}>
         <MenuIcon/>
        </span>
        <Link href='/book-an-appointment' className={styles.book}>
        <li className={styles.special}>
      Book Appointment
        </li>
        </Link>
      </ul>
    </nav>


    <div className={styles.mob} id='mob'>
      <ul>


      <span className={styles.logoMob}><Image src="/gh-3.png" width={160} height={80} alt='GH'/></span>  
        
        <li>
        <Link href='/' onClick={toggleHide}>Home</Link>
        </li>
        <li>
        <Link href='/features' onClick={toggleHide}>Features</Link>
        </li>
        <li>
        <Link href='/specialty' onClick={toggleHide}>Specialty</Link>
        </li>
        <li>
        <Link href='/contact' onClick={toggleHide}>Contact</Link>
        </li>
        <li>
        <Link href='/browse' onClick={toggleHide}>Browse</Link>
        </li>
        
        <span className={styles.close} onClick={toggleHide}><CloseIcon fontSize='large'/></span>
        
      </ul>
      </div>
    </>
  )
}

