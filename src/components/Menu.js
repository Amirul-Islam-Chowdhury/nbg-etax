import React from 'react'
import { useNavigate } from "react-router-dom";


function Menu() {
  const navigate = useNavigate();

  return (
    <div className='button-container'>

        <p className='title'>Home</p>

        <button className='btn'
        onClick={() => navigate(`./tax`)}>
          Tax

        </button>
        <button className='btn'
        onClick={() => navigate(`./admin`)}>
          Admin

        </button>
        <button className='btn'
        onClick={() => navigate(`./service`)}>
          Service

        </button>
        


    </div>
  )
}

export default Menu