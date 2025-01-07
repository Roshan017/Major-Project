import { Box, Button, HStack } from "@chakra-ui/react";
import "../styles/nav.css";
import { useNavigate } from "react-router-dom";

export default function Nav() {
  const nav = useNavigate();
  return (
    <Box
      className="nav-box"
      position={"relative"}
      top={"6rem"}
      left={0}
      right={0}
      height={"100px"}
      display={"flex"}
      alignItems={"center"}
    >
      <HStack
        className="nav-stack"
        justifyContent={"space-between"}
        width={"75%"}
        spacing={10}
      >
        <Button
          onClick={() => nav("/")}
          className="nav-btn"
          colorScheme="green"
          variant={"outline"}
        >
          Home
        </Button>
        <Button
          onClick={() => nav("/crop-rec")}
          size={"lg"}
          className="nav-btn"
          colorScheme="green"
          variant={"outline"}
        >
          Crop <br />
          Recommendation
        </Button>
        <Button
          onClick={() => nav("/")}
          className="nav-btn"
          colorScheme="green"
          variant={"outline"}
        >
          Yield Prediction
        </Button>
        <Button
          onClick={() => nav("/disease-detection")}
          size={"lg"}
          className="nav-btn"
          colorScheme="green"
          variant={"outline"}
        >
          Disease <br />
          Detection
        </Button>
        <Button
          onClick={() => nav("/shop")}
          size={"lg"}
          className="nav-btn"
          colorScheme="green"
          variant={"outline"}
        >
          Shop
        </Button>
      </HStack>
    </Box>
  );
}
