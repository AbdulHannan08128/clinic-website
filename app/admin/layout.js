import Sidenav from './adminComponents/Sidenav/Sidenav'
import Nav from './adminComponents/Nav/Nav'
import './admin.css'

export const dynamic = "force-dynamic";

export default function AdminLayout({ children }) {
    return  (
    <main>
      <header>
      <Sidenav/>
      </header>

       <div className='content'>
       <div style={{ overflowY:"scroll"}}>
      {children}
      </div>
      </div>
      
    </main>
    )
  }