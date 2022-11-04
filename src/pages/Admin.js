import React from 'react'
import { useNavigate } from "react-router-dom";
import Layout from '../components/Layout';


export default function Admin()

{
  const navigate = useNavigate();

  return (

    <Layout>
      <button className='btn'
        onClick={() => navigate(`../add`)}>
          Add new user

        </button>





    </Layout>





  )
}
