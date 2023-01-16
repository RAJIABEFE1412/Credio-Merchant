import { PROFILE_FALIURE, PROFILE_REQUEST, PROFILE_SUCCESS } from "./ProfileType"
import axios from "axios"

export const profileRequest = () =>{
    return{
        type:PROFILE_REQUEST
    }
}

export const profileSuccess = (profile) =>{
    return{
        type: PROFILE_SUCCESS,
        payload: profile
    }
}

export const profileFaliure = (error) =>{
    return{
        type: PROFILE_FALIURE,
        payload: error
    }
}

export const fetchProfile = () => {
    return(dispatch) => {
        dispatch(profileRequest)
        console.log(`${localStorage.getItem("auth")}`)
        let datas = JSON.parse(localStorage.getItem("auth"))
        console.log(`data ----- ${datas}`)
        console.log(`this is data ${datas.token.token.token}`)
        axios.get('https://credio-api.herokuapp.com/api/v1/agent/user/getProfile', {
            headers: {
                Authorization: `Bearer ${datas.token.token.token}`
            }
        })
            .then( response => {
                const profile = response.data
                console.log(`this is profile--- ${profile}`)
                dispatch(profileSuccess(profile))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(profileFaliure(errorMsg))
            })
    }
}