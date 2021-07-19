import axios from "axios";
const URL = "http://localhost:4000/v1/api";

export const getCheckOut = () => (dispatch) => {
  dispatch({ type: "LOADING_API", payload: true });
  return new Promise((solve, reject) => {
    try {
      axios({
        method: "GET",
        url: `${URL}/checkout/`,
      }).then((res) => {
        console.log("response api:", res.data.data);
        dispatch({ type: "LOADING_API", payload: false });
        dispatch({ type: "GET_CHECKOUT_API", payload: res.data.data });

        solve(res);
      });
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};
