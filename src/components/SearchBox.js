import React from "react";
import {
  Box,
  Heading,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
} from "@chakra-ui/react";
import { HiLocationMarker } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";

const SearchBox = () => {
  return (
    <Box>
      <Heading fontSize='3xl'>What do you want to do?</Heading>
      <InputGroup outline='none' color='gray' my={5} gap={3}>
        <InputGroup>
          <InputLeftElement children={<AiOutlineSearch />} />
          <Input
            _focus={{ outline: "none" }}
            type='text'
            placeholder='Search for tennis'
          />
        </InputGroup>

        <InputGroup>
          <InputLeftElement children={<HiLocationMarker />} />
          <Input
            _focus={{ outline: "none" }}
            type='text'
            placeholder='Location'
          />
        </InputGroup>
      </InputGroup>
      <Button minW='100%' colorScheme='red'>
        Search
      </Button>
    </Box>
  );
};

export default SearchBox;
