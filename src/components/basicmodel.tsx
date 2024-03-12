import { AddIcon } from "@chakra-ui/icons";
import { IconButton, Button, Modal, ModalContent, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, FormControl, FormLabel, Input, ColorProps } from "@chakra-ui/react";
import React, { Dispatch, PropsWithRef, SetStateAction, useId, useState } from "react";

export default function BasicModel( { input }: { input: { value: string; }[]}, {setInput} : {setInput: React.SetStateAction<{
  value: string;
}[]>}) {
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
              <Button colorScheme='blue' mr={3} onClick={()=> setInput((input) => [...input, { value: value }])}>
                Save
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
