
import Admin from './Admin'

export default function page() {
  return (
   <>
    <Admin URL={process.env.appointmentURL}/>
    </>
  )
}
