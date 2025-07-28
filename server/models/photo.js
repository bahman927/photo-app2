import  mongoose from "mongoose";

const photoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String, required: true },
  picture: { type: String, required: true }, // Store the image URL or base64 string
  dateUploaded: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true },
});

module.exports = mongoose.model("Photo", photoSchema);








 




