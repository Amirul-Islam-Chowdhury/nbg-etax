import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import {
  collection,
  setDoc,
  doc,
} from "firebase/firestore";
import db from "../firebaseCon";

// import {  ref, set } from "firebase/database";
// import db from "../firebaseCon";

export default function RegisterNewUser() {
  const [email, setEmail] = useState("");
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [house, setHouse] = useState();
  const [ward, setWard] = useState();
  const [totalTax, settotalTax] = useState();
  const auth = getAuth();

  const register = async () => {
    try {
      const {user} = await createUserWithEmailAndPassword(
        auth,
        email,
        password)

        await setDoc(doc(db, "users", user.uid), { name:name ,house:house,ward:ward,totalTax:totalTax},) 

       
        
        console.log(user.uid)
        alert("user created")
      
      }
    catch (error) {
      console.log(error);
    }
  };
  

  return (
    // <div className="login-parent">
    //   {spinning && (<Indicator/>)}
    //   <div className="row justify-content center">
    //     <div className="col-md-6">
    //       <lottie-player
    //         src="https://assets10.lottiefiles.com/packages/lf20_sgnacf85.json"
    //         background="tranparent"
    //         speed="0.25"
    //         loop
    //         autoplay
    //       ></lottie-player>
    //     </div>

    <div className="col-md-4">
      <h1 className="login-page-head">EestiBikes</h1>
      <div className="login-form">
        <h3> Login </h3>
        <hr />

        <input
          type="name"
          className="form-control"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          className="form-control mt-2"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <input
        type="number"
        placeholder="House No"
        value={house}

        onChange={(event) => {
          setHouse(event.target.value);
        }}
      />
      <br></br>

      <input
        type="number"
        placeholder="Ward No"
        value={ward}

        onChange={(event) => {
          setWard(event.target.value);
        }}
      />
      <br></br>

      <input
        type="number"
        placeholder="Tax Amount "
        value={totalTax}
        onChange={(event) => {
          settotalTax(event.target.value);
        }}
      />


        <button className="login-btn success" onClick={register}>
          {" "}
          Login{" "}
        </button>

      </div>
    </div>
  );
}
