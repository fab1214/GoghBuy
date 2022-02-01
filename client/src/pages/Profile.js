import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_ME, QUERY_USER } from "../utils/queries";
import { Redirect, useParams } from "react-router-dom";
import {ADD_PRODUCT} from '../utils/mutations';
import auth from '../utils/auth';
import { Container, Flex, HStack } from "@chakra-ui/react";

const Profile = () => {
    const {username: userParam} = useParams();
    const [addProduct] = useMutation(ADD_PRODUCT);
    const {loading, data} = useQuery(userParam ? QUERY_ME : QUERY_USER, {
        variables: {username: userParam}
    });
    const user = data?.me || data?.user || {};

    if (auth.loggedIn() && auth.getProfile().data.username === userParam) {
        return <Redirect to="/profile" />
    } 
    if (loading) {
        return <div>Loading...</div>
    }
    if (!user?.username) {
        return(
            <h4 style={{marginTop: "100px"}}>
              You need to be logged in to see this page. Use the navigation above to signup/login.
            </h4>
        );
    }

    const handleClick = async () => {
        try {
            await addProduct({
                variables: {id: user._id}
            });
        } catch(e) {
            console.error(e);
        }
    };

    return(
        <div>
            <Container maxW="container.md">
                <div>
                <HStack>
                   <Flex>
                     Hello
                   </Flex>
                </HStack>
                <HStack>
                   <Flex>
                       
                   </Flex>
                </HStack>
                </div>
            </Container>
        </div>
    )
};

export default Profile;