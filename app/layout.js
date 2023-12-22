import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar/Nav'
import {AOSInit} from './AOS/aos'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
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
        
        </body>
        
    </html>
   
  )
}
