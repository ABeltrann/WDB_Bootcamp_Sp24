import React from "react"
import {Flex, Box, Button, Center} from "@chakra-ui/react"
import Logo from "./logo"
import { Text } from "@chakra-ui/react"
export default function Navbar() {
    return <Flex justifyContent={"space-between"} alignItems={"center"} marginTop={'20px'} >
        <Flex justifyContent={"space-evenly"} alignItems={"center"}>
            <Logo></Logo>
            <Text marginLeft={'10px'} >Notiom</Text>
        </Flex>
        <Button colorScheme='blue'>Create</Button>
    </Flex>
}
