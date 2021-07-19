import axios from "axios";
import moment from "moment";
const URL = "http://localhost:4000/v1/api";

export const getCheckIn = () => (dispatch) => {
  dispatch({ type: "LOADING_API", payload: true });
  return new Promise((solve, reject) => {
    axios({
      method: "GET",
      url: `${URL}/checkin/getcheckin`,
    })
      .then((res) => {
        console.log("response api:", res.data.data);
        dispatch({ type: "LOADING_API", payload: false });
        dispatch({ type: "GET_CHECKIN_API", payload: res.data.data });
        solve(res);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

export const getCheckInById = (id) => (dispatch) => {
  console.log("manggil checkin id");
  dispatch({ type: "LOADING_API", payload: true });
  return new Promise((solve, reject) => {
    try {
      axios({
        method: "GET",
        url: `${URL}/checkin/getcheckinid/${id}`,
      }).then((res) => {
        console.log("response api:", res.data.data);
        dispatch({ type: "LOADING_API", payload: false });
        dispatch({ type: "GET_CHECKIN_BY_ID_API", payload: res.data.data });

        solve(res);
      });
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};

export const checkOut = (value) => (dispatch) => {
  dispatch({ type: "LOADING_API", payload: true });
  return new Promise((solve, reject) => {
    try {
      axios({
        method: "DELETE",
        url: `${URL}/checkin/delcheckinid`,
        data: {
          ...value,
        },
      }).then((res) => {
        console.log("response api:", res.data.data);
        dispatch({ type: "LOADING_API", payload: false });
        solve(res);
      });
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};

export const makeCheckIn = (value) => (dispatch) => {
  const tanggal = moment().format("YYYY-MM-DD");
  const req = { ...value, checkIn: tanggal };
  dispatch({ type: "LOADING_API", payload: true });
  console.log("do call api checkIn:", req);
  return new Promise((solve, reject) => {
    axios({
      method: "POST",
      url: `${URL}/checkin/`,
      data: {
        ...req,
      },
    })
      .then((res) => {
        console.log("response api:", res.data.data);
        dispatch({ type: "LOADING_API", payload: false });
        dispatch({ type: "GET_CHECKIN_API", payload: res.data.data });
        solve(res);
      })
      .catch((err) => {
        // console.log(err.response.data.message);
        reject(err);
      });
  });
};

export const getRoomId = (value) => (dispatch) => {
  console.log("call getroomid, value:", value);
  dispatch({ type: "LOADING_API", payload: true });
  return new Promise((solve, reject) => {
    axios({
      method: "POST",
      url: `${URL}/room/roomtype/`,
      data: {
        type: value,
      },
    })
      .then((res) => {
        // console.log("response api:", res.data);
        const data = res.data.data;
        const arrayData = [];
        data.forEach((data) => {
          arrayData.push(data.id);
        });
        dispatch({ type: "LOADING_API", payload: false });
        dispatch({ type: "GET_ROOM_ID_API", payload: arrayData });
        solve(res);
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};

export const editCheckIn = (value) => (dispatch) => {
  dispatch({ type: "LOADING_API", payload: true });
  console.log("do call api edit checkin,", value);
  return new Promise((solve, reject) => {
    axios({
      method: "POST",
      url: `${URL}/checkin/editcheckin`,
      data: {
        ...value,
      },
    })
      .then((res) => {
        console.log("response api:", res.data.data);
        dispatch({ type: "LOADING_API", payload: false });
        dispatch({ type: "GET_CHECKIN_API", payload: res.data.data });
        solve(res);
      })
      .catch((error) => {
        console.log("request error: ", error.response);
        reject(error.response);
      });
  });
};
