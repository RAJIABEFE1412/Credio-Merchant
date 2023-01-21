import "./SocketType"
import axios from "axios"
export const transactionRequest = () =>{
    return{
        type:TRANSACTION_REQUEST
    }
}


export const init = () => {
    return(dispatch) => {
        dispatch(transactionRequest)
        console.log(`${localStorage.getItem("auth")}`)
        let datas = JSON.parse(localStorage.getItem("auth"))
        console.log(`data ----- ${datas}`)
        console.log(`this is data ${datas.token.token.token}`)
        axios.get('https://credio-api.herokuapp.com/api/v1/agent/user/account/transaction/history'
        , {
            headers: {
                Authorization: `Bearer ${datas.token.token.token}`
            }
        })
            .then( response => {
                const transaction = response.data.transaction
                console.log(`this is transaction--- ${transaction}`)
                dispatch(transactionSuccess(transaction))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(transactionFaliure(errorMsg))
            })
    }
}

export const sendCard = () => {
    return(dispatch) => {
        dispatch(transactionRequest)
        console.log(`${localStorage.getItem("auth")}`)
        let datas = JSON.parse(localStorage.getItem("auth"))
        console.log(`data ----- ${datas}`)
        console.log(`this is data ${datas.token.token.token}`)
        axios.get('https://credio-api.herokuapp.com/api/v1/agent/user/account/transaction/history'
        , {
            headers: {
                Authorization: `Bearer ${datas.token.token.token}`
            }
        })
            .then( response => {
                const transaction = response.data.transaction
                console.log(`this is transaction--- ${transaction}`)
                dispatch(transactionSuccess(transaction))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(transactionFaliure(errorMsg))
            })
    }
}

export const sendCardless = () => {
    return(dispatch) => {
        dispatch(transactionRequest)
        console.log(`${localStorage.getItem("auth")}`)
        let datas = JSON.parse(localStorage.getItem("auth"))
        console.log(`data ----- ${datas}`)
        console.log(`this is data ${datas.token.token.token}`)
        axios.get('https://credio-api.herokuapp.com/api/v1/agent/user/account/transaction/history'
        , {
            headers: {
                Authorization: `Bearer ${datas.token.token.token}`
            }
        })
            .then( response => {
                const transaction = response.data.transaction
                console.log(`this is transaction--- ${transaction}`)
                dispatch(transactionSuccess(transaction))
            })
            .catch(error =>{
                const errorMsg = error.message
                dispatch(transactionFaliure(errorMsg))
            })
    }
}