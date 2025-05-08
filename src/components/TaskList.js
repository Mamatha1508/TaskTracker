import React, { useEffect, useState } from "react";
import { useContext ,useRef } from "react";
import { deletedTaskContext } from "../utils/deletedTasksContext";

const TaskList = ({ task,getDeleteBtnCount , getDeletedTasks }) => {
  
  const [itemList, setItemList] = useState([]);
  const [deleteTask,setDeleteTask]=useState(0);
  const [deletedTasks,setDeletedTasks]=useState([])
  const ref=useRef(null);
 // console.log('delete task',deleteTask)
  const getTasks = async () => {
    const data = await fetch('http://localhost:3000/tasks');
    const out = await data.json();
    
    setItemList(out.map((task) => {
      if(task.task !='')
        return task;
    }));

  }

  const postDeletedTasks=async (taskId)=>{
    let url= `http://localhost:3000/tasks/${taskId}`
    console.log('url',url)
   const data= await fetch(`http://localhost:3000/tasks/${taskId}`, {
      method: 'DELETE'
    });
    const d= await data.json();

   
    console.log('deleted data',d)
 getTasks()
  }
  const handleTaskDelete=(e)=>{
    console.log('event',e.target.parentElement.childNodes[0])
   setDeleteTask(deleteTask+1);
   setDeletedTasks([e.target.parentElement.childNodes[0].innerText]);
  console.log('delete task',e.target.parentElement.childNodes[0].getAttribute('id'))
  postDeletedTasks(e.target.parentElement.childNodes[0].getAttribute('id'))
   //postDeletedTasks();
  }
  useEffect(() => {
   
    setItemList(getTasks())
},[task])

useEffect(()=>{
  //console.log('in useeffect')
  getDeleteBtnCount(deleteTask);
  console.log('ref',ref)
  getDeletedTasks(deletedTasks)

},[deleteTask])
  console.log('item list ',itemList)
  return (!Array.isArray(itemList) || itemList.length == 0) ? (<div>List is empty</div>) : (
    <div>
      <h2> List Of tasks</h2>
    <div className="w-100 m-20  ">
      {
        itemList.map((item, i) => {

          return(
            <div className="flex  shadow-2xl  mt-1 rounded-lg bg-pink-50" key={`${item.task}- ${i}`}  >
               <div className="w-80 mb-2 ml-4 my-2  p-2 " ref={ref} id={`${item.id}`}>{item.task}</div>
               <button onClick={handleTaskDelete} >🗑️</button>
              </div>
           
          ) 
        })
      }
    </div>
      </div>

   
  )
}

export default TaskList;