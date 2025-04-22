import React, { useRef, useState } from "react";

const InputTasks=({getChildtask})=>{
    const ref= useRef();
    //const [addTask,setAddTask]=useState('')
   const addingTasks=()=>
    {
       // setAddTask(ref.current.value);
        getChildtask(ref.current.value)

    }
    return (
        <div>
            <div className="pl-40 pt-10 ">
            <input  ref={ref} className=" p-2 shadow-xl w-100 bg-blue-50" type="text" placeholder="Add Your Task"/>
            
            <button onClick={addingTasks} className="shadow-xl bg-blue-50 ml-30 p-3 rounded-lg">Add Task</button>
            </div>
           
            
           
        </div>
    )
}

export default InputTasks;