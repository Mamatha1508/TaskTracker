import React, { useState } from "react";
import InputTasks from "./InputTasks";
import TaskList from "./TaskList";
import PendingTasks from "./PendingTasks";
import { useContext } from "react";
import { deletedTaskContext } from "../utils/deletedTasksContext";
import DeletedTasks from "./DeletedTasks";


const Body=()=>{
    const [addChildTask,setChildAddTask]=useState(0);
    const [deletedtask,setDeletedTask]= useState([]);
    const [deletedbtnclicked,setDeleteBtnClicked]=useState(0);
    const handleChildTasks=(data)=>{
        setChildAddTask(data)
    }
    const handleDeleteTaskCount=(data)=>{
        setDeleteBtnClicked(data)
    }
    const handleDeletedTasks=(data)=>{
        console.log('data in handle deleted tasks',data,[...deletedtask,data])
        let tasks= [...deletedtask,data];
        console.log('tasks arr',tasks)
        setDeletedTask(tasks)
    }
    return (
        <div>
           
            <div><InputTasks getChildtask={handleChildTasks}/></div>
            <div className="flex">  
                 <div><TaskList task={addChildTask} getDeleteBtnCount={handleDeleteTaskCount} getDeletedTasks={handleDeletedTasks}/></div>
                 <div><DeletedTasks  deletedbtnclicked={deletedbtnclicked} deletedtask={deletedtask}/></div>
            </div>
         
            <div><PendingTasks/></div>
           
          
        </div>
    )
}
export default Body