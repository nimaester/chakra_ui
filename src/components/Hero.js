import React from "react";
import SearchBox from "./SearchBox";
import Happening from "./Happening";
import Background from "./Background";
import Todos from "./Todos";
import HeroTopics from "./HeroTopics";
import { Box, Image, Container, Heading } from "@chakra-ui/react";
import illustration from "../assets/illustration.svg";

const Hero = () => {
  return (
    <>
      <Container maxW='container.lg'>
        <Box
          d='flex'
          alignItems='center'
          py='20'
          flexDirection={{
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
            base: "column",
          }}
        >
          <Box flex='1'>
            <Heading>
              <Box fontSize='4xl'>
                Celebrating 20 years of real connections on Meetup
              </Box>
            </Heading>
            <Box mt='6' fontWeight='medium'>
              Whatever you’re looking to do this year, Meetup can help. For 20
              years, people have turned to Meetup to meet people, make friends,
              find support, grow a business, and explore their interests.
              Thousands of events are happening every day—join the fun.
            </Box>
          </Box>
          <Box flex='1'>
            <Image
              w='100vw'
              mt={{
                sm: "10",
                md: "10",
                lg: "0",
                xl: "0",
                base: "10",
              }}
              src={illustration}
              alt='illustration'
            />
          </Box>
        </Box>
      </Container>

      <Todos />
      <HeroTopics />

      <Container
        my='5rem'
        maxW='container.lg'
        d='flex'
        flexDir={{
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
          base: "column",
        }}
        gap={10}
      >
        <SearchBox />
        <Happening />
        <Background />
      </Container>
    </>
  );
};

export default Hero;
