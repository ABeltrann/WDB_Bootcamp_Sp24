import React, { useId, useState } from "react";
import {Grid} from "@chakra-ui/react";
import BasicModel from "./basicmodel";
import TextModal from "./textmodal";
import { createContext } from "vm";

export default function DocumentAdder() {
    const documentContext = createContext()
    const [input, setInput] = useState<Array<string>>([])
    const handleClick = ( value : string, input : Array<string>) => {
        setInput((input) => [...input, value ])


      }
    return (
        <>
        <Grid templateColumns='repeat(8, 2fr)' gap={6}>
        <BasicModel createCard={handleClick} input = {input}></BasicModel>
        {input.map((input)=><TextModal key={1} text={input}></TextModal>)}
        </Grid>
        </>
    )
}

