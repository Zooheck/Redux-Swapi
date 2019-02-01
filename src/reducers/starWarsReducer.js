import { FETCHING, SUCCESS, FAILURE, CHANGE_PAGES } from "../actions/index";
const initialState = {
  characters: [],
  isLoading: false,
  error: null,
  previous: '',
  next: ''
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
      console.log(action.payload.next)
      return {
        ...state,
        characters: action.payload.results,
        isLoading: false,
        previous: action.payload.previous,
        next: action.payload.next
      }
      case CHANGE_PAGES:
      return {
        ...state,
        characters: action.payload.results,
        isLoading: false,
        previous: action.payload.previous,
        next: action.payload.next        
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
