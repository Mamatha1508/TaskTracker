import { Link } from "react-router";
import AddTasksWrapper from "./AddTasksWrapper";
import React from 'react';
import InProgressTasksWrapper from "./InProgressTasksWrapper";
import DeletedTasksWrapper from "./DeletedTasksWrapper";


const BodyWrapper=()=>{
    return (
        <div className="flex">
         <AddTasksWrapper/>
         <InProgressTasksWrapper/>
         <DeletedTasksWrapper/>
        </div>
    )
}

export default BodyWrapper;