/* eslint-disable import/extensions */
import React from 'react';
import { Flex, Text, Heading, useColorModeValue } from '@chakra-ui/react';
import ThemeSwitcher from '../helpers/ThemeSwitcher.jsx';

function Header() {
  const headerBackground = useColorModeValue('gray.100', 'gray.700');
  return (
    <Flex
      justify="space-between"
      p={6}
      backgroundColor={headerBackground}
    >
      <Heading>
        wow.gg
      </Heading>
      <ThemeSwitcher />
    </Flex>
  );
}

export default Header;
