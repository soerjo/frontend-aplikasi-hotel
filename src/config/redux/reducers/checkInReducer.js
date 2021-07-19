const initState = {
  reserve: [],
  roomType: ["Double Bed", "Delux", "Twin Bed", "Single Bed"],
  reserveById: [],
  roomID: [],
  biaya: {
    "Double Bed": 500000,
    "Twin Bed": 510000,
    Delux: 1000000,
    "Single Bed": 300000,
  },
  isloading: false,
};

const checkInReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOADING_API": {
      return {
        ...state,
        isloading: action.payload,
      };
    }
    case "GET_CHECKIN_API": {
      return {
        ...state,
        reserve: action.payload,
      };
    }
    case "GET_CHECKIN_BY_ID_API": {
      return {
        ...state,
        reserveById: action.payload,
      };
    }
    case "CHECKOUT": {
      return {
        ...state,
        reserveById: [],
      };
    }
    case "GET_ROOM_ID_API": {
      return {
        ...state,
        roomID: action.payload,
      };
    }
    default:
      return state;
  }
};

export default checkInReducer;
