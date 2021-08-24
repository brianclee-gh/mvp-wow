import React from 'react';
import { IconButton, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export default function ThemeSwitcher() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <IconButton
      aria-label="Toggle Theme"
      onClick={toggleColorMode}
      icon={colorMode === 'dark' ? <MoonIcon /> : <SunIcon />}
    />
  );
}
