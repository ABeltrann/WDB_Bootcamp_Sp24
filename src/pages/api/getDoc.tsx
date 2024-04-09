import { ObjectId } from 'mongodb';
import clientPromise from '../../../lib/mongodb';

export default async function handle(req : any, res : any) {
  if (req.method === 'GET') {
    try {
      const client = await clientPromise;

      const returnDocuments = await client.db('notiom')
        .collection('documents')
        .find({ user: process.env.NEXT_PUBLIC_USER_NAME })
        .toArray();

        res.status(200).json(returnDocuments);
    } catch (e : any) {
      res.status(500).json({ error: e.message });
    }
  } else {
    res.status(500);
  }
}