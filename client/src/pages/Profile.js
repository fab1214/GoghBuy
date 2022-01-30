import React from "react";
import { QUERY_USER } from "../utils/queries";
import { useQuery } from "@apollo/client";

const Profile = () => {
    const {loading, data} = useQuery(QUERY_USER);
    const user = data?.me || {};

    return(
        <>
            
        </>
    )
};

export default Profile;