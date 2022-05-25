import React from 'react'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <h1>Event Planner</h1>        
        <div className="nav-buttons">
        <button className='btn btn-navbar'><i className="fa-solid fa-user"></i></button>
        <button className='btn btn-navbar'><i className="fa-solid fa-calendar"></i></button>
        <button className='btn btn-navbar'>
          <i className="fa-solid fa-calendar"></i>
          <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar