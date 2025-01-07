import React from "react";
import "../styles/shop.css";
import {
  Box,
  Flex,
  Text,
  Image,
  Button,
  Grid,
  Input,
  Select,
  HStack,
  VStack,
  IconButton,
  Badge,
} from "@chakra-ui/react";
import { FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import products from "../assets/products";

const Shop = ({ cart, setCart }) => {
  const [search, setSearch] = React.useState("");
  const [filter, setFilter] = React.useState("All");
  const [cart_count, setCount] = React.useState(0);
  const navigate = useNavigate();
  const [likedProducts, setLikedProducts] = React.useState({}); // Store likes for each product

  const liked = (id) => {
    setLikedProducts((prevLikedProducts) => ({
      ...prevLikedProducts,
      [id]: !prevLikedProducts[id], // Toggle the like for the clicked product
    }));
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesFilter = filter === "All" || product.category === filter;
    return matchesSearch && matchesFilter;
  });

  const addToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      setCount(updatedCart.length);
      return updatedCart;
    });
  };

  return (
    <Box className="shop-box" position={"relative"} top={"97px"} p={5}>
      <VStack spacing={4} align="stretch">
        <Flex justifyContent="space-between" alignItems="center">
          <Input
            className="search-bar"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            width="60%"
          />
          <Select
            className="shop-select"
            placeholder="Filter by category"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            width="30%"
          >
            <option value="All">All</option>
            <option value="Seeds">Seeds</option>
            <option value="Fertilizers">Fertilizers</option>
          </Select>
          <Text className="cart-counter">
            <IconButton
              className="cart-icon"
              aria-label="Cart"
              icon={<FaShoppingCart />}
              onClick={() => navigate("/cart")}
              position="relative"
            >
              {cart_count > 0 && (
                <Badge
                  colorScheme="red"
                  borderRadius="full"
                  position="absolute"
                  top="-10px"
                  right="-10px"
                ></Badge>
              )}
            </IconButton>
            <Text className="cart-count">{cart_count}</Text>
          </Text>
        </Flex>

        <Grid templateColumns="repeat(auto-fit, minmax(250px, 1fr))" gap={6}>
          {filteredProducts.map((product) => (
            <Box
              className="shop-product-box"
              key={product.id}
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              p={4}
            >
              <Image
                src={product.image}
                alt={product.name}
                borderRadius="md"
                height="150px"
                objectFit="cover"
              />

              <Box mt={2}>
                <Text fontWeight="bold" fontSize="lg">
                  {product.name}
                </Text>
                <Flex>
                  {Array.from({ length: product.rating }).map((_, index) => (
                    <FaStar key={index} color="gold" />
                  ))}
                  <p className="product-rated">{product.rated}</p>
                </Flex>

                <Text className="product-price" color="gray.600" fontSize="sm">
                  ₹{product.price}
                </Text>
                <HStack>
                  <Button
                    colorScheme="yellow"
                    size="sm"
                    mt={2}
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </Button>
                  <IconButton
                    key={product.id}
                    className="like-icon"
                    aria-label="Like"
                    icon={<FaHeart />}
                    position="relative"
                    onClick={() => liked(product.id)}
                    style={{
                      color: likedProducts[product.id]
                        ? "red"
                        : "rgb(189, 145, 145)", // Apply color conditionally
                    }}
                  />
                </HStack>
              </Box>
            </Box>
          ))}
        </Grid>
      </VStack>
    </Box>
  );
};

export default Shop;
