import { useCallback, useContext, useState } from "react";
import { formateDate } from "../utils/DateUtil";
import TaskContext from "../context/TaskContext";

// const Task = (props) => {
//   console.log(props);
//     return (
//         <div className="card">
//     <div className="content">
//       <div className="header">Go to Gym</div>
//       <div className="description">
//       <div class="meta">
//         Created Date
//       </div>
//       going to gym is good for muscle growth.
//       </div>
//     </div>
//     <div className="extra content">
//       <div className="ui two buttons">
//         <div className="ui basic green button">Edit</div>
//         <div className="ui basic red button">Delete</div>
//       </div>
//     </div>
//   </div>
//     );
// };


const Task = (incomingtask) => {
  const {title, description, createdDate, taskid}=incomingtask
  const {deleteTask,editTask}=useContext(TaskContext);
  const [isediting, setisediting]= useState(false);
  const [task,setTask]=useState(incomingtask);

let changevalue=(e)=>{
    setTask({
        ...task, [e.target.name]: e.target.value,
    })
}

  if(isediting){
    return(
        <div className="card">
    <div className="content">
    <div className="ui form">
      {/* <div className="header">{title}</div> */}
      <div className="field">
        <input type="text"
        spellCheck={false}
        data-ms-editor={true} 
        placeholder="Task Tilte"
        name="title"
        onChange={changevalue}
        value={task.title}
        />
      </div>
      </div>
      <div className="meta">
        {formateDate(createdDate)}
      </div>
      {description}
    </div>
    <div className="extra content">
      <div className="ui two buttons">
        <div className="ui basic green button"
        onClick={()=> {editTask(taskid)
          setisediting(false)
        }}
        >Save</div>
        <div className="ui basic red button" 
        onClick={()=>setisediting(false)}
        >Cancel</div>
      </div>
    </div>
  </div>
    )
  } else{

  }
    return (
        <div className="card">
    <div className="content">
      <div className="header">{title}</div>
      <div className="field">
        <textarea rows="3"
        spellCheck={false}
        data-ms-editor={true} 
        placeholder="Task Description" 
        name="description"
        onChange={changevalue}
        value={task.description}
        />
    </div> 
    </div>
      <div className="meta">
        {formateDate(createdDate)}
      </div>
      {description}
    <div className="extra content">
      <div className="ui two buttons">
        <div className="ui basic green button"
        onClick={()=> setisediting(true)}
        >Edit</div>
        <div className="ui basic red button" 
        onClick={()=>deleteTask(taskid)}
        >Delete</div>
      </div>
    </div>
  </div>
    );
};


export default Task;