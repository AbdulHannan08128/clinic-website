// Import necessary modules
import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { addAppointment } from '@/functions/addAppointment';

export async function POST(request) {
  try {
    let data = await request.formData();
    let file = data.get('photo');

    if (!file) {
      return NextResponse.json({ message: 'No image found', success: false });
    } else {
      // Extract data from file
      const byteData = await file.arrayBuffer();
      const buffer = Buffer.from(byteData);

      // Generate a unique filename
      const path = `${Date.now()}${file.name}`;
      let fullPath;

      if (process.env.NODE_ENV === 'production') {
        // In production, save to 'uploads/' without 'public/'
        fullPath = `uploads/${path}`;
      } else {
        // In development, save to 'public/uploads/'
        fullPath = `public/uploads/${path}`;
      }

      // Save the file to the server
      await writeFile(fullPath, buffer);

      // Create an appointment object
      const appointment = {
        username: data.get('name'),
        email: data.get('email'),
        number: parseInt(data.get('phoneNumber')),
        appointmentDate: data.get('selectedDate'),
        photo: path,
      };

      // Add appointment to the database
      await addAppointment(
        appointment,
        () => {
          console.log('Appointment Booked Successfully');
        },
        () => {
          console.log('Appointment booking failed');
        }
      );

      return NextResponse.json({ message: 'Image uploaded', success: true });
    }
  } catch (error) {
    console.error('Error processing form data:', error);
    return NextResponse.json({ message: 'Internal Server Error', success: false }, 500);
  }
}
