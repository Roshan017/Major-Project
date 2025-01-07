import React, { useState } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Nav from "./components/Nav";
import CropPrediction from "./components/Crop";
import DiseaseDetection from "./components/Dise";
import Shop from "./components/Shop";
import Footer from "./components/Footer";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]); // Add state for the cart

  return (
    <ChakraProvider>
      <Router>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crop-rec" element={<CropPrediction />} />
          <Route path="/disease-detection" element={<DiseaseDetection />} />
          <Route
            path="/shop"
            element={<Shop cart={cart} setCart={setCart} />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
