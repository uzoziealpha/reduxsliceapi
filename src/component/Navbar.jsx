import React from "react";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="#">
          ergon
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <a class="nav-link" href="#">
                Home 
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                our solutions
              </a>
            </li>
            <div className='buttons'>
               <a href="" className="btn btn-outline-dark">
               <i className='fa fa-sign-in'></i>
                Sign In
               </a>
            </div>
          </ul>
        </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
