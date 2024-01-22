import {NextResponse} from 'next/server'
import {writeFile} from 'fs/promises'
import { addAppointment } from '@/functions/addAppointment';
//*****https://nextjs.org/docs/app/api-reference/functions/next-request******

// https://nextjs.org/docs/app/building-your-application/routing/route-handlers#request-body








export async function POST(request) {  

let data = await request.formData();
// console.log(data);


let file = data.get('photo')
if (!file) {
   return NextResponse.json({message:"no image found", success:false})
} 
 else{
const byteData = await file.arrayBuffer();
 const buffer = Buffer.from(byteData);

const path = `${Date.now()}${file.name}`;
const fullPath= `./public/uploads/${path}`;
 await writeFile(fullPath, buffer)

const appointment={
   username:data.get('name'),
   email:data.get('email'),
   number:parseInt(data.get('phoneNumber')),
   appointmentDate:data.get('selectedDate'),
   photo: path
}
console.log(appointment);
 await addAppointment(appointment, ()=>{
   console.log('Appointment Booked Successfully');
},
()=>{
   console.log('Appointment booking failed');
})
 return NextResponse.json({message:"image uploaded", success:true})
}
} 