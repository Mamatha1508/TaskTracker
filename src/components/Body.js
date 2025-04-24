import React, { useState } from "react";
import InputTasks from "./InputTasks";
import TaskList from "./TaskList";
import PendingTasks from "./PendingTasks";


const Body=()=>{
    const [addChildTask,setChildAddTask]=useState('');
    const handleChildTasks=(data)=>{
        setChildAddTask(data)
    }
    return (
        <div>
            <div><InputTasks getChildtask={handleChildTasks}/></div>
            <div><TaskList task={addChildTask}/></div>
            <div><PendingTasks/></div>
        </div>
    )
}
export default Body