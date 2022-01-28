import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../utils/mutations";
import { Link } from "react-router-dom";
import Auth from "../utils/auth";
import {
  Input,
  Stack,
  InputLeftElement,
  InputRightElement,
  InputGroup,
  FormControl,
  Text
} from "@chakra-ui/react";
import { InfoIcon, LockIcon, EmailIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

function SignUp() {
  //create states for form values
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser] = useMutation(ADD_USER);
  const { username, email, password } = formState;
  // update state based on form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  //show/hide password functionality
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)


  const register = async (e) => {
    e.preventDefault();
    try {
      const { data } = await addUser({
        variables: { ...formState },
      });
      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
      <Flex justify="center">
        <Box w="30%" borderWidth="1px" borderRadius="lg" my="10%" p={4}>
          <form onSubmit={register}>
              <Text fontSize='3xl' align='center'>Register</Text>
            <Stack spacing={3}>
              <FormControl isRequired>
                <InputGroup>
                  <InputLeftElement children={<InfoIcon />} />
                  <Input
                    type="text"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={handleChange}
                  />
                </InputGroup>
              </FormControl>

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
                Register
              </Button>
            </Stack>
            <p>
              By signing up you agree to the goghbuy Conditions of Use & Sale.
              Please see our Privacy Notice, our Cookies Notice and our
              Interest-Based Ads Notice.
            </p>
            <p style={{ marginTop: "4%" }}>Already have an account?</p>
            <Link to="/login">
              <Button colorScheme="teal" size="md" type="submit" mt={2}>
                Sign In
              </Button>
            </Link>
            {/* {error && <p>There was an error signing up</p>} */}
          </form>
        </Box>
      </Flex>
  );
}

export default SignUp;
