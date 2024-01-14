'use server'
import {cookies} from 'next/headers'
export default async function SetCookie(){
    console.log('cookie-set'); 
     cookies().set('auth', process.env.key)
}