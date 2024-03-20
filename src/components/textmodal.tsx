import { AddIcon } from "@chakra-ui/icons";
import { IconButton, Button, Modal, ModalContent, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, FormControl, FormLabel, Input, ColorProps } from "@chakra-ui/react";
import React from "react";

export default function TextModal({text }: {text : String}) {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [value, setValue] = React.useState('')
    
    function LimitString(total : String, limit : number){
      let returnString = ''
      for (let i = 0; i < limit; i++ ) {
        returnString += total.charAt(i)
      }

      return returnString

    }
  
    return (
      <>
        <Button onClick={onOpen} aria-label={""} colorScheme={'blue'} height={'100px'} width={'100px'}>{LimitString(text, 10)}</Button>
  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>{text}</FormLabel>
              </FormControl>
  

            </ModalBody>
  
            <ModalFooter>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }