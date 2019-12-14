import { GET_PROJECT, PROJECT_ERROR } from "../actions/types";

const initialState = {
  allProjects: [],
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROJECT:
      return {
        ...state,
        allProjects: payload,
        loading: false
      };
    case PROJECT_ERROR:
      return {
        ...state,
        error: payload,
        loading: false
      };
    default:
      return state;
  }
}
