import React from "react";
import { Button, Image, Heading, Text, Box } from "@chakra-ui/react";
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
      <div className='product__card'>
        <Heading as="h3" size="sm" mb='2%' w='80%'>
          {title}
        </Heading>
        <Image
          boxSize="300px"
        //   objectFit="contain"
          src={`/images/${image}`}
          alt="Art image"
        />
        <Text w='70%'>{description}</Text>
        <Text size='sm'><b>Price: ${price}</b></Text>
        <Button size="sm" colorScheme="orange" onClick={addToCart}>
          Add to Cart
        </Button>
      </div>
  );
};

export default Product;
