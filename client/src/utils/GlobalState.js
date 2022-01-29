import React, { createContext, useContext } from "react";
import { useProductReducer } from './reducers';

const StoreContext = createContext();
const {Provider} = StoreContext;

const StoreProvider = ({value = [], ...props}) => { //props used to be passed to all children
    // creates the global state
    const [state, dispatch] = useProductReducer({
        products: [],
        cart: [],
        // // cartOpen: false,
        // categories: [],
        // currentCategory: ''
    });
    console.log(state);
    return <Provider value={[state, dispatch]}{...props} />;
};

// custom react hook that gives access to (state, dispatch) from StoreProvider
const useStoreContext = () => {
    return useContext(StoreContext);
};

export {StoreProvider, useStoreContext};
