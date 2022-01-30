import React from "react";
import Subtotal from "../components/Subtotal/Subtotal.js";
import { Heading, Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import CartItem from "../components/CartItem.js/index.js";
import { useStateValue } from "../StateProvider";
import {} from '@chakra-ui/react';

function Cart() {
    const [{ cart }, dispatch] = useStateValue();

  return (
    <>
    <Navbar />
    <Heading align='center' borderBottom='1px' borderColor='gray.200'>Your Shopping Cart</Heading>
    <Box bg='gray.50' overflow='hidden'>
      {/* map through cart to pull out individual items and their properties */}
      <div className='left__side'>
      {cart.map(item => (
        <CartItem
        id={item.id}
        title={item.title}
        image={item.image}
        price={item.price}
        rating={item.rating} />
      ))}
      </div>
      <div className='left__side'>
    <Subtotal />
    </div>
    </Box>
    </>
  );
}

export default Cart;
