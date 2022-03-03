import React from "react";
import { Container, Heading, Image, Box, Flex } from "@chakra-ui/react";
import leftImage from "../assets/device-left.webp";
import rightImage from "../assets/device-right.webp";
import logo from "../assets/meetup-logo.svg";

const StayConnected = () => {
  return (
    <Container maxW='container.lg' my='10rem'>
      <Flex
        justifyContent={{
          sm: "center",
          md: "space-between",
          lg: "space-between",
          xl: "space-between",
          base: "center",
        }}
      >
        <Image
          src={leftImage}
          alt='left_image_logo'
          display={{
            sm: "none",
            md: "block",
            lg: "block",
            xl: "block",
            base: "none",
          }}
        />
        <Box
          d='flex'
          justifyContent='center'
          flexDir='column'
          alignItems='center'
        >
          <Image src={logo} alt='brand_logo' />
          <Box my={10} textAlign='center'>
            <Heading fontSize='lg'>Stay connected.</Heading>
            <Heading fontSize='lg'>Download the app.</Heading>
          </Box>

          <Flex>
            <Image
              _hover={{ cursor: "pointer" }}
              src='https://secure.meetupstatic.com/next/images/app-download/ios/download_en-US.svg?w=384'
              alt='ios_store_logo'
              mx={1}
              w={{
                sm: "9rem",
                md: "7rem",
                lg: "9rem",
                xl: "9rem",
                base: "9rem",
              }}
            />
            <Image
              _hover={{ cursor: "pointer" }}
              src='https://secure.meetupstatic.com/next/images/app-download/android/download_en-US.svg?w=256'
              alt='ios_store_logo'
              mx={1}
              w={{
                sm: "9.5rem",
                md: "7.5rem",
                lg: "9.5rem",
                xl: "9.5rem",
                base: "9.5rem",
              }}
            />
          </Flex>
        </Box>
        <Image
          src={rightImage}
          alt='right_image_logo'
          display={{
            sm: "none",
            md: "block",
            lg: "block",
            xl: "block",
            base: "none",
          }}
        />
      </Flex>
    </Container>
  );
};

export default StayConnected;
