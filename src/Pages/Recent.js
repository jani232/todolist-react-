import React, { useState, useEffect } from 'react';
import './recent.css'
import {Link} from 'react-router-dom'

export default function Recent() {

  const [tasks, setTasks] = useState([]); //useState  --> Store and update data

  useEffect(() => {     //useEffect-->Run code when something happens
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(storedTasks);
  }, []);

    // mark as complete
  const markComplete = (id) => {
    const updated = tasks.map((t) => {
      if (t.id === id) {
        return { ...t, status: "completed" };
      }
      return t;
    });
  setTasks(updated);
    localStorage.setItem("tasks", JSON.stringify(updated));
  };


    // GROUP BY DATE
  const groupedTasks = tasks.reduce((acc, task) => {
    const date = task.currentDate;

    if (!acc[date]) {
      acc[date] = [];
    }

    acc[date].push(task);

    return acc;
  }, {});


   return (
    <div className="container">

<div className="headerRecent">
          <h2>Recent Tasks</h2>
                </div>

      <Link to="/New" className="recentLink">
      <button className="AddNew">+ Add New Task</button>
      </Link>

      



      {Object.keys(groupedTasks).length === 0 ? (
        <p>No tasks yet</p>
      ) : (
        Object.keys(groupedTasks).map((date) => (
          <div key={date} className="recentCard">

          <div className="recentheader">
            <h3>{date}</h3>
          </div>
            {groupedTasks[date].map((t) => (
              <div key={t.id} className="taskItem">

                
                <input
                  type="checkbox"
                  checked={t.status === "completed"}
                  onChange={() => markComplete(t.id)} 
                />

                <span className="recentp">
                  {t.taskName}
                </span>

              </div>
            ))}

          </div>
        ))
      )}
    </div>
  );
}