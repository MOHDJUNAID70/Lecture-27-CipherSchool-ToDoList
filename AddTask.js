import { useContext, useState } from "react";
import TaskContext from "../context/TaskContext";
import { useNavigate } from "react-router-dom";
   
const AddTask =()=>{
    const {addNewTask}=useContext(TaskContext);
    const navigate=useNavigate();

    const [task, setTask]=useState({
        title: "",
        description: "",
    })

    let changevalue=(e)=>{
        setTask({
            ...task, [e.target.name]: e.target.value,
        })
    }
    let formsubmit = (e)=>{
        e.preventDefault();
        console.log(task);
        addNewTask(task);
        setTask({});
        navigate("/");
    }
    return (
        <>
        <h3 className="ui heading center">Add New Task</h3>
    <div className="ui form">
    <form onSubmit={formsubmit}>
    <div className="field">
        <label>Title</label>
        <input type="text"
        spellCheck={false}
        data-ms-editor={true} 
        placeholder="Task Tilte"
        name="title"
        onChange={changevalue}
        value={task.title}
        />
    </div>
    <div className="field">
        <label>Description</label>
        <textarea rows="3"
        spellCheck={false}
        data-ms-editor={true} 
        placeholder="Task Description" 
        name="description"
        onChange={changevalue}
        value={task.description}
        />
    </div> 
    <button type="submit" className="ui primary button">
        Submit
    </button> 
    </form>
    </div>
    </>
    )
}


export default AddTask;