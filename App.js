
import React from 'react'
import ReactDOM from 'react-dom/client'

const App=()=>{
    return (
        <h1>This is React</h1>
    )
}

const root= ReactDOM.createRoot(document.getElementById('root'));
setTimeout(()=>{
    root.render(<App/>)
},2000)
