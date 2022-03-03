import React from "react";
import { Box, Text, Image, Flex } from "@chakra-ui/react";
import fbIcon from "../assets/fb.svg";
import twitterIcon from "../assets/twitter.svg";
import youtubeIcon from "../assets/youtube.svg";
import instagramIcon from "../assets/instagram.svg";

const FollowUsFooter = () => {
  return (
    <Box maxW='container.lg' my='6'>
      <Text fontSize='md' mr='6' fontWeight='600'>
        Create your own Meetup group.
      </Text>
      <Flex
        justifyContent='space-between'
        alignItems='center'
        wrap={{
          sm: "wrap",
          md: "no-wrap",
          lg: "no-wrap",
          xl: "no-wrap",
          base: "wrap",
        }}
      >
        <Flex gap='6' mt='6' mr='6'>
          <Image
            _hover={{ cursor: "pointer" }}
            src={fbIcon}
            alt='facebook_icon'
            width='1.6rem'
          />
          <Image
            _hover={{ cursor: "pointer" }}
            src={twitterIcon}
            alt='twitter_icon'
            width='1.6rem'
          />
          <Image
            _hover={{ cursor: "pointer" }}
            src={youtubeIcon}
            alt='youtube_icon'
            width='1.6rem'
          />
          <Image
            _hover={{ cursor: "pointer" }}
            src={instagramIcon}
            alt='instagram_icon'
            width='1.6rem'
          />
        </Flex>

        <Flex
          mt={{
            sm: "6",
            md: "0",
            lg: "0",
            xl: "0",
            base: "6",
          }}
        >
          <Image
            _hover={{ cursor: "pointer" }}
            src='https://secure.meetupstatic.com/next/images/app-download/android/download_en-US.svg?w=256'
            alt='ios_store_logo'
            mx={1}
          />

          <Image
            _hover={{ cursor: "pointer" }}
            src='https://secure.meetupstatic.com/next/images/app-download/ios/download_en-US.svg?w=384'
            alt='ios_store_logo'
            mx={1}
          />
        </Flex>
      </Flex>
    </Box>
  );
};

export default FollowUsFooter;
