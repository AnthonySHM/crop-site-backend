import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Crop from './models/Crop';
import connectDB from './db';

dotenv.config();

const seedData = [
  {
    name: 'Wheat',
    image: 'https://example.com/images/wheat.jpg',
    overview: 'Wheat is a staple grain crop grown worldwide for its versatile uses in food production.',
    planting: 'Plant wheat seeds 1-2 inches deep in rows, with 4-6 inches between each seed.',
    care: 'Water regularly, especially during the heading and grain-filling stages. Apply nitrogen-rich fertilizer.',
    harvest: 'Harvest wheat when the stalks turn golden and the grains are hard.',
    economics: 'Wheat is a major global commodity with applications in various food industries.'
  },
  {
    name: 'Rice',
    image: 'https://example.com/images/rice.jpg',
    overview: 'Rice is a staple food for more than half of the world\'s population, primarily grown in flooded fields.',
    planting: 'Sow rice seeds in flooded paddies or wet soil, about 1-2 cm deep.',
    care: 'Maintain water levels, control weeds, and apply fertilizer as needed.',
    harvest: 'Harvest rice when the grains are firm and the stalks turn golden-yellow.',
    economics: 'Rice is a crucial crop for global food security and has significant economic importance in many countries.'
  },
  {
    name: 'Potato',
    image: 'https://example.com/images/potato.jpg',
    overview: 'Potatoes are versatile tuber vegetables grown worldwide for their nutritional value and culinary uses.',
    planting: 'Plant potato seed pieces 3-4 inches deep and 12-15 inches apart in rows.',
    care: 'Hill soil around plants as they grow, water consistently, and watch for pest issues.',
    harvest: 'Harvest potatoes when the plant tops begin to die back, typically 70-120 days after planting.',
    economics: 'Potatoes are a high-yield crop with significant economic value in both fresh and processed markets.'
  }
];

const seedDatabase = async () => {
  try {
    await connectDB();
    await Crop.deleteMany({});
    await Crop.insertMany(seedData);
    console.log('Database seeded successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();
