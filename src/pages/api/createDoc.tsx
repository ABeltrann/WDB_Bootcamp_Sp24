import clientPromise from "../../../lib/mongodb";


export default async function handle(req:any, res:any) {
  if (req.method === 'POST') {
    try {
      const client = await clientPromise;
      const response = await client.db("notiom")
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
