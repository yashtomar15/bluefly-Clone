import {
  AddtocartData,
  ToalandQuant,
  Removecart,
  Myaddress,
  Mycoupon,
  SET_USER_TOKEN,
  DELETE_TOKEN,
} from "./actiontypes";

export const addcartdata = (payload) => {
  return {
    type: AddtocartData,
    payload,
  };
};

export const totalandquant = (payload) => {
  return {
    type: ToalandQuant,
    payload,
  };
};

export const removecart = (payload) => {
  return {
    type: Removecart,
    payload,
  };
};

export const myaddress = (payload) => {
  return {
    type: Myaddress,
    payload,
  };
};
export const mycoupon = (payload) => {
  return {
    type: Mycoupon,
    payload,
  };
};

export const checkToken = () => {
  console.log("first");
  let token = JSON.parse(localStorage.getItem("token"));
  console.log(token);
  if (token !== null) {
    return {
      type: SET_USER_TOKEN,
      payload: token,
    };
  }
  return {
    type: "",
  };
};

export const setToken = (payload) => {
  return {
    type: SET_USER_TOKEN,
    payload,
  };
};
export const deletToken = () => {
  localStorage.removeItem("token");
  return {
    type: DELETE_TOKEN,
  };
};
