import React, { useState } from "react";
import {
  Box,
  VStack,
  Text,
  FormControl,
  Input,
  Button,
  useToast,
  Spinner,
} from "@chakra-ui/react";
import Images from "../assets/Images";
import "../styles/rec.css";

export default function CropRecommendation() {
  const [formValues, setFormValues] = useState({
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    temperature: "",
    humidity: "",
  });

  const [predictionData, setPredictionData] = useState(null);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const GetPred = (pred) => {
    const result = Images.find((item) => item[pred]);
    if (result) {
      return result[pred];
    }
    return {
      label: "Unknown Crop",
      imageUrl: null,
      fertilizer: [],
      bestTimeToCultivate: "",
      irrigation: "",
    };
  };

  const validateForm = () => {
    const { nitrogen, phosphorus, potassium, temperature, humidity } =
      formValues;
    const parsedValues = {
      nitrogen: parseFloat(nitrogen) || 0,
      phosphorus: parseFloat(phosphorus) || 0,
      potassium: parseFloat(potassium) || 0,
      temperature: parseFloat(temperature) || 0,
      humidity: parseFloat(humidity) || 0,
    };

    const invalidInputs = Object.entries(parsedValues).filter(
      ([key, value]) => value >= 200
    );

    if (Object.values(parsedValues).every((value) => value === 0)) {
      toast({
        title: "Invalid Input",
        description: "All values are zero.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return false;
    }

    if (invalidInputs.length > 0) {
      toast({
        title: "Invalid Input",
        description: `Provide actual values for ${invalidInputs
          .map(([key]) => key.charAt(0).toUpperCase() + key.slice(1))
          .join(", ")}`,
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setPredictionData(null);

    try {
      const response = await fetch("http://localhost:5000/cropRec", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        const data = await response.json();
        const cropData = GetPred(data.prediction);
        setPredictionData(cropData);

        toast({
          title: "Success",
          description: "Values analyzed successfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Error",
          description: "Failed to fetch prediction.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "An error occurred while submitting the form.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      position={"relative"}
      top={"180px"}
      border="1px solid black"
      borderRadius="8px"
      padding="20px"
      width={{ base: "90%", md: "70%", lg: "50%" }}
      margin="0 auto"
      mt="50px"
      boxShadow="lg"
      bg="gray.50"
    >
      <Text
        as="h1"
        fontSize="2xl"
        textAlign="center"
        letterSpacing="2px"
        marginBottom="20px"
      >
        Crop Recommendation System
      </Text>

      <form onSubmit={handleSubmit}>
        <VStack spacing={4}>
          {Object.keys(formValues).map((field) => (
            <FormControl key={field}>
              <Input
                name={field}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={formValues[field]}
                onChange={handleChange}
                borderRadius="10px"
                bg="white"
                aria-label={field}
                isInvalid={parseFloat(formValues[field]) >= 200}
              />
            </FormControl>
          ))}

          <Button
            type="submit"
            colorScheme="teal"
            borderRadius="8px"
            width="100%"
            isDisabled={loading}
          >
            {loading ? <Spinner size="sm" /> : "Submit"}
          </Button>
        </VStack>
      </form>

      {predictionData && (
        <Box mt="20px" textAlign="center">
          <Text className="Rec-text" fontSize="lg">
            Recommended Crop: {predictionData.label}
          </Text>
          {predictionData.imageUrl && (
            <Box className="Rec-container" mt="10px">
              <img
                className="Rec-Img"
                src={predictionData.imageUrl}
                alt="Crop Prediction"
                width="300px"
              />
            </Box>
          )}
          <Box mt="10px" textAlign="left" px="10px">
            <Text fontSize="md" fontWeight="bold">
              Fertilizer:
            </Text>
            <ul>
              {predictionData.fertilizer.map((fertilizer, index) => (
                <li key={index}>{fertilizer}</li>
              ))}
            </ul>
            <Text fontSize="md" fontWeight="bold" mt="10px">
              Best Time to Cultivate:
            </Text>
            <Text>{predictionData.bestTimeToCultivate}</Text>
            <Text fontSize="md" fontWeight="bold" mt="10px">
              Irrigation:
            </Text>
            <Text>{predictionData.irrigation}</Text>
          </Box>
        </Box>
      )}
    </Box>
  );
}
