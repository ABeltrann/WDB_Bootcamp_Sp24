import clientPromise from "../../../lib/mongodb";


export default async function handle(req:any, res:any) {
  if (req.method === 'POST') {
    try {
      const client = await clientPromise;
      const db = client.db('notiom');
      const response = await db
        .collection('documents')
        .insertOne(req.body);
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