'use client'
import './Sidenav.css'
import Link from 'next/link' 
export default function Sidenav() {
  function toggle(){
     document.querySelector('#sn').classList.toggle('open');
     

  }
  return (
    <>
    <span className='so' onClick={toggle} id='so'>OPEN</span>
    <div className='sidenav' id='sn'>

        <span className='profile'>
           
            <span className='img'></span>
            <span className='info'>
            <span className='name'>Dr. XYZ</span>
            <span className='role'>Admin</span>
            </span>
           
        </span>
        <ul>
            <li>
              <Link href='/admin'>Dashboard</Link>
            </li>
            <li className='drop110'>
              <Link href='/admin' className='drop'>Appointments</Link>
              <span className='dropdown'>
                <span><Link href='/admin'>Add Appointment</Link></span>
                <span><Link href='/admin/view-appointments'>View Appointments</Link></span>
              </span>
            </li>
            <li>
              <Link href='/admin'>Messages</Link>
            </li>
            <li>
              <Link href='/admin'>Income</Link>
            </li>
            <li className='drop150'>
              <Link href='/admin' className='drop'>Content</Link>
              <span className='dropdown'>
                <span><Link href='/'>Home</Link></span>
                <span><Link href='/admin'>About</Link></span>
                <span><Link href='/admin'>Contact</Link></span>
              </span>
            </li>
            <li>
              <Link href='/admin'>Calendar</Link>
            </li>
            <li>
              <Link href='/admin'>Account</Link>
            </li>
            <li>
              <Link href='/admin'>Visit</Link>
            </li>
        </ul>

    </div>
    </>
  )
}
