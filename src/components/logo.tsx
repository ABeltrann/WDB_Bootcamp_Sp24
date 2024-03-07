import React from "react";
import { Box, Image} from "@chakra-ui/react";

export default function Logo() {
    return (
        <Box bgSize={"sm"} >
            <Image boxSize={50} src="https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" alt='Notiom Logo' />
        </Box>
    )
}