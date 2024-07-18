import {createContext, useState } from "react";
import {v4 as randomUUID} from "uuid";

const TaskContext=createContext();
const Task_editable=["title","description"]

const TaskProvider=({children})=>{
    const [tasklist, setTaskList]=useState([]);

    const addNewTask=(task)=>{
        setTaskList([...tasklist, {...task, createDate: new Date() }])
    }

    const deleteTask=(taskid)=>{
        setTaskList(tasklist.filter((task)=> 
            task.taskid !== taskid
        ))
    }

    const editTask=(task)=>{
        let temptasklist=[...tasklist];
        for(let t of temptasklist){
            if(t.taskid===task.taskid){
                Task_editable.forEach((field)=>(t[field]=task[field]));
            }
        }
        setTaskList(tasklist);
    }

    return(
        <TaskContext.Provider value={{tasklist, addNewTask, deleteTask,editTask}}>{children}</TaskContext.Provider>
    )
}

export {TaskProvider};
export default TaskContext;
