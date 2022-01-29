import React from "react";
import Subtotal from "../components/Subtotal";
import { Heading, Box } from "@chakra-ui/react";

function Cart() {
  return (
    <>
    <Box bg='gray.50' overflow='hidden'>
    <Heading align='center' borderBottom='1px' borderColor='gray.200'>Your Shopping Cart</Heading>
    <Subtotal />
    </Box>
    </>
  );
}

export default Cart;
