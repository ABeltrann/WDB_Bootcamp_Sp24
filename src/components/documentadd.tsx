import React, { useId, useState } from "react";
import {Grid} from "@chakra-ui/react";
import BasicModel from "./basicmodel";
import TextModal from "./textmodal";
import createDoc from "@/pages/api/createDoc";
import { MongoClient, ObjectId } from "mongodb";
import axios, { Axios } from "axios";

export interface Doc {
    _id: ObjectId;
    user: string;
    title: string;
    body: string;
  }


interface DocumentAdderProps {
    documents: Doc[];
  }
  
  export default function DocumentAdder({documents}: DocumentAdderProps) {
    const [allDocs, setAllDocs] = useState<Doc[]>(documents);
  
    const addDoc = async (newDoc: { title: string; body: string }) => {
      try {
        const docToCreate = {
          user: process.env.NEXT_PUBLIC_USER_NAME,
          title: newDoc.title,
          body: newDoc.body,
        };
  
        // Make the POST request to your API endpoint
        axios.get('/api/createDoc' , {
            method: 'POST',
            params: JSON.stringify(docToCreate)
          }).then((response) => {
            setAllDocs((prevDocs) => [...prevDocs, response.data])
        })
  
      } catch (error) {
        console.error('didnt create doc', error);
      }
    };
  
    const deleteDoc = async (docId: string) => {
      try {
        // Make the DELETE request to your API endpoint
        axios.get('/api/createDoc' , {
            method: 'DELETE',
            params: JSON.stringify(docId)
          }).then((response) => {
            setAllDocs(allDocs.filter((doc) => doc._id.toString() !== docId));
        })
      } catch (error) {
        // Handle the error state appropriately
        console.error('There was an error deleting the document:', error);
      }
    };

    const updateState = (updatedDoc : any) => {
        setAllDocs(prevDocs => prevDocs.map(doc => doc._id === updatedDoc._id ? updatedDoc : doc))
    }
    return (
        <>
        <Grid templateColumns='repeat(8, 2fr)' gap={6}>
        <BasicModel createDoc={addDoc} ></BasicModel>
        {allDocs.map((doc, _) => {
        return (
          <TextModal
            updateState={() => {
                updateState
            }}
            doc={doc}
            key={doc._id.toString()}
            deleteDoc={() => {
              deleteDoc(doc._id.toString());
            }}
          />
        );
      })}
        
        </Grid>
        </>
    )


  }