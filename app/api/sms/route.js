import sendTransactionalSMS from "@/functions/sendMail";
import{NextResponse}from 'next/server'
export async function GET(req){
    const sendSMS = async () => {
        try {
          const response = await sendTransactionalSMS(
            'YourSenderName',
            '+916006957360', // Use the correct format for the phone number
            'Hello! This is a sample SMS message from your Next.js app.'
          );
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      };
  
      sendSMS(); 
   return NextResponse.json({'mbwjh':'hjagsj'})
   }