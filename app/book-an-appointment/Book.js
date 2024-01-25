// components/BookingForm.js
'use client'
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import OTPInput from "react-otp-input"; // Add this import
import "react-datepicker/dist/react-datepicker.css";
import styles from "./Book.module.css";
import { post } from "../../functions/axios.post";
import Image from "next/image";
import { sendEmail } from "../../functions/sendEmail";
import Redirect from '../auth/login/Redirect';
import Error from '../../components/Form-Contact/Error'

const BookingForm = (props) => {
  async function POST(formData) {
    try {
      // Post data to the backend
     await post(props.URL, formData, (data) => {
        let success = data.data.success;
        if (success) {
          console.log("Form Submitted Successfully");
        } else {
          setkb(true);
          setOTP(false);
          alert('call')
        }
      });

      // Reset form or perform any other actions after successful submission
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  }

  const { control, handleSubmit, register } = useForm();
  const [selectedImage, setSelectedImage] = useState(null);
  const [OTP, setOTP] = useState(false);
  const [fData, setfData] = useState();
  const [otpValue, setOtpValue] = useState(""); // Add this state for OTP input
  const [kb, setkb] = useState(false)
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };

      reader.readAsDataURL(file);
    }
  };

  const onSubmit = (data) => {
    let otp;
    otp =
      Math.floor(Math.random() * 10).toString() +
      Math.floor(Math.random() * 10).toString() +
      Math.floor(Math.random() * 10).toString() +
      Math.floor(Math.random() * 10).toString() +
      Math.floor(Math.random() * 10).toString() +
      Math.floor(Math.random() * 10).toString();

    const formData = new FormData();
    sendEmail(
      {
        to: data.email,
        subject: "Appointment Verification",
        text: `OTP for your Email verification is XXXXXX. Do not share This OTP with Anyone...`,
        html: `<p style="font-size:1.4rem;">OTP for your Appointment verification is <b>${otp}</b>. Do not share This OTP with Anyone...</p>`,
      },
      () => {
        console.log("Email Sent");
      },
      () => {
        console.log("Email Failed");
      }
    );
    // Append form data
    formData.append("name", data.name);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("email", data.email);
    formData.append("selectedDate", data.selectedDate);
    formData.append("photo", data.photo[0]); // Assuming 'photo' is the file input name
    setfData(formData);
    console.log(data);
    setOTP(otp);
  };

  const otpSubmit = () => {
    if (otpValue === OTP) {
      post(props.URL, fData, (data) => {
        let success = data.data.success;
        if (success) {
          console.log("Form Submitted Successfully");
          Redirect('/');
        } else {
          setkb(true);
          setOTP(false);
         
        }
      });
     
    
     
      
    }
  };

  return (
    <div className={styles.cont}>
      {OTP ? (
        <form onSubmit={handleSubmit(otpSubmit)} className={styles.bookingOtpForm}>
          <label className={styles.label}>Enter OTP:</label>
          <OTPInput
      value={otpValue}
      onChange={(otp)=>{
        setOtpValue(otp)
      }}
      numInputs={6}
      renderSeparator={<span>-</span>}
      renderInput={(props) => <input {...props} className={styles.inpOtp}/>}
      isInputNum={true}
      
    />
          <button type="submit" className={styles.button}>
            Book Appointment
          </button>
        </form>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.bookingForm}>
          {/* Photo input */}
          <input
            type="file"
            {...register("photo", { required: true })}
            accept="image/*"
            onChange={handleImageChange}
            className={styles.input}
            id="file"
            style={{
              width: "0",
              height: "0",
              position: "absolute",
              left: "-30px",
            }}
          />

          {/* Display selected image */}
          <label htmlFor="file">
            {selectedImage ? (
              <div className={styles.imagePreview}>
                <img
                  src={selectedImage}
                  alt="Selected"
                  className={styles.previewImage}
                />
              </div>
            ) : (
              <div className={styles.imagePreview}>
                <Image
                  src="/user_img.jpg"
                  alt="Selected"
                  className={styles.previewImage}
                  width={150}
                  height={200}
                />
              </div>
            )}
          </label>

          <label className={styles.label}>Name:</label>
          <input
            {...register("name", { required: true })}
            className={styles.input}
          />

          <label className={styles.label}>Phone Number:</label>
          <input
            {...register("phoneNumber", { required: true })}
            className={styles.input}
          />

          <label className={styles.label}>Email:</label>
          <input
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            className={styles.input}
          />

          <label className={styles.label}>Select Date:</label>
          <Controller
            control={control}
            name="selectedDate"
            render={({ field }) => (
              <DatePicker
                selected={field.value}
                onChange={(date) => field.onChange(date)}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
                className={styles.input}
                showIcon
                
              />
            )}
          />
          <br />

          <button type="submit" className={styles.button}>
            Book Appointment
          </button>
        </form>
      )}
      {kb?<Error errors={['Image Should Be Less Than 50kb!']}/>:''}
    </div>
    
  );
};

export default BookingForm;
