// // AuthContext.js

// import React, { createContext, useContext, useReducer } from 'react';
// import authReducer from './authReducers';
// import store from './Store';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(authReducer, store.getState());

//   return (
//     <AuthContext.Provider value={{ state, dispatch }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuth = () => {
//   return useContext(AuthContext);
// };
