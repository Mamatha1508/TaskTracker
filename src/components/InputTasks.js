import React, { useEffect, useRef, useState } from "react";

const InputTasks = ({ getChildtask }) => {
    const ref = useRef();
   
    const [btnClick, setBtnClick] = useState(false);

    const handleClick = () => {
        setBtnClick(!btnClick);

    }

    const postTasks = async () => {
        const data = await fetch('http://localhost:3000/tasks', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ task: ref.current.value }),
        })


    }



    useEffect(() => {
        if (btnClick) {
            postTasks();
            getChildtask(btnClick)
        }
    })
    return (
        <div>
            <div className="pl-40 pt-10 ">
                <input ref={ref} className=" p-2 shadow-xl w-100 bg-blue-50" type="text" placeholder="Add Your Task" />

                <button onClick={handleClick} className="shadow-xl bg-blue-50 ml-30 p-3 rounded-lg">Add Task</button>
            </div>



        </div>
    )
}

export default InputTasks;