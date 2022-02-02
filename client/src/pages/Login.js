import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../utils/mutations";
import Auth from "../utils/auth";
import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Button,
  Input,
  Stack,
  InputLeftElement,
  InputRightElement,
  InputGroup,
  FormControl,
  Text
} from "@chakra-ui/react";
import { LockIcon, EmailIcon } from "@chakra-ui/icons";

function Login() {
  //create states for form values
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login] = useMutation(LOGIN);
  const { email, password } = formState;
  
  //show/hide password functionality
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  // update state based on form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };


  const signIn = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login({
        variables: { ...formState },
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
    ///clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <Flex  direction ='column' align='center'>
    <Box w="30%" borderWidth="1px" borderRadius="lg" my="10%" p={4}>
        <form onSubmit={signIn}>
            <Text fontSize='3xl' align='center'>Sign In</Text>
          <Stack spacing={3}>
            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement children={<EmailIcon />} />
                <Input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                />
              </InputGroup>
            </FormControl>

            <FormControl isRequired>
              <InputGroup>
                <InputLeftElement children={<LockIcon />} />
                <Input
                  type={show ? 'text' : 'password'}
                  placeholder="Password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                />
                <InputRightElement width="4.5rem">
                  <Button h='1.75rem' size='sm' onClick={handleClick}>
                    {show ? 'Hide' : 'Show'}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>

            <Button
              colorScheme="orange"
              size="md"
              type="submit"
              my="3"
            >
              Login
            </Button>
          </Stack>
          {/* <p>
            By signing up you agree to the goghbuy Conditions of Use & Sale.
            Please see our Privacy Notice, our Cookies Notice and our
            Interest-Based Ads Notice.
          </p> */}
          <p style={{ marginTop: "4%" }}>Don't have an account?</p>
          <Link to="/signup">
            <Button colorScheme="teal" size="md" type="submit" mt={2}>
              Sign Up
            </Button>
          </Link>
          {/* {error && <p>There was an error!</p>} */}
        </form>
      </Box>
    </Flex>
);
}


export default Login;
