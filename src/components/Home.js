import React from "react";
import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
const Home = () => {
  const nav = useNavigate();
  return (
    <Box
      position={"relative"}
      top={"100px"}
      bg="gray.50"
      py={10}
      px={{ base: 4, md: 8, lg: 16 }}
    >
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        alignItems="center"
        justifyContent="center"
        mb={16}
      >
        <Box
          flex="1"
          bg="gray.100"
          p={8}
          borderRadius="lg"
          boxShadow="lg"
          mr={{ lg: 8 }}
          mb={{ base: 8, lg: 0 }}
        >
          <Heading as="h2" size="xl" mb={4} color="brown.700">
            Role of AI in Agriculture
          </Heading>
          <Text fontSize="lg" lineHeight="tall" color="gray.700">
            Artificial Intelligence (AI) is revolutionizing agriculture by
            enabling more precise and efficient farming practices through
            data-driven insights and automation. AI technologies, such as
            machine learning models and smart drones, help in predicting crop
            yields, detecting plant diseases, and optimizing resources, which
            significantly enhances productivity and sustainability.
          </Text>
          <Text fontSize="lg" mt={4} lineHeight="tall" color="gray.700">
            By integrating AI, farmers can make informed decisions that lead to
            increased crop yields and reduced environmental impact.
          </Text>
        </Box>
        <Box flex="1" position="relative">
          <Image
            src="https://www.bitsathy.ac.in/wp-content/uploads/IMAGE-1-RAGHUL-S.jpg"
            alt="AI in Agriculture"
            borderRadius="lg"
            boxShadow="lg"
          />
        </Box>
      </Flex>
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        alignItems="center"
        justifyContent="center"
        mb={16}
      >
        <Box
          className="vision-box"
          flex="1"
          bg="teal.50"
          p={8}
          borderRadius="lg"
          boxShadow="lg"
          width={{ base: "100%", lg: "50%" }}
          mx="auto"
          mb={8}
          display={"flex"}
          flexDirection={"column"}
          border="1px solid teal"
        >
          <Heading
            className="vision-heading"
            as="h2"
            size="xl"
            mb={4}
            color="teal.700"
            textAlign="center"
          >
            Our Vision
          </Heading>
          <Text
            className="vision-text"
            fontSize="lg"
            lineHeight="tall"
            color="gray.700"
          >
            At AgriVision, our vision is to empower farmers and agricultural
            stakeholders by merging technology with tradition. We strive to
            revolutionize farming practices through AI-driven solutions that
            provide accurate crop recommendations, yield predictions, and
            disease diagnostics. By harnessing the potential of machine learning
            and data analytics, we aim to enhance productivity, sustainability,
            and profitability across the agricultural sector.
          </Text>
          <Text
            className="vision-text"
            fontSize="lg"
            mt={4}
            lineHeight="tall"
            color="gray.700"
          >
            We envision a future where every farmer, regardless of scale, has
            access to tools that simplify decision-making and unlock new
            opportunities. By connecting farmers to the best markets, promoting
            sustainable practices, and addressing the challenges of climate
            change, we aspire to create a resilient agricultural ecosystem that
            ensures food security and economic growth for all.
          </Text>
        </Box>
      </Flex>

      <Tabs isFitted variant="enclosed" bg="gray.200" borderRadius="lg" p={6}>
        <Heading className="tab-heading" as={"h3"} textAlign="center" mb={6}>
          What We Do
        </Heading>
        <TabList mb="1.5em">
          <Tab
            fontSize={"18px"}
            fontWeight="bold"
            fontFamily="Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans"
            _selected={{ bg: "teal.100", color: "teal.700" }}
          >
            🌱 Crop Recommendation
          </Tab>
          <Tab
            fontSize={"18px"}
            fontWeight="bold"
            fontFamily="Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans"
            _selected={{ bg: "teal.100", color: "teal.700" }}
          >
            🩺 Disease Detection
          </Tab>
          <Tab
            fontSize={"18px"}
            fontWeight="bold"
            fontFamily="Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans"
            _selected={{ bg: "teal.100", color: "teal.700" }}
          >
            📊 Yield Prediction
          </Tab>
        </TabList>

        <TabPanels>
          <TabPanel>
            <Flex
              alignItems="center"
              mb={6}
              boxShadow="lg"
              p={6}
              borderRadius="lg"
              bg="white"
            >
              <Box flex="1" mr={8}>
                <Heading as="h3" size="lg" mb={4} color="teal.600">
                  Crop Recommendation
                </Heading>
                <Text fontSize="lg" lineHeight="tall" color="gray.700">
                  Our Crop Recommendation feature provides farmers with
                  data-backed insights on the best crops to cultivate based on
                  their specific environmental and soil conditions. By analyzing
                  inputs such as nitrogen, phosphorus, potassium levels,
                  temperature, and humidity, our AI-powered tool suggests the
                  optimal crops that are most likely to thrive in a given area.
                </Text>
                <Text fontSize="lg" mt={4} lineHeight="tall" color="gray.700">
                  This personalized approach enables farmers to maximize their
                  yields, conserve resources, and make strategic decisions
                  aligned with seasonal and market conditions.
                </Text>
                <Button
                  onClick={() => nav("/crop-rec")}
                  mt={4}
                  colorScheme="teal"
                  _hover={{ bg: "teal.600", color: "white" }}
                >
                  Go
                </Button>
              </Box>
              <Box flex="1">
                <Image
                  src="https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/554/303/datas/original.jpg"
                  alt="Crop Recommendation"
                  borderRadius="lg"
                />
              </Box>
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex
              alignItems="center"
              mb={6}
              boxShadow="lg"
              p={6}
              borderRadius="lg"
              bg="white"
            >
              <Box flex="1" mr={8}>
                <Heading as="h3" size="lg" mb={4} color="teal.600">
                  Disease Detection
                </Heading>
                <Text fontSize="lg" lineHeight="tall" color="gray.700">
                  Our AI-based Disease Detection feature helps farmers and
                  agricultural stakeholders identify and manage crop diseases
                  early. By analyzing images and data from the field, our
                  advanced algorithms can detect signs of various diseases with
                  high accuracy.
                </Text>
                <Text fontSize="lg" mt={4} lineHeight="tall" color="gray.700">
                  This feature saves time and effort, reduces dependency on
                  expert consultations, and empowers farmers to take timely
                  preventive measures, ensuring better crop health and yield
                  quality.
                </Text>
                <Button
                  onClick={() => nav("/disease-detection")}
                  mt={4}
                  colorScheme="teal"
                  _hover={{ bg: "teal.600", color: "white" }}
                >
                  Go
                </Button>
              </Box>
              <Box flex="1">
                <Image
                  src="https://www.softwebsolutions.com/wp-content/uploads/2019/08/Plant-Disease-Detection.jpg"
                  alt="Disease Detection"
                  borderRadius="lg"
                />
              </Box>
            </Flex>
          </TabPanel>
          <TabPanel>
            <Flex
              alignItems="center"
              mb={6}
              boxShadow="lg"
              p={6}
              borderRadius="lg"
              bg="white"
            >
              <Box flex="1" mr={8}>
                <Heading as="h3" size="lg" mb={4} color="teal.600">
                  Yield Prediction
                </Heading>
                <Text fontSize="lg" lineHeight="tall" color="gray.700">
                  Crop yield prediction using machine learning involves
                  leveraging advanced algorithms to analyze historical data and
                  real-time field conditions to forecast agricultural output
                  accurately.
                </Text>
                <Text fontSize="lg" mt={4} lineHeight="tall" color="gray.700">
                  By implementing machine learning, farmers and agricultural
                  businesses can optimize planting strategies, manage resources
                  more efficiently, and mitigate risks associated with
                  unpredictable weather patterns, ultimately leading to more
                  stable and increased production.
                </Text>
                <Button
                  mt={4}
                  colorScheme="teal"
                  _hover={{ bg: "teal.600", color: "white" }}
                >
                  Start
                </Button>
              </Box>
              <Box flex="1">
                <Image
                  src="https://via.placeholder.com/400"
                  alt="Yield Prediction"
                  borderRadius="lg"
                />
              </Box>
            </Flex>
          </TabPanel>
        </TabPanels>
      </Tabs>

      {/* Footer */}
    </Box>
  );
};

export default Home;
