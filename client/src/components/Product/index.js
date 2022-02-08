import React from "react";
import { Button, Image, Heading, Text } from "@chakra-ui/react";

import "../../assets/stylesheets/Product.css";
// import { useStateValue } from "../../StateProvider";
import { useStoreContext } from "../../utils/GlobalState";

const Product = (product) => {
  const { _id, title, price, image, description } = product;

  // const [state, dispatch] = useStateValue();
  const [state, dispatch] = useStoreContext();

  const { cart } = state;

  const addToCart = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_CART",
      product: {
        _id: product._id,
        title: product.title,
        description: product.description,
        image: product.image,
        price: product.price,
      },
    });
  };

  return (
    <div>
      <Heading as="h3" size="md" isTruncated>
        {title}
      </Heading>
      <Image
        boxSize="200px"
        objectFit="contain"
        src={`/images/${image}`}
        alt="Art image"
      />
      <Text>{description}</Text>
      <Text>${price}</Text>
      <Button size="sm" colorScheme="orange" onClick={addToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default Product;
