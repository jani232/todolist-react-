import React ,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './new.css';
import {Link} from 'react-router-dom'


export default function New() {

  const [task,setTask] = useState({
    currentDate:"",
    taskName:"",
    status:"notComplete"
  });
  
  const handleChange = (e)=>{  //update only ONE field in the form, without deleting the others.
    setTask({
      ...task,
      [e.target.name]:e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();  // stop page refresh


    //Json.parse == text->object  and JSON.stringify == object->text
    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];  // to get old tasks alredy saved

    //creates new task object
    const newTask = {
    ...task, //copies all from data
    id: Date.now()  //add unique id
    };

    //Adds new task into old tasks array.
    const updatedTasks = [...existingTasks, newTask];


   // Saves updated tasks back into browser storage.
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));

    console.log("Form Data:", task); 
    alert(`Date: ${task.currentDate}\nName: ${task.taskName}\n`);

    //cleans all inputs after submit
    setTask({
      currentDate:"",
      taskName: "",
      status:"notComplete"
    });
  };


  return (

    <div className="container" >
      <div className="buttonNew">
      <Link to="/">
        <button className="backButton">
          Back
        </button>
      </Link>

      <Link to="/Recent">
        <button className="recentButton">
          Tasks
        </button>
      </Link>
      </div>
      <div className="headerNew">
      <h2>Add New Task</h2>
      </div>

      <Form onSubmit ={handleSubmit} className="form-container">

      <Form.Group className="mb-3" controlId="formBasicDate">
        <Form.Label className ="formName">Date</Form.Label>
        <Form.Control type="date" name="currentDate" placeholder="Enter Current Date" value={task.currentDate} onChange ={handleChange} />
      </Form.Group>


      <Form.Group className="mb-3" controlId="formBasicInput">
        <Form.Label className ="formName">Task Name</Form.Label>
        <Form.Control type="text" name="taskName" placeholder="Enter title" value={task.taskName} onChange={handleChange} />
      </Form.Group>


      <Button variant="primary" type="submit">
        Submit
      </Button>

    </Form>
    </div>
  )
}





