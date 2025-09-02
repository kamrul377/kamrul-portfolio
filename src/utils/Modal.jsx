
import { Modal, ModalContent, ModalBody, Text, useDisclosure, Button, ModalOverlay, ModalHeader, ModalCloseButton, ModalFooter, Kbd } from "@chakra-ui/react"
import React from "react"

const ModalComponent = ({ showDetails, setShowDetails }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()


    const OverlayTwo = ({ open }) => (
        <ModalOverlay
            bg='none'
            backdropFilter="blur(2px)"
            backdropInvert='70%'
            backdropBlur='2px'
        />
    )
    return <>



        <Modal blockScrollOnMount={false} isOpen={showDetails} onClose={setShowDetails} size={'4xl'}>
            <OverlayTwo />
            <ModalContent>
                <ModalHeader className="text-center text-red-600">Blogs</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <Text fontWeight='bold' mb='1rem'>
                        Update coming soon...
                    </Text>
                    <img className="w-full" src='https://images.pexels.com/photos/9963223/pexels-photo-9963223.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt="" />

                    <p>This is the blog section.I will update this section soon...</p>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={() => setShowDetails(false)}>
                        Close
                    </Button>
                    <Button variant='ghost'> 2nd choice</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
}

export default ModalComponent