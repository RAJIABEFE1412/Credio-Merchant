import {combineReducers} from 'redux'
import bankReducer from './Bank/BankReducer'
import banknameReducer from './BankName/BankNameReducer'
import depositReducer from './Deposit/DepositReducer'
import LoginReducer from './Login/LoginReducer'
import profileReducer from './Profile/ProfileReducer'
import transactionReducer from './Transaction/TransactionReducer'

const rootReducer =  combineReducers({
    profile: profileReducer,
    login: LoginReducer,
    transaction: transactionReducer,
    bank: bankReducer,
    bankname: banknameReducer,
    deposit: depositReducer
})

export default rootReducer