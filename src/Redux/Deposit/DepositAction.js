import { DEPOSIT_FALIURE, DEPOSIT_REQUEST, DEPOSIT_SUCCESS } from "./DepositType"
import axios from "axios"
export const depositRequest = () => {
    return{

        type: DEPOSIT_REQUEST
    }
}
export const depositSuccess = (deposit) => {
    return{
        type: DEPOSIT_SUCCESS,
        payload: deposit
    }
} 

export const depositFaliure = (error) => {
    return{
        type: DEPOSIT_FALIURE,
        payload: error
    }
}

export const depositData = (depositState) => {
    return async (dispatch) => {
        try{
            console.log(`${localStorage.getItem("auth")}`)
            let datas = JSON.parse(localStorage.getItem("auth"))
            console.log(`data ----- ${datas}`)
            console.log(`this is data ${datas.token.token.token}`)
            const headers = {
                'Content-Type': 'application/json',
                "authorization": `Bearer ${datas.token.token.token}`
            }
            console.log(depositState)
            const res = await axios.post('https://credio-api.herokuapp.com/api/v1/agent/action/deposit/OtherBank', depositState, {headers:headers});
            const {data} = res;
            console.log(res)
            console.log(data)
            if(res.status===200){
                dispatch(depositSuccess(data))
            } 
        }catch(error){
           if(error.response){
                dispatch(depositFaliure(error))
           } 
        }
    }
}