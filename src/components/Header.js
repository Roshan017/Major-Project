import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  Box,
  HStack,
  Text,
  VStack,
  Image,
  Button,
  Collapse,
} from "@chakra-ui/react";

import "../styles/header.css";
import logo from "../images/logo.png";
import { useState } from "react";

const socials = [
  {
    icon: faPhone,
    value: "9X8X4X0X6X",
  },
  {
    icon: faEnvelope,
    value: "agrivisionAdmin@gmail.com",
  },
];

export default function Header() {
  const [showSocials, setShowSocials] = useState(false);

  const toggleSocials = () => {
    setShowSocials(!showSocials);
  };

  return (
    <Box
      className="header-box"
      position="relative"
      top={"20px"}
      left={0}
      right={0}
      height="120px"
      backgroundSize="cover"
      backgroundPosition="center"
      zIndex={1}
      display="flex"
      alignItems="center"
      px={4}
      color="white"
    >
      <HStack justifyContent="space-between" width="100%">
        <HStack>
          <Image src={logo} alt="Logo" boxSize={"70px"} />
          <Text
            as="h1"
            fontSize="lg"
            className="header-title"
            fontWeight="bold"
          >
            AGRIVISION
          </Text>
        </HStack>

        <VStack alignItems="flex-end">
          <Button
            position={"relative"}
            onClick={toggleSocials}
            colorScheme="teal"
            size="lg"
            className="contact-button"
          >
            Contact Us
          </Button>
          <Collapse in={showSocials} animateOpacity>
            <VStack
              className="social-div"
              spacing={4}
              mt={2}
              bg="rgba(0, 0, 0, 0.5)"
              p={4}
              borderRadius="md"
              boxShadow="sm"
            >
              {socials.map((social, index) => (
                <HStack key={index} spacing={2}>
                  <FontAwesomeIcon
                    className="header-social-icon"
                    icon={social.icon}
                  />
                  <Text className="header-social-text">{social.value}</Text>
                </HStack>
              ))}
            </VStack>
          </Collapse>
        </VStack>
      </HStack>
    </Box>
  );
}
