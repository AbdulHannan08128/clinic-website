'use client'
// components/BookingForm.js
import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from './page.module.css';
import {post} from '../../functions/axios.post'

const BookingForm = (props) => {
  const { control, handleSubmit, register } = useForm();
  const [selectedImage, setSelectedImage] = useState(null);

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
    const formData = new FormData();

    // Append form data
    formData.append('name', data.name);
    formData.append('phoneNumber', data.phoneNumber);
    formData.append('email', data.email);
    formData.append('selectedDate', data.selectedDate);
    formData.append('photo', data.photo[0]); // Assuming 'photo' is the file input name

    console.log(data);

    try {
      // Post data to the backend
       post(props.URL, formData, (data)=>{
        let success = data.data.success;
        if (success) {
          alert('Form Submitted Successfully')
        }
        else{
          alert('Something Went Wrong')
        }
       });
      
      // Reset form or perform any other actions after successful submission
     
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className={styles.cont}>
    <form onSubmit={handleSubmit(onSubmit)} className={styles.bookingForm}>
      <label className={styles.label}>Name:</label>
      <input {...register('name', { required: true })} className={styles.input} />

      <label className={styles.label}>Phone Number:</label>
      <input {...register('phoneNumber', { required: true })} className={styles.input} />

      <label className={styles.label}>Email:</label>
      <input {...register('email', { required: true, pattern: /^\S+@\S+$/i })} className={styles.input} />

      <label className={styles.label}>Select Date:</label>
      <Controller
        control={control}
        name="selectedDate"
        render={({ field }) => (
          <DatePicker
            selected={field.value}
            onChange={(date) => field.onChange(date)}
            dateFormat="dd/MM/yyyy"
            className={styles.input}
          />
        )}
      />

      {/* Photo input */}
      <label className={styles.label}>Upload Photo:</label>
      <input
        type="file"
        {...register('photo',{ required: true})}
        accept="image/*"
        onChange={handleImageChange}
        className={styles.input}
      />

      {/* Display selected image */}
      {selectedImage && (
        <div className={styles.imagePreview}>
          <img src={selectedImage} alt="Selected" className={styles.previewImage} />
        </div>
      )}

      <button type="submit" className={styles.button}>
        Book Appointment
      </button>
    </form>
    </div>
  );
};

export default BookingForm;

