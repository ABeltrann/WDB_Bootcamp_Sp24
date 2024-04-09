import { ObjectId } from "mongodb";
import clientPromise from "../../../lib/mongodb";


export default async function handle(req:any, res:any) {
  if (req.method === 'UPDATE') {
    try {
      const client = await clientPromise;
      const docid = req.body._id;
      const title = req.body.title;
      const text = req.body.body;


      const response = await client.db("notiom")
        .collection('documents')
        .updateOne(
          { _id: docid },
          {  body: text, title: title  },
        );
      if (response) {
        res.status(200);
      } else {
        res.status(500);
      }
    } catch (e :any) {
      res.status(500);
    }
  } else {
    res.status(500);
  }
}
