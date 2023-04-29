import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: { required: true, type: String },
  email: { required: true, type: String, unique: true},
  email_verified_at: { type: Date },
  password: { required: true, type: String },
  profile_image: { type: String },
  created_at: { type: Date },
  updated_at: { type: Date },
  age: { type: Number}
});

userSchema.virtual("id").get(function () {
  return this._id.toHexString();
});

userSchema.set("toJSON", { virtuals: true });

export const userModel = mongoose.model("workabus_users", userSchema);