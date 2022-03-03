import React from "react";
import greenBlob from "../assets/green-blob.svg";
import redBlob from "../assets/red-blob.svg";
import smallRedBlob from "../assets/yellow-blob.svg";
import { Image } from "@chakra-ui/react";

const Background = () => {
  return (
    <>
      <Image
        position='absolute'
        top='0'
        right='5'
        zIndex='-1'
        src={greenBlob}
        alt='blob'
      />

      <Image
        position='absolute'
        top='10%'
        left='50%'
        zIndex='-5'
        src={redBlob}
        alt='blob'
        transform='translateX(-50%)'
      />

      <Image
        position='absolute'
        top='20%'
        left='5'
        zIndex='-7'
        src={smallRedBlob}
        alt='blob'
      />
    </>
  );
};

export default Background;
