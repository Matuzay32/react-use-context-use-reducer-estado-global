import React from 'react'
import MyComponent from './componenets/MyComponent'
import StoreProvider from './store/StoreProvoder';

export default function App() {
  return (

    <StoreProvider>
      
    <div><MyComponent/></div>

    </StoreProvider>
  )
}
