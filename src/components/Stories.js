import React from "react";
import {
  Container,
  Heading,
  Image,
  Box,
  Text,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { storiesData } from "../data";

const Stories = () => {
  return (
    <Container
      maxW='container.lg'
      d='flex'
      alignItems='center'
      flexDir='column'
      mb='10'
    >
      <Box maxW='container.sm' textAlign='center' mb={6}>
        <Heading fontSize='3xl'>Stories from Meetup</Heading>
        <Text my={6}>
          People on Meetup have fostered community, learned new skills, started
          businesses, and made life-long friends. Learn how.
        </Text>
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
        {storiesData.map((story) => (
          <GridItem
            _hover={{
              cursor: "pointer",
              opacity: "0.9",
            }}
            key={story.id}
          >
            <Image
              w='95%'
              objectFit='cover'
              src={story.image}
              alt='story_image'
            />
            <Box>
              <Heading my='4' fontSize='md'>
                {story.title}
              </Heading>
              <Text color='gray.500'>{story.info}</Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default Stories;
