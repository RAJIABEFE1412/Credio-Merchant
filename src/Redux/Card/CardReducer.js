import {
  CONNECT_DEVICE,
  REQUEST_DISPLAY,
  SCAN_DEVICES,
  REQUEST_PIN,
  REQUEST_PIN_DONE,
  DISCONNECT_DEVICE,
  SEND_TLV_DATA,
} from "./CardType";

const initialState = {
  requestDisplay: false,
  scanning: false,
  tlv: null,
  pinRequest: false,
  connected: false,
  requestDisplayMessage: "",
};

const cardReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_DISPLAY:
      return {
        ...state,
        requestDisplay: true,
        requestDisplayMessage: action.payload,
      };
    
      case SEND_TLV_DATA:
      return { ...state, pinRequest: false, tlv: action.payload };
   
      case SCAN_DEVICES:
      return {
        ...state,
        scanning: true,
      };

    case CONNECT_DEVICE:
      return {
        ...state,
        scanning: false,
        connected: true,
      };

    case REQUEST_PIN:
      return {
        ...state,
        pinRequest: true,
      };

    case REQUEST_PIN_DONE:
      return {
        ...state,
        pinRequest: false,
      };

    case DISCONNECT_DEVICE:
      return {
        ...state,
        scanning: false,
        connected: false,
      };

    default:
      return state;
  }
};

export default cardReducer;
