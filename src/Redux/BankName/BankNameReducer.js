import { POST_SUCCESS } from "./BankNameType"

const initialState ={
    loading: false,
    bankname: [],
    error: ''
}

const banknameReducer = (state=initialState, action)=>{
    switch (action.type){
        case POST_SUCCESS:
            return{
                loading: false,
                bankname: action.payload,
                error: ''
            }
        default: return state;
    }
}

export default banknameReducer