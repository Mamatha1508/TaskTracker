import React from "react"
import { Link } from "react-router"

const DeletedTasksWrapper=()=>{
    return (
        <div>
            <Link to='/delete-tasks'>
            <div className="h-50 w-50 ml-50 mt-30 shadow-lg rounded-2xl">
              <h3 className="mt-25 ml-4 tp-4">Deleted tasks</h3>
              
            </div>
            </Link>
        </div>
    )
}

export default DeletedTasksWrapper;