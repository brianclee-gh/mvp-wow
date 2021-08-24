/* eslint-disable import/extensions */
import React, { useState } from 'react';
import axios from 'axios';
import {
  ChakraProvider, Button, Flex, Heading, useDisclosure, Modal, ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import Header from './Header.jsx';
import Search from './Search.jsx';
import classes from '../helpers/legend';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [character, setCharacter] = useState('');
  const [items, setItems] = useState('');
  const [loaded, setLoaded] = useState(false);

  const getCharacterData = () => {
    axios.get('/character')
      .then((data) => {
        setCharacter(data.data.character);
        setItems(data.data.character.gameData.items.equipped_items);
        // setLoaded(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <ChakraProvider>
      <div className="app">
        <Header />
        <Flex>
          <Button onClick={getCharacterData}>Get Character Data</Button>
          <Button onClick={onOpen}>Open Modal</Button>
          <Modal isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Search Character</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Search />
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                {/* <Button variant="ghost">Secondary Action</Button> */}
              </ModalFooter>
            </ModalContent>

          </Modal>

        </Flex>
        {items.length > 0 && Object.keys(character).length > 0 ? (
          <Flex>
            <Heading>{character.name}</Heading>
            {' '}
            Level
            {' '}
            {character.level}
            {' '}
            {character.gameData.talents.active_specialization.name}
            {' '}
            {classes[character.classID]}
          </Flex>
        ) : ''}
      </div>
    </ChakraProvider>
  );
}

export default App;
