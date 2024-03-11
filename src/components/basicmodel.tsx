import { AddIcon } from "@chakra-ui/icons";
import { IconButton, Button, Modal, ModalContent, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, FormControl, FormLabel, Input, ColorProps } from "@chakra-ui/react";
import React, { useId, useState } from "react";

export default function BasicModel() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [value, setValue] = React.useState('')
    const handleChange = (event:any) => setValue(event.target.value)
    const [input, setInput] = useState();
    const id = useId();
    
  
    return (
      <>
        <IconButton onClick={onOpen} aria-label={""} icon={<AddIcon></AddIcon>} colorScheme={'blue'} height={'100px'} width={'100px'}>Open Modal</IconButton>
  
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
                <Input id={id} ref={initialRef} placeholder='Text' value={input}  onInput={e => setInput(e.target.value)}/>
              </FormControl>
  

            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
