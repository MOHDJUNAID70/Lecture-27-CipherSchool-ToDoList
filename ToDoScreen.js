// import { Component } from "react";
import { useContext } from "react";
import Task from "../components/Task";
import AddTask from "../components/AddTask";
import TaskContext from "../context/TaskContext";
import { useNavigate } from "react-router-dom";

// class ToDoScreen extends Component{
//     state={
//         taskcount: 0,
//     }
//     render(){
//         return(
//             <div className="screen">
//                 <h1 className="ui heading center">To Do List</h1>
//                 <button onClick={(e)=>{
//                     this.setState({
//                         ...this.state, taskcount: this.state.taskcount+1,
//                     })
//                     console.log(this.state.taskcount);
//                     console.log("add task button was clicked")
//                 }} className="ui secondary button">Add Task</button>
//                 <p>the number of tasks are: {this.state.taskcount}</p>
//             </div>
//         )
//     }
// }


const ToDoScreen=()=>{
    const {tasklist}=useContext(TaskContext)

    const navigate=useNavigate();
    return(
            
                    <div className="screen">
                        <h1 className="ui heading center">To Do List</h1>
                        <button onClick={(e)=>{
                        navigate("/add-task");

                        }} className="ui secondary button">Add Task</button>
                        <section>
                        <div className="ui cards">
                        {tasklist.map((task)=>(
                            <Task task={task} key={task.taskid}/>
                        ))}
                        </div>
                        </section>
                        {/* <AddTask onSubmit={addNewTask}/> */}
                        </div>
                    
                )
}
export default ToDoScreen;