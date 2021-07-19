const initState = {
  reports: [],
  roomType: ["Double, Bed", "Delux", "Twin Bed", "Single Bed"],
  roomID: [],
  isLoading: false,
};

const checkOutReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOADING_API": {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case "GET_CHECKOUT_API": {
      return {
        ...state,
        reports: action.payload,
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

export default checkOutReducer;
