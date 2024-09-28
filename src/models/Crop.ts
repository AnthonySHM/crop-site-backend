import mongoose from 'mongoose';

const CropSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  overview: { type: String, required: true },
  planting: { type: String, required: true },
  care: { type: String, required: true },
  harvest: { type: String, required: true },
  economics: { type: String, required: true },
});

export default mongoose.model('Crop', CropSchema);
