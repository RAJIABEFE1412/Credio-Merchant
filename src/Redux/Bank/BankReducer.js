import {
  BANK_FALIURE,
  POST_SUCCESS,
  BANK_REQUEST,
  BANK_SUCCESS,
  TRANSFER_DATA_REQUEST,
  POST_FAILURE,
} from "./BankType";

const initialState = {
  loading: false,
  bank: [],
  bankname: [],
  transferData: {},
  error: "",
};

export const banknameReducer = (state = initialState, action) => {
  console.log("herrrrrrrrreee????? ", action);
  switch (action.type) {
    case POST_SUCCESS:
      return {
        ...state,
        loading: false,
        accountDetails: action.payload,
        error: "",
        transferData: {},
      };

    case POST_FAILURE:
      return {
        ...state,
      };

    case TRANSFER_DATA_REQUEST:
      console.log("reach here????");
      return {
        ...state,
        transferData: action.payload,
      };
    case BANK_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case BANK_SUCCESS:
   
      return {
        ...state,
        loading: false,
        bank: action.payload,
        error: "",
      };
    case BANK_FALIURE:
      return {
        loading: false,
        bank: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default banknameReducer;
