 import {NextResponse} from 'next/server'
 import connectDB from '@/utils/db';
 import { addAppointment } from '@/functions/addAppointment';
 import { getAppointment } from '@/functions/getAppointment';

//*****https://nextjs.org/docs/app/api-reference/functions/next-request******

// https://nextjs.org/docs/app/building-your-application/routing/route-handlers#request-body



connectDB();

 export async function GET(req){
  let u = [];  
 await getAppointment((data)=>{u=data})
 return NextResponse.json(u)
 }



 export async function POST(request) {
   const res = await request.json();
   return Response.json({ res }) ;
 }