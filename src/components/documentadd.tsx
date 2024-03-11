import React from "react";
import {Grid} from "@chakra-ui/react";
import BasicModel from "./basicmodel";
import TextModal from "./textmodal";

export default function DocumentAdder() {
    const documents: any[] = [];
    const text: String[] = [];
    return (
        <>
        <Grid templateColumns='repeat(8, 2fr)' gap={6}>
        <BasicModel></BasicModel>
        {documents.map((text)=><TextModal></TextModal>}
        </Grid>
       </>
    )
}