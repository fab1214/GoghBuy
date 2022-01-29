import React from "react";
import Subtotal from "../components/Subtotal/Subtotal.js";
import { Heading, Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

function Cart() {
  return (
    <>
    <Navbar />
    <Heading align='center' borderBottom='1px' borderColor='gray.200'>Your Shopping Cart</Heading>
    <Box bg='gray.50' overflow='hidden'>
    <Subtotal />
    </Box>
    </>
  );
}

export default Cart;
