import React, { useId, useState } from "react";
import {Grid} from "@chakra-ui/react";
import BasicModel from "./basicmodel";
import TextModal from "./textmodal";

export default function DocumentAdder() {
    const documents: any[] = [];
    const [value , setValue] = React.useState()
    const handleChange = (event:any) => setValue(event.target.value)
    const [input, setInput] = useState<Array<{value: string}>>([])
    const id = useId();
    return (
        <>
        <Grid templateColumns='repeat(8, 2fr)' gap={6}>
        <BasicModel input={input}  setInput = {setInput} ></BasicModel>
        {input.map((input)=><TextModal key={1} text={input.value}></TextModal>)}
        <TextModal text={'loremsiafhdsfhpdsahfdpis'}></TextModal>
        </Grid>
    
       </>
    )
}