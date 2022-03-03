import React from "react";
import { Box, Image, Button, Flex } from "@chakra-ui/react";

import brandLogo from "../assets/brand-logo.svg";
import { BsGlobe } from "react-icons/bs";

const Header = () => {
  return (
    <Box
      d='flex'
      align-items='center'
      justifyContent='space-between'
      ml={6}
      mr={6}
    >
      <Box>
        <Image boxSize='90px' src={brandLogo} />
      </Box>
      <Flex>
        <Box d='flex' alignItems='center'>
          <BsGlobe />
          <Button
            ml={1}
            mr={3}
            fontSize='0.8rem'
            color='gray.600'
            variant='link'
            fontWeight='600'
            _focus={{ outline: "none" }}
            _hover={{ color: "teal.600" }}
            _active={{ transform: "scale(1.1)" }}
          >
            English
          </Button>
        </Box>

        <Button
          pr={3}
          fontSize='0.8rem'
          color='gray.600'
          variant='link'
          fontWeight='600'
          _focus={{ outline: "none" }}
          _hover={{ color: "teal.600" }}
          _active={{ transform: "scale(1.1)" }}
        >
          Log In
        </Button>

        <Button
          fontSize='0.8rem'
          color='gray.600'
          variant='link'
          fontWeight='600'
          _focus={{ outline: "none" }}
          _hover={{ color: "teal.600" }}
          _active={{ transform: "scale(1.1)" }}
        >
          Sign Up
        </Button>
      </Flex>
    </Box>
  );
};

export default Header;
