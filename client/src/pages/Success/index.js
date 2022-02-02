import React from 'react';
import { Heading, Box } from "@chakra-ui/react";


function Success() {

// setTimeout(() => {
//     window.location.assign('/');
// }, 3000);

  return (
  <div>
    <Box bg="gray.50" overflow="hidden"> 
    <Heading align="center" borderBottom="1px" borderColor="gray.200" pb='30px' color='black'>
        <div className='success_text' style={{lineHeight: '2'}}>
            <p>Thank you for your purchase!</p>
            <p>You will now be redirected to the homepage.</p>
        </div>
    </Heading>
    </Box>
  </div>

  )
}

export default Success;
