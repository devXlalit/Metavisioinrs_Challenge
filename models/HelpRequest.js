import mongoose from "mongoose";

const helpRequestSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  seekerId: { type: Number, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model("HelpRequest", helpRequestSchema);
