export const initialState = {
    cart: [],
    // user: null
  };

  //Selector
  export const getCartTotal = (cart) => 
      cart?.reduce((amount, item) => 
      item.price + amount, 0);
      
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          cart: [...state.cart, action.product],
        };

        case "REMOVE_FROM_CART":
          let newCart = state.cart.filter(product => {
            return product._id !== action._id;
        });
          return {
            ...state,
            cart: newCart
          };
          
        default:
            return state;
    };

};

export default reducer;