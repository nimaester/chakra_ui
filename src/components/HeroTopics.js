import React from "react";
import { heroTopics } from "../data";
import { Container, Button } from "@chakra-ui/react";

const HeroTopics = () => {
  return (
    <Container
      maxW='container.lg'
      d='flex'
      justifyContent={{
        sm: "left",
        md: "left",
        lg: "space-between",
        xl: "space-between",
        base: "left",
      }}
      my={10}
      flexWrap='wrap'
    >
      {heroTopics.map((topic) => (
        <Button
          key={topic.id}
          colorScheme='teal'
          p={4}
          size='lg'
          fontSize='xs'
          borderRadius='full'
          m={{
            sm: "1",
            md: "1",
            lg: "0",
            xl: "0",
            base: "1",
          }}
        >
          {topic.title}
        </Button>
      ))}
    </Container>
  );
};

export default HeroTopics;
