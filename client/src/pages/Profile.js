import React from "react";
import { Redirect, useParams } from "react-router-dom";

import { useMutation, useQuery } from "@apollo/client";
import { QUERY_ME, QUERY_USER } from "../utils/queries";
// import { ADD_PRODUCT } from '../utils/mutations';

import Auth from "../utils/auth";

import { Box, Image, Flex, HStack, Center, Button} from "@chakra-ui/react";
import img from "../assets/img/default-avi.png";

const Profile = () => {
  const { username: userParameter } = useParams();
  // const [addProduct] = useMutation(ADD_PRODUCT);
  const { loading, data } = useQuery(userParameter ? QUERY_USER : QUERY_ME, {
    variables: { username: userParameter },
  });

  //if we run QUERY_ME, response = data.me, if we run QUERY_USER, response = data.user
  const user = data?.me || data?.user || {};
  console.log(user);

  if (!Auth.loggedIn()) {
    return <h4>Please register or login to browse profiles.</h4>;
  }

  if (Auth.loggedIn() && Auth.getProfile().data.username === userParameter) {
    return <Redirect to="/profile" />;
  }
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!user.username) {
    return <h4>This username doesn't exist!</h4>;
  }

  // const handleClick = async () => {
  //     try {
  //         await addProduct({
  //             variables: { _id: user._id }
  //         });
  //     } catch (e) {
  //         console.error(e);
  //     }
  // };

  return (
    <div>
      <h1>
        Welcome to{" "}
        {userParameter
          ? `${user.username}'s gallery!`
          : `your gallery, ${user.username}!`}{" "}
      </h1>
      <Box
        p="10"
        maxW="lg"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
      >
        <Box
          p="6"
          maxW="sm"
          borderWidth="1px"
          borderRadius="sm"
          overflow="hidden"
        >
          <img src={img} />
          <Button
            type="button"
            colorScheme="blue"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Edit Profile Photo
          </Button>
        </Box>
      </Box>
    </div>
  );
};

export default Profile;


