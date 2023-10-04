import { AUMETAR_COUNT } from "./actions";

const initialState = {
  count: 1,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUMETAR_COUNT:
      return {
        ...state,
        count: state.count + 1,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
