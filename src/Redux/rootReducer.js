import { combineReducers } from "redux";
import { banknameReducer } from "./Bank/BankReducer";
import depositReducer from "./Deposit/DepositReducer";
import cardReducer from "./Card/CardReducer";
import LoginReducer from "./Login/LoginReducer";
import profileReducer from "./Profile/ProfileReducer";
import transactionReducer from "./Transaction/TransactionReducer";

const rootReducer = combineReducers({
  profile: profileReducer,
  login: LoginReducer,
  transaction: transactionReducer,
  bankname: banknameReducer,
  deposit: depositReducer,
  card: cardReducer,
});

export default rootReducer;
