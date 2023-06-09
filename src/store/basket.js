import { fetchRequest } from "../lib/fetchApi";

const initialState = {
  basketData: [],
};

export const GET_BASKET = "GET_BASKET";

export const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BASKET:
      return {
        ...state,
        basketData: action.payload,
      };
    default:
      return state;
  }
};

export const getBasket = () => {
  return async (dispatch) => {
    const responce = await fetchRequest(`/basket`);
    dispatch({ type: GET_BASKET, payload: responce.items });
  };
};

export const addToBasket = (data) => {
  return () => {
    fetchRequest(`/foods/${data.id}/addToBasket`, {
      method: "POST",
      body: { amount: data.amount },
    });
  };
};

export const minusQuantity = (id, amount) => {
  return async (dispatch) => {
    try {
      if (amount !== 0) {
        const response = await fetchRequest(`/basketItem/${id}/update`, {
          method: "PUT",
          body: { amount: amount },
        });

        dispatch(getBasket());

        return response.items;
      } else {
        const response = await fetchRequest(`/basketItem/${id}/delete`, {
          method: "DELETE",
        });

        dispatch(getBasket());

        return response.items;
      }
    } catch (error) {
      new Error(error);
    }
  };
};
export const addQuantity = (id, amount) => {
  return async (dispatch) => {
    try {
      const responce = await fetchRequest(`/basketItem/${id}/update`, {
        method: "PUT",
        body: { amount: amount + 1 },
      });

      dispatch(getBasket());

      return responce.items;
    } catch (error) {
      new Error(error);
    }
  };
};
