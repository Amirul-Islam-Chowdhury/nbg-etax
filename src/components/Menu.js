import React from 'react'
import { useNavigate } from "react-router-dom";
import Banner from './Banner';


function Menu() {
  const navigate = useNavigate();

  return (
    
    <div className='button-container'>




        <h4 className='title'> E-service</h4>

        <button className='btn'
        onClick={() => navigate(`./userlogin`)}>
          Check Your Tax

        </button>
        <button className='btn'
        onClick={() => navigate(`./adminlogin`)}>
          Admin

        </button>
        <button className='btn'
        onClick={() => navigate(`./contact`)}>
          Contact Us

        </button>
        


    </div>
  )
}

export default Menu