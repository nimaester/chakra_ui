import React from "react";
import { Box, Heading, Button } from "@chakra-ui/react";
import { happening } from "../data";

const Happening = () => {
  return (
    <Box>
      <Heading fontSize='3xl'>See what's happening</Heading>
      <Box d='flex' flexWrap='wrap' my={3}>
        {happening.map((event) => (
          <Button
            key={event.id}
            colorScheme='teal'
            p='3'
            size='lg'
            fontSize='xs'
            borderRadius='full'
            m={1}
            fontWeight='bold'
          >
            {event.title}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default Happening;
