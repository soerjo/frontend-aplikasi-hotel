import axios from "axios";
const URL = "http://localhost:4000/v1/api";

export const actionLogin = (user) => (dispatch) => {
  dispatch({ type: "LOADING_API", payload: true });
  console.log("isi body yng di kirim: ", user);
  return new Promise((solve, reject) => {
    axios({
      method: "POST",
      url: `${URL}/auth/login`,
      data: {
        ...user,
      },
    })
      .then((res) => {
        dispatch({ type: "LOADING_API", payload: false });
        dispatch({ type: "LOGIN_API", payload: res.data.user });
        console.log("res: ", res);
        solve(res);
      })
      .catch((err) => {
        console.log("failed auth", err);
        dispatch({ type: "LOADING_API", payload: false });
        reject(err);
      });
  });
};

export const actionRegist = (user) => (dispatch) => {
  dispatch({ type: "LOADING_API", payload: true });
  console.log("isi body yng di kirim: ", user);
  return new Promise((solve, reject) => {
    axios({
      method: "POST",
      url: `${URL}/auth/register`,
      data: {
        ...user,
      },
    })
      .then((res) => {
        dispatch({ type: "LOADING_API", payload: false });
        dispatch({ type: "LOGIN_API", payload: res.data.user });
        console.log("res: ", res);
        solve(res);
      })
      .catch((err) => {
        console.log("failed auth", err);
        dispatch({ type: "LOADING_API", payload: false });
        reject(err);
      });
  });
};
