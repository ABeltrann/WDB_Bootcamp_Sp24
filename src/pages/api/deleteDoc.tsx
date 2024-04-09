import clientPromise from '../../../lib/mongodb';

export default async function handle(req : any, res : any) {
  if (req.method === 'DELETE') {
    try {
      const docId = req.body.docId;
      const client = await clientPromise;

      const response = await client.db("notiom")
        .collection('documents')
        .deleteOne({ _id: docId });

      if (response) {
        res.status(200);
      } else {
        res.status(500);
      }
    } catch (e : any) {
      res.status(500).json({ error: e.message });
    }
  } else {
    res.status(500);
  }
}