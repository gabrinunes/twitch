import React from 'react'

import Routes from './src/routes'
import {Provider} from 'react-redux'
import dados from './src/store/store'
export default function App() {
  
    return (
      <Provider store={dados}>
        <Routes/>
      </Provider>
    );
}
