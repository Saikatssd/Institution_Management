import React, { useState, createContext } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from './Store.jsx'
import { Provider } from 'react-redux'


// export const server = 'http://localhost:5000'

// export const Context = createContext({ isAuthenticated: false })

// const AppWrapper = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false)
//   return (
//     <Context.Provider value={{
//       isAuthenticated, setIsAuthenticated,
//     }}>
//       <App />
//     </Context.Provider>
//   )
// }


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    {/* <AlertProvider template={AlertTemplate} {...option}> */}
      <App />
    {/* </AlertProvider> */}
  </Provider>,
)
