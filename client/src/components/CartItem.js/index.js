import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import './index.css';

function CartItem({ id, title, image, price, rating }) {
  return (
      <>
      <img className="checkout__item" src={image} />
      <p>{title}</p>
      <p>{price}</p>
      <Flex direction="row">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>⭐</p>
          ))}
      </Flex>
      </>
  );
}

export default CartItem;
