import axios from "axios"
import { BANK_FALIURE, BANK_REQUEST, BANK_SUCCESS } from "./BankType"

export const bankRequest = () =>{
    return{
        type: BANK_REQUEST
    }
}

export const bankSuccess = (bank) =>{
    return{
        type: BANK_SUCCESS,
        payload: bank
    }
}

export const bankFaliure = (error) =>{
    return{
        type: BANK_FALIURE,
        payload: error
    }
}


export const fetchBank = () => {
    return(dispatch) => {
        dispatch(bankRequest)
        console.log(`${localStorage.getItem("auth")}`)
        let datas = JSON.parse(localStorage.getItem("auth"))
        // console.log(`data ----- ${datas}`)
        // console.log(`this is data ${datas.token.token.token}`)
        axios.get('https://credio-api.herokuapp.com/api/v1/agent/action/deposit/nibss', {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${datas.token.token.token}`
            }
        })
            .then( response => {
                const bank = response.data.data
                console.log(`this is banksss--- ${bank}`)
                dispatch(bankSuccess(bank))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(bankFaliure(errorMsg))
            })
    }
}
