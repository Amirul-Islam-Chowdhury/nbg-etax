import React from 'react'
import { Link } from "react-router-dom";







function Header() {


 
  return (

    

    <div>
      <nav className="navbar navbar-expand-lg ">
      <div className='logo'>
          <img src='https://graph.facebook.com/257868587911340/picture' height="70" width="70" alt='logo'/>


          </div>
        <div className="container">

          <Link className="navbar-brand" to="/">
            Nabiganj Municipal E-tax
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
          
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
             

             
             

              
              
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}



export default Header