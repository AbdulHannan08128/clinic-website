'use server'
import {redirect} from 'next/navigation'
export default async function Redirect(){
    console.log('redirected'); 
     redirect('/admin')
}