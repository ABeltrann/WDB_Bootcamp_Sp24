import React, { useId, useState } from "react";
import {Grid} from "@chakra-ui/react";
import BasicModel from "./basicmodel";
import TextModal from "./textmodal";

export default function DocumentAdder() {
    const [input, setInput] = useState<Array<string>>([])
    function handleClick(value : string, input : Array<string>) {
        setInput((input) => [...input, value ])
      }
    return (
        <>
        <Grid templateColumns='repeat(8, 2fr)' gap={6}>
        <BasicModel input={input} ></BasicModel>
        {input.map((input)=><TextModal key={1} text={input}></TextModal>)}
        <TextModal text={'loremsiafhdsfhpdsahfdpis'}></TextModal>
        </Grid>
    y
       </>
    )
}

function handleClick() {
    throw new Error("Function not implemented.");
}
