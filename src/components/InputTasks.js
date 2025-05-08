import React, { useEffect, useRef, useState } from "react";

const InputTasks = ({ getChildtask }) => {
    const ref = useRef();
   
    const [btnClick, setBtnClick] = useState(0);
    
    const handleClick = () => {
        setBtnClick(btnClick+1);
       
    }

    const postTasks = async () => {
        const data = await fetch('http://localhost:3000/tasks', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ task: ref.current.value ,id : Date.now() }),
        })
        ref.current.value=""


    }



    useEffect(() => {
           
            postTasks();
            getChildtask(btnClick)
         
    },[btnClick])
    return (
        <div>
            <div className="pl-40 pt-10 ">
                <input  ref={ref} className=" p-2 shadow-xl w-100 bg-blue-50" type="text" placeholder="Add Your Task" />

                <button onClick={handleClick} className="shadow-xl bg-blue-50 ml-30 p-3 rounded-lg">Add Task</button>
            </div>



        </div>
    )
}

export default InputTasks;