import mongoose from 'mongoose';
import 'dotenv/config';

const MongoURL:string = process.env.MONGO_URI || 'mongodb://mongodb:27017/usercontrol';

const connection = (mongoDbURI = process.env.MONGO_URI || MongoURL,
) => mongoose.connect(mongoDbURI);

export default connection;