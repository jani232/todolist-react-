import React,{ useState , useEffect} from 'react'
import './complete.css';

export default function Complete() {

  const[tasks,setTasks] =useState([]);

  useEffect (()=> {
  const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

  const completedTasks = tasks.filter((t) => t.status === "completed");
  return (
    <div className="container">

      <div className='headerComplete'>
     <h2> Completed Tasks </h2>
    </div>
      {completedTasks.length ===0 ? (
        <p>No completed tasks yet</p>
      ) : (
        completedTasks.map((t) => (
          <div key ={t.id}>
            <h3 >
              {t.taskName}
            </h3>

            <p><b>Created:</b> {t.currentDate}</p>
            <p><b>Deadline:</b> {t.completedDate}</p>
            <p>{t.description}</p>

                        <p style={{ color: "green", fontWeight: "bold" }}>
              ✔ Completed
            </p>
          </div>
        )
      ))}
    </div>
  )
}
