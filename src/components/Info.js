import React from "react";
import {
  Box,
  Container,
  Heading,
  Text,
  Grid,
  GridItem,
  Image,
  Button,
} from "@chakra-ui/react";
import { infoData } from "../data";

const Info = () => {
  return (
    <Container
      maxW='container.lg'
      d='flex'
      alignItems='center'
      flexDirection='column'
      my={10}
    >
      <Box textAlign='center' maxW='container.sm' px={10}>
        <Heading fontSize='3xl'>How Meetup works</Heading>
        <Text my={6}>
          Meet new people who share your interests through online and in-person
          events. It's free to create an account.
        </Text>
      </Box>
      <Grid
        maxW='container.lg'
        w='100%'
        templateColumns={{
          sm: "1",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
          xl: "repeat(3, 1fr)",
          base: "1",
        }}
        gap={10}
        my={10}
      >
        {infoData.map((info) => (
          <GridItem
            d='flex'
            alignItems='center'
            flexDirection='column'
            key={info.id}
          >
            <Image maxW={150} src={info.image} alt='join_a_group' />
            <Heading
              _hover={{ textDecoration: "underline", cursor: "pointer" }}
              fontSize='lg'
              color='teal'
              fontWeight='900'
            >
              {info.title}
            </Heading>
            <Text mt={6} textAlign='center' fontSize='sm'>
              {info.info}
            </Text>
          </GridItem>
        ))}
      </Grid>
      <Button colorScheme='teal'>Join Meetup</Button>
    </Container>
  );
};

export default Info;
