import { useContext } from 'react'
import AuthContext from '../Redux/Login/LoginReducer'

const useAuth = () => useContext(AuthContext)

export default useAuth
