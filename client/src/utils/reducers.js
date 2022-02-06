import {
    ADD_TO_CART,
    REMOVE_FROM_CART,
} from './actions';
import { useReducer } from "react";


export const getCartTotal = (cart) => 
cart?.reduce((amount, item) => 
item.price + amount, 0);


export const reducer = (state, action) => {
    switch (action.type) {

        case ADD_TO_CART:
            return {
                ...state,
                // cartOpen: true,
                cart: [...state.cart, action.product]
            };

        case REMOVE_FROM_CART:
            let newState = state.cart.filter(product => {
                return product._id !== action._id;
            });
            return {
                ...state,
                cart: newState
            };

        default:
            return state;
    }
};

export function useProductReducer(initialState) {
    return useReducer(reducer, initialState);
};