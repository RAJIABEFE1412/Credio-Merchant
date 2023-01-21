import {
  SOCKET_INIT,
  SOCKET_SEND_CARD,
  SOCKET_SEND_CARDLESS,
} from "./SocketType";

const initialState = {
  loading: false,
  initated: false,
  transaction: [],
  error: "",
};

const transactionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SOCKET_INIT:
      return {
        ...state,
        initated: true,
      };
    case SOCKET_SEND_CARD:
      return {
        loading: false,
        transaction: action.payload,
        error: "",
      };
    case SOCKET_SEND_CARDLESS:
      return {
        loading: false,
        transaction: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default transactionReducer;
