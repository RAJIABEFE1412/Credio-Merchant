import { BANK_FALIURE, BANK_REQUEST, BANK_SUCCESS } from "./BankType"

const initialState ={
    loading: false,
    bank: [],
    error: ''
}

const bankReducer = (state = initialState, action) => {
    switch(action.type){
        case BANK_REQUEST:
            return{
                ... state,
                loading: true
            }
        case BANK_SUCCESS:
            return{
                loading: false,
                bank: action.payload,
                error: ''
            }
        case BANK_FALIURE:
            return{
                loading:false,
                bank: [],
                error: action.payload
            }
        default: return state
    }
}

export default bankReducer