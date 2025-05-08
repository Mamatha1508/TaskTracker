import React, { useEffect, useState } from "react";


const DeletedTasks=({deletedtask})=>{
  console.log('deleted task',deletedtask)
  useEffect(()=>{

  })

   return (
      <div className="w-100 m-20  ">
         <div>Deleted Tasks </div>
         <div className=" shadow-2xl bg-blue-50">
         {
           deletedtask.length<=1? <h2>No deleted tasks</h2> : deletedtask.map((task,i)=> <div key={`${task}-${i}`} className="m-2 p-2">{task}</div>)
         }
         </div>
         
      </div>
   )
}

export default DeletedTasks;