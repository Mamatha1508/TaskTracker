import React, { useEffect, useState } from "react";

const TaskList=({tasks})=>{
    
 
    const [deleteItems,setDeleteItems]=useState(tasks);
    const handleDelete=(i)=>{
     setDeleteItems(deleteItems.splice(i,1))
    }
    
    useEffect(()=>{
        setDeleteItems(tasks)
       },[tasks])
    return (
        <div className="mt-10">
            <div className="bg-pink-50 shadow-xl">
                <h3 className="pl-200 pt-5 pb-5 text-3xl">Tasks List</h3>
            </div>
           {
            deleteItems.map((task,i)=>{
                console.log('index',i)
             return  ( 
             <div key={i}>
                <li contentEditable='true' suppressContentEditableWarning={true}>{task}</li>
                <button onClick={()=>handleDelete(i)}>Delete</button>
             </div>
                            
             )
            })
           }
        </div>
    )
}

export default TaskList;