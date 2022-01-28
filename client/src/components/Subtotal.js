import React from 'react';
import './Subtotal.css';
import CurrencyFormat from "react-currency-format";
import { Link } from 'react-router-dom';
import {
    Button,
    Box,
    Flex
} from '@chakra-ui/react';
 import { ArrowRightIcon } from '@chakra-ui/icons';

function Subtotal() {
    return (
        <Flex direction ='column' align='center' justify='center'>
         <Box w="20%" borderWidth="1px" borderRadius="lg" my="10%" p={4} align='center'>
          <CurrencyFormat
            renderText={(value) => (
              <>
                <p>
                  {/* Part of the homework */}
                  Subtotal (2 items): <strong>{value}</strong>
                </p>
                <small className="subtotal__gift">
                  <input type="checkbox" /> This order contains a gift
                </small>
              </>
            )}
            decimalScale={2}
            value={1000} // Part of the homework
            displayType={"text"}
            thousandSeparator={true}
            prefix={"$"}
          />
          <Link to='/login'>
          <Button colorScheme="orange" size="sm" type="submit" mt={2}>
          Proceed to Checkout<div className='icon'><ArrowRightIcon /></div>
          </Button>
          </Link>
        </Box>
        </Flex>
      );
    }
export default Subtotal;
