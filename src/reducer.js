export const initialState = {
  name: null,
  currentSelection: null,
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
    default:
      return state;
  }
};

export default reducer;
