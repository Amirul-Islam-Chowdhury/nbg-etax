import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { getAuth, signOut } from "firebase/auth";


export default function Admin() {
  const navigate = useNavigate();

  const logOut = async () => {
    const auth = getAuth();


    try {

      const result = await signOut(auth).then(()=>{
        navigate("/")


      })
      console.log(result)
    } catch (error) {
      console.log(error);

    }
  };

  return (

    
    <Layout>
     
      <div className="button-container">
        <p className="title">Admin Logged</p>

        <button className="btn" onClick={() => navigate(`../registernewuser`)}>
          Register New user
        </button>
        
        <button className="btn" onClick={() => navigate(`../view`)}>
          View List
        </button>
        <button className="btn" onClick={() => navigate(`./service`)}>
          Service
        </button>
        <button className="btn btn-danger" onClick={logOut}>
          
          Log Out
        </button>

      </div>
    </Layout>
  );
}
