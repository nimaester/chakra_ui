import React from "react";
import {
  Container,
  Box,
  Text,
  Button,
  Grid,
  GridItem,
  Flex,
} from "@chakra-ui/react";
import FollowUsFooter from "./FollowUsFooter";

const account = ["Sign up", "Log in", "Help"];

const discover = [
  "Groups",
  "Calendar",
  "Topics",
  "Cities",
  "Online Events",
  "Local Guides",
];

const meetup = ["About", "Blog", "Meetup Pro", "Careers", "Apps"];

const Footer = () => {
  return (
    <Box fontSize='0.8rem' mt={40} backgroundColor='#212121' color='gray.400'>
      <Container maxW='container.lg' py='10'>
        <Box
          mb='6'
          display={{
            sm: "block",
            md: "inline-flex",
            lg: "inline-flex",
            xl: "inline-flex",
            base: "block",
          }}
          alignItems='center'
        >
          <Text fontSize='md' mr={6} fontWeight='600'>
            Create your own Meetup group.
          </Text>
          <Button
            _focus={{ outline: "none" }}
            _active={{ backgroundColor: "transparent" }}
            _hover={{ backgroundColor: "transparent" }}
            border='1px solid white'
            backgroundColor='#212121'
            fontSize='sm'
            p={4}
            mt={{
              sm: "6",
              md: "0",
              lg: "0",
              xl: "0",
              base: "6",
            }}
          >
            Get Started
          </Button>
        </Box>
        <hr />

        <Grid
          mt={6}
          gridTemplateColumns={{
            sm: "2fr",
            md: "repeat(3, 1fr)",
            lg: "repeat(3, 1fr)",
            xl: "repeat(3, 1fr)",
            base: "1fr",
          }}
        >
          <GridItem>
            <Text fontWeight='600'>Your Account</Text>
            {account.map((opt, i) => (
              <Text
                key={i}
                _hover={{ color: "gray", cursor: "pointer" }}
                lineHeight='1.8'
              >
                {opt}
              </Text>
            ))}
          </GridItem>

          <GridItem>
            <Text
              fontWeight='600'
              pt={{
                sm: "6",
                md: "0",
                lg: "0",
                xl: "0",
                base: "6",
              }}
            >
              Discover
            </Text>
            {discover.map((opt, i) => (
              <Text
                key={i}
                _hover={{ color: "gray", cursor: "pointer" }}
                lineHeight='1.8'
              >
                {opt}
              </Text>
            ))}
          </GridItem>
          <GridItem>
            <Text
              pt={{
                sm: "6",
                md: "0",
                lg: "0",
                xl: "0",
                base: "6",
              }}
              fontWeight='600'
            >
              Meetup
            </Text>
            {meetup.map((opt, i) => (
              <Text
                key={i}
                _hover={{ color: "gray", cursor: "pointer" }}
                lineHeight='1.8'
              >
                {opt}
              </Text>
            ))}
          </GridItem>
        </Grid>
        <FollowUsFooter />
        <Flex
          gap='6'
          flexDir={{
            sm: "column",
            md: "row",
            lg: "row",
            xl: "row",
            base: "column",
          }}
        >
          <Text _hover={{ color: "gray", cursor: "pointer" }}>2022 Meetup</Text>
          <Text _hover={{ color: "gray", cursor: "pointer" }}>
            Terms of Service
          </Text>
          <Text _hover={{ color: "gray", cursor: "pointer" }}>
            Privacy Policy
          </Text>
          <Text _hover={{ color: "gray", cursor: "pointer" }}>
            Cookie Policy
          </Text>
          <Text _hover={{ color: "gray", cursor: "pointer" }}>Help</Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
