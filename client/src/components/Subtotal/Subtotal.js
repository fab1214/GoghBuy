import React, { useEffect } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";
import { Button, Box, Flex, Heading } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";
// import { useStateValue } from "../../StateProvider";
import { useStoreContext } from "../../utils/GlobalState";
import { getCartTotal } from "../../reducer";
import { QUERY_CHECKOUT } from "../../utils/queries";
import { loadStripe } from "@stripe/stripe-js";
import { useLazyQuery } from "@apollo/client";

const stripePromise = loadStripe('pk_test_51KO8uWLlANIZYHfV0zqFZMkd1yZTg1CuToOkWtyevMZ0G6rVysSwTCZCzb7m5EL2AlSWbdWrFsPQWGS1Ap55KSxM00pzpMpeKs');

function Subtotal() {
  // const [{cart}, dispatch] = useStateValue();
  const [{cart}, dispatch] = useStoreContext();

  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  function submitCheckout() {
    const productIds = [];
    //for each item in cart
    cart.forEach((item) => {
      //loop through items in cart and push ids into productIds array
      // for (let i = 0; i < item.purchaseQuantity; i++) {
        productIds.push(item.id);
      // }

    });

    getCheckout({
      variables: { products: productIds },
    });
  }

  return (
    <>
      {/* <Flex direction ='column' justify='space-between' pr={10} > */}
      {/* <Box bg='white' w="20%" borderWidth="1px" borderRadius="lg" my="10%" p={4} align='center'> */}
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({cart.length}): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getCartTotal(cart)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
        <Button
          colorScheme="orange"
          size="sm"
          type="submit"
          mt={2}
          onClick={submitCheckout}
        >
          Proceed to Payment
          <div className="icon">
            <ArrowRightIcon />
          </div>
        </Button>
      {/* </Box> */}
      {/* </Flex> */}
    </>
  );
}
export default Subtotal;
