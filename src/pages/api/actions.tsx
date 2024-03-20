'use server'
// Replace the uri string with your MongoDB deployment's connection string.
  import { MongoClient, Timestamp } from "mongodb";
  const uri = "mongodb+srv://beltranalex2005:<2U7pp59AucZk7OIf>@cluster0.ummu5vn.mongodb.net/";
  
  const client = new MongoClient(uri);
  
  interface User {
    id: number;
    first_name: number;
    last_name: String;
    email: String;
  }
  interface Doc {
    // id: number;
    // user_id: number;
    // title: String;
    body: String;
    // created_at: number;
  }
const database = client.db("insertDB");
const Docs = database.collection<Doc>("mainDocs");
  async function addDoc( thisBody : String) {
    try {

      const result = await Docs.insertOne({body : thisBody});
      console.log(`A document was inserted with the _id: ${result.insertedId}`);
    } finally {
      await client.close();
    }
  }