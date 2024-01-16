'use server'
import {cookies} from 'next/headers'
export default async function SetCookie(name,value){
    console.log('cookie-set'); 
     cookies().set(name, value)
}