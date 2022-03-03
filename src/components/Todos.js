import React from "react";
import { FiArrowRight } from "react-icons/fi";
import { GridItem, Image, Flex, Box, Container, Grid } from "@chakra-ui/react";
import { whatToDos } from "../data";

const Todos = () => {
  return (
    <Container maxW='container.lg'>
      <Grid
        templateColumns={{
          sm: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(3, 1fr)",
          base: "1fr",
        }}
        gap={4}
      >
        {whatToDos.map((todo) => (
          <GridItem
            key={todo.id}
            _hover={{
              cursor: "pointer",
              opacity: "0.9",
              textDecoration: "underline",
              textDecorationColor: "teal",
            }}
          >
            <Image
              w='100%'
              borderRadius='lg'
              src={todo.image}
              alt='image_one'
            />
            <Flex alignItems='center' mt={2} color='teal' fontWeight='bolder'>
              {todo.title}
              <Box ml={1}>
                <FiArrowRight />
              </Box>
            </Flex>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default Todos;
