import React from "react";
import { Flex, Box, Button } from "@chakra-ui/react";
// import { useStateValue } from "../../StateProvider";
import { useStoreContext } from '../../utils/GlobalState';

import "./index.css";

function CartItem({ _id, title, image, description, price }) {

  // const [state, dispatch] = useStateValue();
  const [, dispatch] = useStoreContext();
  
  const removeFromCart = (item) => {
    
    dispatch({
      type: "REMOVE_FROM_CART",
      title: title,
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
      {/* {cart.length > 0 ? ( */}
        <Button size="sm" colorScheme="blue"  mb='5%' onClick = {() => removeFromCart()}>
          Remove from Cart
        </Button>
      {/* ) : null} */}
    </div>
  );
}

export default CartItem;
