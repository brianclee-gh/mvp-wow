import React, { useState } from 'react';
import {
  FormControl, FormLabel,
  FormErrorMessage,
  FormHelperText, Input, Button, Flex,
} from '@chakra-ui/react';

function Search() {
  const [name, setName] = useState('');
  const [server, setServer] = useState('');

  const handleSubmit = () => {
    console.log('hi');
  };

  const handleNameInput = (value) => {
    setName(value);
  };

  const handleServerInput = (value) => {
    setServer(value);
  };

  return (
    <FormControl onSubmit={handleSubmit} id="search">
      <FormLabel>Enter a valid character name and server</FormLabel>
      <Input onChange={(e) => handleNameInput(e.target.value)} id="name" mb={3} variant="filled" type="search" placeholder="Character name" />
      <Input onChange={(e) => handleServerInput(e.target.value)} id="server" mb={3} variant="filled" type="search" placeholder="Server" />
      {/* <FormHelperText>We'll never share your email.</FormHelperText> */}
      <Flex>
        <Button color="white" backgroundColor="teal" mt={3}>Search</Button>
      </Flex>
    </FormControl>
  );
}

export default Search;
