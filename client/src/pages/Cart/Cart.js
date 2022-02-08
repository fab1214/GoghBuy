import React from "react";
import Subtotal from "../../components/Subtotal/Subtotal.js";
import { Heading, Box } from "@chakra-ui/react";
import CartItem from "../../components/CartItem.js";
// import { useStateValue } from "../../StateProvider";
import { useStoreContext } from "../../utils/GlobalState.js";
import "./index.css";

function Cart() {
  // const [state, dispatch] = useStateValue();
  const [state, dispatch] = useStoreContext();

  return (
    <div>
      <Heading
        align="center"
        borderBottom="1px"
        borderColor="gray.200"
        pb="30px"
        color="black"
      >
        Your Shopping Cart
      </Heading>
      <Box bg="gray.50" overflow="hidden">
        <div className="container">
          {/* map through cart to pull out individual items and their properties */}
          <div className="cart">
            {state.cart.map((product) => (
              <CartItem key={product._id} {...product} />
            ))}
          </div>
          <div className="sticky">
            <div className="subtotal">
              <Subtotal />
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
}

export default Cart;
