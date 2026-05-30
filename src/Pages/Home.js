import React from 'react'
import './home.css'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div className="homepage">

      <div className="header">
        Welcome
      </div>

      <div className="cardbox">

       <Link to="/New" className="link">
        <div className="card">
          <h3>
           Add New Task </h3>        
        </div>
        </Link>

        <Link to="/Recent" className="link">
        <div className="card">
          <h3>Recent Task</h3>         
        </div>
       </Link>
 

      </div>

    </div>
  )
}