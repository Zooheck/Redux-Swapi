import { FETCHING, SUCCESS, FAILURE } from "../actions/index";
const initialState = {
  characters: [],
  isLoading: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return {
        ...state,
        error: '',
        isLoading: true
      }
    case SUCCESS:
      return {
        ...state,
        characters: action.payload,
        isLoading: false
      }
    case FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      }
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
