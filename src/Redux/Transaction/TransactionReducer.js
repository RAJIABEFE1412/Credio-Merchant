import { TRANSACTION_FALIURE, TRANSACTION_REQUEST, TRANSACTION_SUCCESS } from "./TransactionType"

const initialState ={
    loading: false,
    transaction: [],
    error: ''
}

const transactionReducer = (state = initialState, action) => {
    switch(action.type){
        case TRANSACTION_REQUEST:
            return{
                ... state,
                loading: true
            }
        case TRANSACTION_SUCCESS:
            return{
                loading: false,
                transaction: action.payload,
                error: ''
            }
        case TRANSACTION_FALIURE:
            return{
                loading:false,
                transaction: [],
                error: action.payload
            }
        default: return state
    }
}

export default transactionReducer