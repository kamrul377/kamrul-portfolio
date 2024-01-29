
import { Modal, ModalContent, ModalBody, Text, useDisclosure, Button, ModalOverlay, ModalHeader, ModalCloseButton, ModalFooter } from "@chakra-ui/react"
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
                        Update this section soon...
                    </Text>
                    <img className="w-full" src='https://images.pexels.com/photos/9963223/pexels-photo-9963223.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load' alt="" />

                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt sit animi nam officia veritatis cupiditate. Reprehenderit adipisci quos deleniti sed, modi ipsum eos nulla nesciunt harum nobis consequatur omnis illum perferendis repudiandae aspernatur dolorum sequi officiis voluptates mollitia maiores suscipit aut! Beatae incidunt animi provident? Repudiandae, ratione temporibus sit, cumque expedita ex enim deleniti placeat cupiditate adipisci perspiciatis, odit fuga doloremque? Sequi, iste qui delectus molestias, nulla rerum cupiditate error iusto, commodi accusamus porro reprehenderit perspiciatis mollitia in ipsa. Neque possimus totam, sequi explicabo incidunt a? Laudantium quidem repellat reprehenderit error, doloribus deleniti quasi similique, ea inventore necessitatibus corporis minima.</p>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3} onClick={() => setShowDetails(false)}>
                        Close
                    </Button>
                    <Button variant='ghost'>Secondary Action</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </>
}

export default ModalComponent