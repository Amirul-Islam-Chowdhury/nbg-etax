import React, { useState } from "react";


import Layout from '../components/Layout'
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import {  useNavigate } from "react-router-dom";




export default function UserLogin() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate= useNavigate()

  const auth = getAuth();


  const login = async () => {

    try {

      const result = await signInWithEmailAndPassword(auth, email, password).then(()=>{
        navigate(`../userinfopage/`)


      })
      // localStorage.setItem("currentuser", JSON.stringify(result));
      console.log("successful")
    } catch (error) {
      console.log("worng password");
    }
  };
  
  return (
  
    <div>
    <Layout/>



    


    <div className="contanier">
    <div className="title">

<h3> User Login</h3>
</div>

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

           
           
            <button className="btn btn-primary" onClick={login}>
              {" "}
              Login{" "}
            </button>
          </div>
        </div>

    </div>

   
  )
}
