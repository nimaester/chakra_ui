import React from "react";
import {
  Grid,
  Container,
  Heading,
  GridItem,
  Image,
  Box,
  Link,
  Text,
} from "@chakra-ui/react";
import { upcomingData } from "../data";
import videoIcon from "../assets/video.svg";
import uploadIcon from "../assets/upload.svg";

const Upcoming = () => {
  return (
    <Container maxW='container.lg' my={10}>
      <Box d='flex' justifyContent='space-between' alignItems='center'>
        <Heading my={10} fontSize='3xl'>
          Upcoming events
        </Heading>
        <Link color='teal'>Explore more events</Link>
      </Box>

      <Grid
        d='grid'
        gridTemplateColumns={{
          sm: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
          xl: "repeat(4, 1fr)",
          base: "1fr",
        }}
        gap={{
          sm: "6",
          md: "10",
          lg: "4",
          xl: "4",
          base: "6",
        }}
      >
        {upcomingData.map((event) => (
          <GridItem
            d='flex'
            flexDir='column'
            key={event.id}
            _hover={{
              cursor: "pointer",
              opacity: "0.9",
            }}
          >
            <Image
              border='1px solid #a8b3b5'
              borderRadius='lg'
              src={event.image}
              alt='upcoming_one'
            />
            <Box
              borderRadius='md'
              border='1px solid #a8b3b5'
              d='flex'
              position='absolute'
              backgroundColor='white'
              mt='1'
              ml='1'
            >
              <Image ml='1' src={videoIcon} alt='video_svg' />
              <Text
                color='gray'
                ml='1'
                mr='2'
                fontSize='0.7rem'
                fontWeight='800'
              >
                Online Event
              </Text>
            </Box>

            <Heading py={3} fontSize='sm' color='#B0A391'>
              {event.date}
            </Heading>
            <Text fontWeight='600' minH='6rem'>
              {event.title}
            </Text>

            <Box d='flex' justifyContent='space-between' bottom='0'>
              <Box d='flex' ml={3} alignItems='center'>
                {event.reviews.map((pic, i) => (
                  <Image
                    key={i}
                    w='1.5rem'
                    borderRadius='full'
                    src={pic.image}
                    alt='user_profile'
                    border='2px solid white'
                    zIndex={`-${pic.id}`}
                    ml={-3}
                  />
                ))}
                <Text color='gray' ml={1} fontSize='sm'>
                  {event.numberOfReviews}
                </Text>
              </Box>
              <Image src={uploadIcon} alt='upload_icon' />
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Container>
  );
};

export default Upcoming;
