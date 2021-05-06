// Schema for users
import Mongoose from "mongoose";

const userSchema = new Mongoose.Schema({
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
});


const createUsers = new Mongoose.model("Users", userSchema);

export default createUsers;
