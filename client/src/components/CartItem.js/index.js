import React from "react";
import { Flex, Box, Button } from "@chakra-ui/react";
// import { useStateValue } from "../../StateProvider";
import { useStoreContext } from '../../utils/GlobalState';
import { REMOVE_FROM_CART } from "../../utils/actions";

import "./index.css";

function CartItem({ _id, title, image, price }) {

  // const [state, dispatch] = useStateValue();
  const [, dispatch] = useStoreContext();
  
  const removeFromCart = () => {
    
    dispatch({
      type: REMOVE_FROM_CART,
      _id: _id,
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
        <Button size="sm" colorScheme="blue"  mb='5%' onClick = {() => removeFromCart()}>
          Remove from Cart
        </Button>
    </div>
  );
}

export default CartItem;
