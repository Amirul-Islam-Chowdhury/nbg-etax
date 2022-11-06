import React, { useState } from "react";


import Layout from '../components/Layout'
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

import { useNavigate } from "react-router-dom";


export default function UserLogin() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth();


  const login = async () => {

    try {

      const result = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("currentuser", JSON.stringify(result));
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };
  
  return (
  
    <div>
    <Layout/>


    <div className="form">
          <h1 className="login-page-head">User Login</h1>
          <div className="login-form">
            <hr />

            <input
              type="text"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }
            }
            />
            <input
              type="password"
              className="form-control mt-2"
              placeholder="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              
            />

           
           
<button className="login-btn success" onClick={login}>
              {" "}
              Login{" "}
            </button>
          </div>
        </div>

    </div>

   
  )
}

