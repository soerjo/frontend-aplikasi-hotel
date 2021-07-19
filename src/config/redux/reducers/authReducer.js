const initState = {
  user: {},
  error: {},
  isLoading: false,
  isLogin: false,
  isregist: false,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOADING_API": {
      return {
        ...state,
        isLoading: action.payload,
      };
    }
    case "LOGIN_API": {
      return {
        ...state,
        user: action.payload,
      };
    }
    case "lOGOUT_API": {
      return {
        ...state,
        user: {},
      };
    }
    case "ERROR_API": {
      return {
        ...state,
        error: action.payload,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
