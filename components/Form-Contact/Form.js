
'use client'
import './Form.css'
export default function Form() {
    async function onSubmit(event) {
      event.preventDefault()
   
      const formData = new FormData(event.target)
      console.log(formData);
      const response = await fetch('/api/submit', {
        method: 'POST',
        body: formData,
      })
   
      // Handle response if necessary
      const data = await response.json()
      // ...
    }
   
    return (
      <form onSubmit={onSubmit} className='cform'>
        <input type="text" name="name" placeholder='Your Name'/>
        <input type="email" name="email" placeholder='Your Email'/>
        <textarea cols="30" rows="10" placeholder='Your Message'></textarea>
        <button type="submit">Submit</button>
      </form>
    )
  }