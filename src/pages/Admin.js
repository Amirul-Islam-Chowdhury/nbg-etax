import React from 'react'
import { useNavigate } from "react-router-dom";
import Layout from '../components/Layout';


export default function Admin()

{
  const navigate = useNavigate();

  return (

    <Layout>
      <div className='button-container'>

<p className='title'>Admin Logged</p>

<button className='btn'
onClick={() => navigate(`../registernewuser`)}>
  Register New user

</button>
<button className='btn'
onClick={() => navigate(`../addUsers`)}>
  Input data

</button>
<button className='btn'
onClick={() => navigate(`../view`)}>
  View List

</button>
<button className='btn'
onClick={() => navigate(`./service`)}>
  Service

</button>



</div>




    </Layout>





  )
}
