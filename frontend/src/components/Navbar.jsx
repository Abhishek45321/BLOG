import React from 'react'
import {Link} from "react-router-dom"

function Navbar() {
  return (
    
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div classNameName="container-fluid">
    <a classNameName="navbar-brand" href="#">navbar</a>
    <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Mern</a>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to={"/"}>Create Post</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"./all"}>All Post</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    
  )
}

export default Navbar