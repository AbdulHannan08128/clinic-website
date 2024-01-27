// Import necessary modules
import { NextResponse } from "next/server";

import { addAppointment } from "@/functions/addAppointment";

export async function POST(request) {
  try {
    let data = await request.formData();
    let file = data.get("photo");

    if (!file) {
      return NextResponse.json({ message: "No image found", success: false });
    } else {
      // Extract data from file
      const byteData = await file.arrayBuffer();
      const buffer = Buffer.from(byteData);

      // Check if the image size is within the limit (50KB)
      const maxSize = 50 * 1024; // 50KB in bytes
      if (buffer.length > maxSize) {
        return NextResponse.json({ message: "!50kb", success: false });
      } else {
        // Convert image data to Base64
        const base64Image = buffer.toString("base64");
        // Create an appointment object
        const appointment = {
          username: data.get("name"),
          email: data.get("email"),
          number: parseInt(data.get("phoneNumber")),
          appointmentDate: data.get("selectedDate"),
          photo: base64Image,
        };

        await addAppointment(appointment, () => {
          console.log("Appointment Booked Successfully... Image Stored");
        });
        NextResponse.json({
          message: "Appointment Booked Successfully",
          success: true,
        });
      }
      NextResponse.json({ message: "Unsupported Error", success: false });
    }
  } catch (error) {
    console.error("Error processing form data:", error);
    return NextResponse.json(
      { message: "Internal Server Error", success: false },
      500
    );
  }
}
