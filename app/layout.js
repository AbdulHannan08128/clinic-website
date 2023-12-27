import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar/Nav'
import Footer from '../components/Footer/Foot'
import {AOSInit} from './AOS/aos'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Golden Hands',
  description: 'A clinic opening soon in Beehama Ganderbal...',
  keywords:["Golden Hands", "Golden", "Hands", "GH", "Clinic", "Doctor", "Doctor Aijaz", "Dr Aijaz", "Dr. Aijaz", "Doctor Ajaz", "Dr Ajaz", "Dr. Ajaz", "Clinic", "Beehama", "Surgery", "Online Treatment", "Online Appointment", "Beehama Clinic"],
  icons:{
    icon:"./favicon.ico"
  }
} 

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      <AOSInit/>
      <body className={inter.className}>
        <div className='no-outflow'>
      <Navbar/>
      
        {children}
        </div>
        <Footer/>
        </body>
        
    </html>
   
  )
}
