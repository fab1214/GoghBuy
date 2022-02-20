import React, {useState} from "react";
import { Redirect, useParams } from "react-router-dom";

import { useMutation, useQuery } from "@apollo/client";
import { QUERY_ALL_PRODUCTS, QUERY_ME, QUERY_USER } from "../utils/queries";
import { ADD_PRODUCT } from '../utils/mutations';

import Auth from "../utils/auth";
import Product from "../components/Product";
import { Box, Image, Flex, HStack, Center, Button, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from "@chakra-ui/react";
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

import {
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField
} from '@chakra-ui/react'


import '../assets/stylesheets/Profile.css';
import img from "../assets/img/default-avi.png";

const Profile = () => {
  const { username: userParameter } = useParams();
  const { loading, data } = useQuery(userParameter ? QUERY_USER : QUERY_ME, {
    variables: { username: userParameter },
  });

    //product form states
  const [formState, setFormState] = useState({
    title: "",
    description: "",
    price: "",
  });

  const { title, description, price, image } = formState;

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
    setFormState("");
  };

  //if we run QUERY_ME, response = data.me, if we run QUERY_USER, response = data.user
  const user = data?.me || data?.user || {};
  console.log(user);

  if (!Auth.loggedIn()) {
    return <h4>Please register or login to browse profiles.</h4>;
  }else if (Auth.loggedIn() && Auth.getProfile().data.username === userParameter) {
    return <Redirect to="/profile" />;
  }else if (loading) {
    return <div>Loading...</div>;
  }else if (!user.username) {
    return <h4>This username doesn't exist!</h4>;
  };


  //modal functions
  function AddProduct() {
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
              <FormControl>
                  <FormLabel htmlFor='title'>Name of Product</FormLabel>
                  <Input type='text' defaultValue={title} name="title" onBlur={handleChange}/>
                  <FormLabel htmlFor='description'>Product Description</FormLabel>
                  <Input type='text' name="description" defaultValue={description} name="description" onBlur={handleChange}/>
                  <FormLabel htmlFor='price'>Price: $</FormLabel>
                  <NumberInput min={1} name="price" defaultValue={price} name="price" onBlur={handleChange}>
                    <NumberInputField />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <FormLabel htmlFor='image'>Upload Product Image</FormLabel>
                  <Input type="file" accept="image/*" name="image" />
              </FormControl>
              </ModalBody>


            <ModalFooter>
              <Button colorScheme="orange" mr={3} type='submit' onClick={handleSubmit}>
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
                <Input type="file" name="file" accept="image/*" />
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
