export const initialState = {
  name: null,
  currentSelection: null,
  cartItems: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_ITEM":
      return {
        ...state,
        item: action.item,
      };
    case "SET_SELECTION":
      return {
        ...state,
        currentSelection: action.currentSelection,
      };
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: action.cartItems,
      };
    default:
      return state;
  }
};

export default reducer;
