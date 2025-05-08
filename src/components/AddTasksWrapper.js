import Body from "./Body";
import React from 'react';
import { Link } from "react-router";


const AddTasksWrapper=()=>{
    return (
        <div>
            <Link to='/add-tasks'>
            <div className="h-50 w-50 ml-50 mt-30 shadow-lg rounded-2xl">
              <h3 className="mt-25 ml-4 tp-4">Click here to add the tasks</h3>
              
            </div>
            </Link>
        </div>
    )
}

export default AddTasksWrapper;