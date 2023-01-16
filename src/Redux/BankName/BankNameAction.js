import axios from "axios"
import { FETCH_SUCCESS, POST_SUCCESS } from "./BankNameType"

export const postSuccess = (name) =>{
    return{
        type: POST_SUCCESS,
        payload: name
    }
}

export const fetchSuccess = (error) =>{
    return{
        type: FETCH_SUCCESS,
        payload: error
    }
}

export const postData = (postState) => {
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
            console.log(postState)
            const res = await axios.post('https://credio-api.herokuapp.com/api/v1/agent/action/deposit/nibss/name', postState, {headers:headers});
            const {data} = res;
            console.log(res)
            console.log(data)
            if(res.status===200){
                dispatch(postSuccess(data))
            } 
        }catch(error){
           if(error.response){
                dispatch(fetchSuccess(error))
           } 
        }
    }
}