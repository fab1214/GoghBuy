import React from "react";
import { Redirect, useParams } from "react-router-dom";

import { useMutation, useQuery } from "@apollo/client";
import { QUERY_ME, QUERY_USER } from "../utils/queries";
// import { ADD_PRODUCT } from '../utils/mutations';

import Auth from "../utils/auth";
import Product from "../components/Product";
import { Box, Image, Flex, HStack, Center, Button } from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";

import '../assets/stylesheets/Profile.css';
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

  //modal functions
  function AddProduct() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        <Button colorScheme="orange" onClick={onOpen}>
          Ready to sell?
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add your piece to the market place</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Please fill out the fields below to list your artpiece for sale.
              <form></form>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="orange" mr={3} onClick={onClose}>
                Start Selling!
              </Button>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
  }

  function UploadPhoto() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
      <>
        <Button colorScheme="blue" onClick={onOpen}>
          Edit Profile Photo
        </Button>

        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Upload a new profile photo</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form action="/" method="POST" encType="multipart/form-data">
                <p>Select an image to set as your new profile photo</p>
                <input type="file" name="file" accept="image/*" />
              </form>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="orange" mr={3} onClick={onClose}>
                Upload
              </Button>
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    );
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
    <div className="profile__container">
      <div className="profile__info">
        <div className="profile__avi">
          <h1>
            Welcome to{" "}
            {userParameter
              ? `${user.username}'s gallery!`
              : `your gallery, ${user.username}!`}{" "}
          </h1>
          {/* <Box
        p="6"
        maxW="sm"
        borderWidth="1px"
        borderRadius="sm"
        overflow="hidden"
      > */}
          <Image src={img} w={250}/>
          {!userParameter && (
            <>
              <UploadPhoto />
              <AddProduct />
            </>
          )}
        </div>
        {/* </Box> */}
        <div className="product__container">
          <h4 style={{ fontSize: "25px" }}>
            {!userParameter ? `Your Products` : `${user.username}'s Products`}
          </h4>
          {user.products.map((product) => {
            return (
              <>
              	<Product
				key={product._id}
				_id={product._id}
				title={product.title}
				price={product.price}
				image={product.image}
				/>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
