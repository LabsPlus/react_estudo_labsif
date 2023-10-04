import { AUMETAR_COUNT } from "./actions";

const initialState = {
  count: 2,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUMETAR_COUNT:
      console.log(state.count, "entre");
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
