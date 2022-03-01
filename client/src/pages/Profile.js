import React from "react";
import { useMutation, useQuery } from "@apollo/client";
import { QUERY_ME, QUERY_USER } from "../utils/queries";
import { Redirect, useParams } from "react-router-dom";
import { ADD_PRODUCT } from '../utils/mutations';
import auth from '../utils/auth';
import { Box, Image, Flex, HStack, Center } from "@chakra-ui/react";

const Profile = () => {
    const { username: userParam } = useParams();
    const [addProduct] = useMutation(ADD_PRODUCT);
    const { loading, data } = useQuery(userParam ? QUERY_ME : QUERY_USER, {
        variables: { username: userParam }
    });
    const user = data?.me || data?.user || {};
    console.log(user)

    if (auth.loggedIn() && auth.getProfile().data.username === userParam) {
        return <Redirect to={"/profile/" + auth.getProfile().data.username} />
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
                variables: { _id: user._id }
            });
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div style={{ marginTop: "500" }}>
            <div className="flex-row">
                <h2 style={{ textAlign: "center", fontSize: "30px" }}>
                    Viewing {userParam ? `${user.username}'s` : 'your'} profile.
                </h2>
            </div>
            <div className="row">
                <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
                    <Center>
                        <img
                            style={{}}
                            src={`/images/` + user.profilePic}
                            alt=""
                            boxSize="100px"
                        />
                        <p>{user.bio}</p>
                    </Center>

                    <h4 style={{ textAlign: "center", fontSize: "25px" }}>Your Products...</h4>
                    <Flex direction="row">
                        <div class="col-xl-3 col-lg-4 col-md-6 mb-4">
                            {user.products.map(product => {
                                return (
                                    <>
                                        <h2 style={{ fontWeight: "bold" }}>{product.title}</h2>
                                        <Image
                                            src={`/images/${product.image}`}
                                            key={product._id}
                                            alt=""
                                            boxSize="150px"
                                            align="center"
                                            borderRadius="full"
                                        />
                                        <div className="small text-muted mb-0">{product.description}</div>
                                    </>
                                )
                            })}
                        </div>
                    </Flex>

                    <h4 style={{ textAlign: "center", fontSize: "25px" }}>Your Orders...</h4>
                    <HStack>
                        <Flex>
                            {user.order}
                        </Flex>
                    </HStack>
                </div>
            </div>
        </div>
    )
};

export default Profile;