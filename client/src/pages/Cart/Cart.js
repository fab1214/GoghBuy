import React from "react";
import Subtotal from "../../components/Subtotal/Subtotal.js";
import { Heading, Box } from "@chakra-ui/react";
import Navbar from "../../components/Navbar";
import CartItem from "../../components/CartItem.js/index.js";
import { useStateValue } from "../../StateProvider";
import "./index.css";

function Cart() {
  const [{ cart }, dispatch] = useStateValue();

  return (
    <div>
      <Heading align="center" borderBottom="1px" borderColor="gray.200" pb='30px'>
        Your Shopping Cart
      </Heading>
      <Box bg="gray.50" overflow="hidden">
        <div className="container">
        {/* map through cart to pull out individual items and their properties */}
        <div className="cart">
          {cart.map((item) => (
            <CartItem
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
        <div className='sticky'>
          <div className='subtotal'>
            <Subtotal />
            </div>
        </div>
        </div>
      </Box>
    </div>
  );
}

export default Cart;
