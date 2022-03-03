import React from "react";
import {
  Container,
  Box,
  Heading,
  Grid,
  GridItem,
  Link,
  Image,
  Text,
  Flex,
} from "@chakra-ui/react";
import { popularData } from "../data";

const Popular = () => {
  return (
    <Container maxW='container.lg' my={10}>
      <Box d='flex' justifyContent='space-between' alignItems='center'>
        <Heading my={10} fontSize='3xl'>
          Popular groups
        </Heading>
        <Link color='teal'>Explore more groups</Link>
      </Box>
      <Grid
        gridTemplateColumns={{
          sm: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(3, 1fr)",
          base: "1fr",
        }}
        gap={4}
      >
        {popularData.map((popData) => (
          <GridItem
            border='1px solid #a8b3b5'
            p={3}
            borderRadius='md'
            key={popData.id}
            _hover={{
              cursor: "pointer",
              opacity: "0.9",
            }}
          >
            <Flex alignItems='center' mb={3}>
              <Image
                borderRadius='md'
                maxW='3.5rem'
                src={popData.image}
                alt='popular_image'
              />
              <Heading fontSize='lg' ml='2'>
                {popData.title}
              </Heading>
            </Flex>
            <hr />
            <Box>
              <Heading py={3} fontSize='sm' color='#B0A391'>
                {popData.date}
              </Heading>
              <Text fontSize='sm' fontWeight='600'>
                {popData.info}
              </Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default Popular;
