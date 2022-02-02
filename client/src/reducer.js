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
          const index = state.cart.findIndex(
            (cartItem) => cartItem._id === action._id
          );
          let newCart = [...state.cart];
    
          if (index >= 0) {
            newCart.splice(index, 1);
    
          } else {
            console.warn(
              `Cant remove product (id: ${action._id}) as its not in cart!`
            )
          }
    
          return {
            ...state,
            cart: newCart
          };
          
        default:
            return state;
    };

};

export default reducer;