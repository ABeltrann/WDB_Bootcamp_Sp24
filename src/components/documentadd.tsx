import React from "react";
import {Grid} from "@chakra-ui/react";
import BasicModel from "./basicmodel";

export default function DocumentAdder() {
    return (
        <>
        <Grid templateColumns='repeat(8, 2fr)' gap={6}>
        <BasicModel></BasicModel>
        </Grid>
       </>
    )
}