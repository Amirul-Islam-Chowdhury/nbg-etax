import React, { useState } from "react";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";

import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import {toast} from "react-toastify"


export default function AdminLoginPage() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const auth = getAuth();


  const login = async () => {

    try {

      const result = await signInWithEmailAndPassword(auth, email, password);
      navigate(`../admin/`)

      // localStorage.setItem("currentuser", JSON.stringify(result));
      console.log(result)
    } catch (error) {
      console.log(error);
      // setSpinner(false)
      
      toast.error("Incorrect Credential")
    }
  };

  return (
    <div>
    <Layout>


    <div className="register_form">
          <h1 className="login-page-head">Admin  Login</h1>
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
        </Layout>

    </div>

   
      
    
  );
}
