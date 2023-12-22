// models/User.js
import mongoose from 'mongoose';

// Check if the model already exists
const User = mongoose.models.User || mongoose.model('User', new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true },
  // other fields...
}));

export default User;
