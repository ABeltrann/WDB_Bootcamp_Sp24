import React from "react";
import {Heading} from "@chakra-ui/react";

export default function Hero() {
    return (
        <>
       <Heading size={'lg'} fontSize={'50px'} marginBottom={'50px'} textAlign={"center"} fontWeight={10} marginTop={'85px'}>
        Create. Explore
       </Heading>

              <Heading size={'md'} fontSize={'25px'} marginBottom={'50px'} textAlign={"center"} fontWeight={5}>
        The document editing software you've been waiting for
       </Heading>
       </>
    )
}