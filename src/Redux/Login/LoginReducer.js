import { LOGIN_USER_FAILURE, LOGIN_USER_REQUEST, LOGIN_USER_SUCCESS } from "./LoginTypes"
import React, { createContext, useEffect, useReducer } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode'
import JSEncrypt from 'jsencrypt';
import consts from "../../Pages/Login/keys/const";
import { AuthActionType } from "./LoginAction";

const authState = {
    dataAdded: false,
    token: {}  
};
const getAuthState = () => {
    const auth = localStorage.getItem("auth");
    try {
      const authobj = JSON.parse(auth);
      const { token } = authobj.user;
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        return authobj;
        return authState;
    } catch (error) {
      return authState;
    }
};
const newAuth = getAuthState();
const authReducer = (state = authState, action) => {
    switch (action.type) {
        // case AuthActionType.REGISTER_SUCCESS:
        //   const newAuthState = {
        //     isLoggedIn: true,
        //     user: action.payload,
        //   };
        //   axios.defaults.headers.common[
        //     "Authorization"
        //   ] = `Bearer ${action.payload.jwttoken}`;
        //   localStorage.setItem("auth", JSON.stringify(newAuthState));
        //   return newAuthState;
    
        // case AuthActionType.LOGOUT_SUCCESS:
        //   localStorage.removeItem("auth");
        //   return authState;
    
        case AuthActionType.LOGIN_SUCCESS:
          const loginAuthState = {
            dataAdded: true,
            token: action.payload,
          };
          axios.defaults.headers.common[
            "Authorization"
          ] = `Bearer ${action.payload.token}`;
          console.log(action.payload.token)
          localStorage.setItem("auth", JSON.stringify(loginAuthState));
          return loginAuthState;
    
        default:
          return state;
      }
}
export default authReducer
// const initialState = {
//     loading:false,
//     user: [],
//     error: ""
// }

// const reducer = (state = initialState, action) => {
//     switch(action.type) {
//         case LOGIN_USER_REQUEST:
//             return{
//                 ... state,
//                 loading: true
//             }
//         case LOGIN_USER_SUCCESS:
//             return{
//                 loading: false,
//                 user: action.payload,
//                 error: ""
//             }
//         case LOGIN_USER_FAILURE:
//             return{
//                 loading: false,
//                 user: [],
//                 error: action.payload
//             }
//         default: return state 
//     }
// }
// var gotUser;
// const initialState = {
//     isAuthenticated: false,
//     isInitialised: false,
//     user: null,
// };
// const isValidToken = (accessToken) => {
//     if (!accessToken) {
//       return false;
//     }
  
//     const decodedToken = jwtDecode(accessToken);
//     const currentTime = Date.now() / 1000;
//     return decodedToken.exp > currentTime;
// };
// const setSession = (accessToken) => {
//     if (accessToken) {
//       sessionStorage.setItem('accessToken', accessToken);
//       axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
//     } else {
//       sessionStorage.removeItem('accessToken');
//       delete axios.defaults.headers.common.Authorization;
//     }
//   };
//   const setUser = (user) => {
//     if (user) {
//       sessionStorage.setItem('user', user);
//       // axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`
//     } else {
//       sessionStorage.removeItem('user');
//       // delete axios.defaults.headers.common.Authorization
//     }
// };
// const reducer = (state, action) => {
//     switch (action.type) {
//       case 'INIT': {
//         const { isAuthenticated } = action.payload;
//         const user = sessionStorage.getItem('user');
  
//         return {
//           ...state,
//           isAuthenticated,
//           isInitialised: true,
//           user,
//         };
//       }
//       case 'LOGIN': {
//         // const { user } = action.payload
  
//         const user = sessionStorage.getItem('user');
//         return {
//           ...state,
//           isAuthenticated: true,
//           user,
//         };
//       }
//       case 'LOGOUT': {
//         return {
//           ...state,
//           isAuthenticated: false,
//           user: null,
//         };
//       }
//       case 'REGISTER': {
//         const { user } = action.payload;
  
//         return {
//           ...state,
//           isAuthenticated: true,
//           user,
//         };
//       }
//       default: {
//         return { ...state };
//       }
//     }
//   };
  
// const AuthContext = createContext({
//     ...initialState,
//     method: 'JWT',
//     login: () => Promise.resolve(),
//     logout: () => {},
//     register: () => Promise.resolve(),
// });
// export const AuthProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(reducer, initialState);
  
//     const login = async (email, password) => {
//       var encrypt = new JSEncrypt();
//       encrypt.setPublicKey(`${consts.pub_key}`);
//       var encrypted = encrypt.encrypt(password);
  
//       const response = await axios.post('https://credio-api.herokuapp.com/api/v1/admin/auth/login', {
//         email,
//         password: encrypted,
//       });
  
//       const { token, user } = response.data;
//       setUser(user);
//       console.log('new user --- $ ', user);
  
//       setSession(token);
  
//       dispatch({
//         type: 'LOGIN',
//         payload: {
//           user,
//         },
//       });
//     };
  
//     const register = async (email, username, password) => {
//       var encrypt = new JSEncrypt();
//       encrypt.setPublicKey(`${consts.pub_key}`);
//       var encrypted = encrypt.encrypt(password);
  
//       const response = await axios.post(
//         'https://credio-api.herokuapp.com/api/v1/admin/auth/register',
//         {
//           email,
//           username,
//           password: encrypted,
//         }
//       );
//       console.log('error -- ', response.error);
//       const { token, user } = response.data;
//       setUser(user);
//       setSession(token);
  
//       dispatch({
//         type: 'REGISTER',
//         payload: {
//           user,
//         },
//       });
//     };
  
//     const logout = () => {
//       setSession(null);
//       setUser(null);
//       dispatch({ type: 'LOGOUT' });
//     };
  
//     useEffect(() => {
//       (async () => {
//         try {
//           const accessToken = sessionStorage.getItem('accessToken');
//           const gotUser = sessionStorage.getItem('user');
//           console.log('accessToken -- ', accessToken);
//           console.log('user prototype ', Object.prototype.toString.call(gotUser));
  
//           if (accessToken && isValidToken(accessToken) && gotUser) {
//             setSession(accessToken);
//             setUser(gotUser);
//             dispatch({
//               type: 'INIT',
//               payload: {
//                 isAuthenticated: true,
//                 gotUser,
//               },
//             });
//           } else {
//             dispatch({
//               type: 'INIT',
//               payload: {
//                 isAuthenticated: false,
//                 user: null,
//               },
//             });
//           }
//         } catch (err) {
//           console.error(err);
//           dispatch({
//             type: 'INIT',
//             payload: {
//               isAuthenticated: false,
//               user: null,
//             },
//           });
//         }
//       })();
//     }, []);
  
//     if (!state.isInitialised) {
//       return <div>loading</div>;
//     }
  
//     return (
//       <AuthContext.Provider
//         value={{
//           ...state,
//           method: 'JWT',
//           login,
//           logout,
//           register,
//         }}
//       >
//         {children}
//       </AuthContext.Provider>
//     );
//   };
  
//   export default AuthContext;

  

// export default reducer