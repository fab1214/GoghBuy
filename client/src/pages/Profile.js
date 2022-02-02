import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_ME, QUERY_USER } from "../utils/queries";
import { Redirect, useParams } from "react-router-dom";
import { ADD_PRODUCT } from '../utils/mutations';
import auth from '../utils/auth';
import { Box, Container, Image, Flex, HStack, Center } from "@chakra-ui/react";

const Profile = () => {
    const { username: userParam } = useParams();
    const [addProduct] = useMutation(ADD_PRODUCT);
    const { loading, data } = useQuery(userParam ? QUERY_ME : QUERY_USER, {
        variables: { username: userParam }
    });
    const user = data?.me || data?.user || {};
    console.log(user)

    if (auth.loggedIn() && auth.getProfile().data.username === userParam) {
        return <Redirect to="/profile:username" />
    }
    if (loading) {
        return <div>Loading...</div>
    }
    if (!user?.username) {
        return (
            <h4 style={{ marginTop: "100px" }}>
                You need to be logged in to see this page. Use the navigation above to signup/login.
            </h4>
        );
    }

    const handleClick = async () => {
        try {
            await addProduct({
                variables: { id: user._id }
            });
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div style={{ marginTop: "500" }}>
            <div className="flex-row">
                <h2 className="bg-dark text-secondary p-3 display-inline-block">
                    Viewing {userParam ? `${user.username}'s` : 'your'} profile.
                </h2>
            </div>
            <Container maxW="container.md">
                <Center>

                    <div className="container">
                        <Flex direction="row">
                            <img 
                            src={`/images/` + user.profilePic}
                            alt=""
                            boxSize="100px"
                            />
                            <p>{user.bio}</p>
                            <div>{user.products.description}</div>
                            {user.products.map(product => {
                                return (
                                    <>
                                    <h2>{product.title}</h2>
                                        <Image
                                            src={`/images/${product.image}`}
                                            alt=""
                                            boxSize="150px"
                                            align="center"
                                            borderRadius="full"
                                        />
                                    </>
                                    
                                )
                            })}
                        </Flex>
                        <HStack>
                            <Flex>
                                {user.order}
                            </Flex>
                        </HStack>
                    </div>
                </Center>
            </Container>
        </div>
    )
};

export default Profile;