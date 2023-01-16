import { PROFILE_FALIURE, PROFILE_REQUEST, PROFILE_SUCCESS } from "./ProfileType"

const initialState ={
    loading: false,
    profile: [],
    error: ''
}

const profileReducer = (state = initialState, action) => {
    switch(action.type){
        case PROFILE_REQUEST:
            return{
                ... state,
                loading: true
            }
        case PROFILE_SUCCESS:
            return{
                loading: false,
                profile: action.payload,
                error: ''
            }
        case PROFILE_FALIURE:
            return{
                loading:false,
                profile: [],
                error: action.payload
            }
        default: return state
    }
}

export default profileReducer