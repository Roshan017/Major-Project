import React from "react";
import { Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <footer>
      <Flex
        position={"relative"}
        top={"400px"}
        margin="0 auto"
        px={12}
        color="white"
        justifyContent="center"
        alignItems="center"
        maxWidth="100%"
        height={16}
        backgroundColor={"black"}
      >
        <p>Major Project • © 2025</p>
      </Flex>
    </footer>
  );
};
export default Footer;
