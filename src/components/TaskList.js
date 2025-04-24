import React, { useEffect, useState } from "react";

const TaskList = ({ task }) => {

  const [itemList, setItemList] = useState([]);
  const getTasks = async () => {
    const data = await fetch('http://localhost:3000/tasks');
    const out = await data.json();

    setItemList(out.map((task) => task.task));

  }
  useEffect(() => {
    setItemList(getTasks())
  }, [task])


  return (!Array.isArray(itemList) || itemList.length == 0) ? (<div>List is empty</div>) : (
    <div>
      {
        itemList.map((item, i) => {
          return <div key={`${item}- ${i}`}>{item}</div>
        })
      }
    </div>
  )
}

export default TaskList;