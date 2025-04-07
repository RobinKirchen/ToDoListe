import "./env.js";
import {MongoClient} from "mongodb"

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

export const connectToDatabase = async () => {
  try{
    await client.connect();
    console.log("Connected to the database")
  } catch (err) {
    console.error(`Error connecting to the databse ${err}`);
  }
};
