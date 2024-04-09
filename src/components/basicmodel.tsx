import { AddIcon } from "@chakra-ui/icons";
import { IconButton, Button, Modal, ModalContent, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, FormControl, FormLabel, Input, ColorProps } from "@chakra-ui/react";
import React from "react";
import { MongoClient } from "mongodb";

function LimitString(total : String, limit : number){
  let returnString = ''
  for (let i = 0; i < limit; i++ ) {
    returnString += total.charAt(i)
  }

  return returnString
}

interface basicmodelProps {
  createDoc: (doc: { title: string; body: string }) => void;
}

export default function BasicModel({ createDoc = (doc : {title : string; body: string}) => {}} : basicmodelProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [value, setValue] = React.useState('')
    
    return (
      <>
        <IconButton onClick={onOpen} aria-label={""} icon={<AddIcon></AddIcon>} colorScheme={'blue'} height={'100px'} width={'100px'} >Open Modal</IconButton>
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create Doc</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>Text</FormLabel>
                <Input ref={initialRef} placeholder='Text' value={value} onChange={e => setValue((e.target as unknown as HTMLTextAreaElement).value)}  onInput={e => setValue((e.target as HTMLTextAreaElement).value)}/>
              </FormControl>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={()=> createDoc({ title: value,  body: value } )}>
                Save
              </Button>
              <Button onClick={()=> {setValue(''); onClose()}}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
