import React from 'react'
import { useNavigate } from "react-router-dom";


function Menu() {
  const navigate = useNavigate();

  return (
    <div className='button-container'>

        <p className='title'>Home</p>

        <button className='btn'
        onClick={() => navigate(`./userlogin`)}>
          Login as User

        </button>
        <button className='btn'
        onClick={() => navigate(`./adminlogin`)}>
          Login as Admin

        </button>
        <button className='btn'
        onClick={() => navigate(`./service`)}>
          Contact Us

        </button>
        


    </div>
  )
}

export default Menu