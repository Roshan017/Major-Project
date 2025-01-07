import React from "react";
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  VStack,
  Divider,
  useToast,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart, setCart }) => {
  const toast = useToast();
  const nav = useNavigate();
  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const directshop = () => {
    setCart([]);
  };
  const clearCart = () => {
    setCart([]);
    toast({
      title: "Clear Cart",
      description: "Cart has been cleared Successfully",

      status: "success",
      duration: 4000,
      isClosable: true,
    });
  };

  const PlaceOrder = () => {
    toast({
      title: "Order Status",
      description: "Order Has been Placed Successfully",

      status: "success",
      duration: 4000,
      isClosable: true,
      variant: "left-accent",
    });
    directshop();
    nav("/shop");
  };
  const RandomId = () => {
    var id = Math.floor(100000000 + Math.random() * 900000000);
    return id;
  };
  const totalPrice = cart.reduce((total, product) => total + product.price, 0);

  return (
    <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
      <Box
        display={"flex"}
        flexDirection={"column"}
        width={"75%"}
        position={"relative"}
        top={"120px"}
        p={5}
      >
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          My Cart
        </Text>
        {cart.length === 0 ? (
          <Text>Your cart is empty!</Text>
        ) : (
          <VStack spacing={4} align="stretch">
            <Text>Order ID: {RandomId()} </Text>
            {cart.map((product) => (
              <Flex
                key={product.id}
                justifyContent="space-between"
                alignItems="center"
                borderWidth="1px"
                borderRadius="lg"
                p={4}
                bg="gray.50"
              >
                <Image
                  src={product.image}
                  alt={product.name}
                  borderRadius="md"
                  height="50px"
                  objectFit="cover"
                />
                <Text fontWeight="bold" flex="1" ml={4}>
                  {product.name}
                </Text>
                <Text flex="1" textAlign="center">
                  ₹{product.price}
                </Text>
                <Button
                  colorScheme="red"
                  size="sm"
                  onClick={() => removeFromCart(product.id)}
                >
                  Remove
                </Button>
              </Flex>
            ))}
            <Divider />
            <Flex justifyContent="space-between" alignItems="center" p={4}>
              <Text fontSize="lg" fontWeight="bold">
                Total Price:
              </Text>
              <Text fontSize="lg" fontWeight="bold" color="teal.500">
                ₹{totalPrice}
              </Text>
            </Flex>
            <Button colorScheme="green" onClick={PlaceOrder}>
              Place Order
            </Button>
            <Button colorScheme="red" onClick={clearCart}>
              Clear Cart
            </Button>
          </VStack>
        )}
      </Box>
    </Box>
  );
};

export default Cart;
