import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { CounterCustomHook } from './useState/CounterCustomHook'
// import { SimpleForm } from './useEffect/SimpleForm'
import { FormWithCustomHook } from './useEffect/FormWithCustomHook'
// import { HooksApp } from './HooksApp'
// import { CounterApp } from './useState/CounterApp'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    
    // <SimpleForm/>
    <FormWithCustomHook/>
  // </React.StrictMode>
)
