import mongoose from 'mongoose';

export const connectMongoSwim = async () => mongoose.connect("mongodb://localhost:27017/swimdb", {family: 4}) 
export const connectMongoDuck = async () => mongoose.createConnection("mongodb://localhost:27017/leekduck", {family: 4})