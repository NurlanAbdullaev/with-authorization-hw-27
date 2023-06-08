import { axiosInstance } from "../config/fetchAPI";

export const getMealsRequest = () => {
  return axiosInstance.get("/foods");
};

export const getBasketRequest = () => {
  return axiosInstance.get("/basket");
};

export const addToBasketRequest = (data) => {
  return axiosInstance.post(`/foods/${data.id}/addToBasket`, {
    amount: data.amount,
  });
};

export const incrementBasketRequest = (data) => {
  return axiosInstance.put(`/basketItem/${data.id}/update`, {
    amount: data.amount + 1,
  });
};

export const decrementBasketRequest = (data) => {
  return axiosInstance.put(`/basketItem/${data.id}/update`, {
    amount: data.amount,
  });
};

export const deleteBasketRequest = (data) => {
  return axiosInstance.delete(`/basketItem/${data.id}/delete`);
};
