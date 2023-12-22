// models/User.js
import mongoose from 'mongoose';

// Check if the model already exists
const Appointment = mongoose.models.Appointment || mongoose.model('Appointment', new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  appointmentDate:{type: String, required: true}
  // other fields...
}));

export default Appointment;