// import { Doc } from "../docs";
// import { ObjectId } from "mongodb";
// import clientPromise from "../../../lib/mongodb";

// export const updateDoc = async (doc: Doc): Promise<ObjectId> => {
//     const mongoClient = await clientPromise;
//     const response = await mongoClient
//         .db()
//         .collection('documents')
//         .updateOne(doc);

//     return response.insertedId;
// };