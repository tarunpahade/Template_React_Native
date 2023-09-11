import { MongoClient, ObjectId, Timestamp } from "mongodb";

const uri=process.env.MONGODB_URL
const client = new MongoClient(uri!, {
    connectTimeoutMS: 30000, 
  });
 
 const db = client.db("fitness_app");
  const Users = db.collection("muscle");