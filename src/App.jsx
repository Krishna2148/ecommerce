import React from 'react'
import MyRoutes from './MyRoutes'
import { Provider } from 'react-redux'
import { myPersistor, myStore } from './Reducers/store'
import { PersistGate } from 'redux-persist/lib/integration/react'

const App = () => {
  return (
    <>
      <Provider store={myStore}>
        <PersistGate persistor={myPersistor}>
          <MyRoutes />
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
