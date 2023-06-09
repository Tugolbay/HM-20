import { fetchRequest } from "../lib/fetchApi";

const initialState = {
  mealsData: [],
};

export const GET_MEALS = "GET_MEALS";

export const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MEALS:
      return {
        ...state,
        mealsData: action.payload,
      };
    default:
      return state;
  }
};

export const getMeals = () => {
  return async (dispatch) => {
    const responce = await fetchRequest(`/foods`);
    dispatch({ type: GET_MEALS, payload: responce });
  };
};
