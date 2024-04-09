import { NotiomDoc } from "@/pages/docs";
import { AddIcon } from "@chakra-ui/icons";
import { IconButton, Button, Modal, ModalContent, ModalOverlay, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, useDisclosure, FormControl, FormLabel, Input, ColorProps, Textarea } from "@chakra-ui/react";
import axios from "axios";
import React from "react";

interface TextModalProps {
  doc: NotiomDoc;
  deleteDoc: () => void;
  updateState: (doc : any) => void;
}
function LimitString(total : String, limit : number){
  let returnString = ''
  for (let i = 0; i < limit; i++ ) {
    returnString += total.charAt(i)
  }
}

export default function TextModal({ doc, deleteDoc: deleteDoc, updateState } : TextModalProps) {
    const { isOpen, onOpen, onClose } = useDisclosure()
  
    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)
    const [value, setValue] = React.useState('')

    const updateDoc = async () => {
      const updatedDoc = {
        _id: doc._id, 
        title: LimitString(value, 10),
        body: value, 
      };
  
      try {
        axios.get('/api/createDoc' , {
          method: 'UPDATE',
          params: updatedDoc
        }).then((response) => {
          updateState(response.data);
      })
      } catch (error) {
        console.error('error updating the document:', error);
      }
    };
  
    return (
      <>
        <Button onClick={onOpen} aria-label={""} colorScheme={'blue'} height={'100px'} width={'100px'}>{doc.title}</Button>
  
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
            <Textarea
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            </ModalBody>
            <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() => {
                updateDoc();
                onClose();
              }}
            >
              Save
            </Button>
            <Button
              variant="ghost"
              onClick={() => {
                deleteDoc();
                onClose();
              }}
            >
              Discard Doc
            </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }