import React from 'react'
import Book from './Book'
import Navbar from '../../components/Navbar/Nav'
import Footer from '../../components/Footer/Foot'
import Contact from '../../components/Con-Btn/Contact'
export default function page() {
  return (
<>
<Navbar/>

    <div style={{display:'grid', placeItems:'center', height:'100vh', margin:'0 0'}}>
    <Book URL={process.env.uploadUrl}/> 
    </div>
<Contact/>
    <Footer/>

    </>

  )
}


