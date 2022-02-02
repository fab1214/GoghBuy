import React from "react";
import { Flex, Box, Button } from "@chakra-ui/react";
import { useStateValue } from "../../StateProvider";

import "./index.css";

function CartItem({ _id, title, image, price, rating }) {

  const [{ cart }, dispatch] = useStateValue();

  const removeFromCart = () => {
    dispatch({
      type: "REMOVE_FROM_CART",
      id: _id,
    });
  };
  return (
    <div className="checkout__item">
      <img className="checkout__image" src={`/images/${image}`} />
      <p>{title}</p>
      <p>${price}</p>
      {/* <Flex direction="row">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>⭐</p>
          ))}
      </Flex> */}
      {cart.length > 0 ? (
        <Button size="sm" colorScheme="blue"  mb='5%' onClick={removeFromCart}>
          Remove from Cart
        </Button>
      ) : null}
    </div>
  );
}

export default CartItem;
