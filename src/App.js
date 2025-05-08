
import React from 'react'
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import BodyWrapper from './components/BodyWrapper';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router';
import PendingTasks from './components/PendingTasks';
import AddTasksWrapper from './components/AddTasksWrapper';
import InputTasks from './components/InputTasks';

const App=()=>{
    return (
        <div className='bg-black-100'>
            <Header/>
            <Outlet/>
        </div>
        
    )
}

const AppRouter=createBrowserRouter([
    {
    path:'/',
    element:<App/>,
    children:[
        {
            path :'/',
            element :<BodyWrapper/>
        },
        {
        path :'/add-tasks',
        element : <Body/>
         },
         {
            path :'/update-tasks',
            element : <Body/>
        }
        ]
}])
const root= ReactDOM.createRoot(document.getElementById('root'));
setTimeout(()=>{
    root.render(<RouterProvider router={AppRouter}/>)
},1000)
