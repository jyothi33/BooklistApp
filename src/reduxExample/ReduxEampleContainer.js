import React from 'react'
import { Provider } from 'react-redux'
import CakeComponent from './components/CakeComponent'
import HookReduxComponent from './components/HookReducComponent'
import UserComponent from './components/UserComponent'
import store from './newstore'

const ReduxEampleContainer = () => {
    return (
       <Provider store={store}>
            {/* <CakeComponent />
            <HookReduxComponent /> */}
            <UserComponent />
       </Provider>
           
        
    )
}

export default ReduxEampleContainer
