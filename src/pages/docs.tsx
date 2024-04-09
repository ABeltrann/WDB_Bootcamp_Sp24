import {createDocs} from "./api/createDoc";

let createDoc = new createDocs();

const username = encodeURIComponent("beltranalex2005");
const password = encodeURIComponent("2U7pp59AucZk7OIf");
const uri = "mongodb+srv://" + username + ":" + password  + "@cluster0.ummu5vn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// eslint-disable-next-line import/no-anonymous-default-export
export default async function (){
    const client = new MongoClient(uri);

    createDoc.createDoc({
        _id: "id",
        user_id: "hahha",
        title: "red cat",
        body: "blueCat",
        created_at: "123"
    }, client);
  }

