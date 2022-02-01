import React from "react";
import { Flex, Box } from "@chakra-ui/react";
import './index.css';

function CartItem({ id, title, image, price, rating }) {
  return (
      <div className='checkout__item'>
      <img className="checkout__image" src={image} />
      <p>{title}</p>
      <p>{price}</p>
      <Flex direction="row">
        {Array(rating)
          .fill()
          .map((_, i) => (
            <p>⭐</p>
          ))}
      </Flex>
      </div>
  );
}

export default CartItem;
