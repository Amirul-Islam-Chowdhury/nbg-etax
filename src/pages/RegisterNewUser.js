import React, { useState } from "react";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import {  setDoc, doc } from "firebase/firestore";
import db from "../firebaseCon";
import Layout from "../components/Layout";

// import {  ref, set } from "firebase/database";
// import db from "../firebaseCon";

export default function RegisterNewUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [houseType, setHouseType] = useState("");
  const [ward, setWard] = useState("");
  const [Phone, setPhoneNo] = useState("");
  const auth = getAuth();

  const register = async () => {
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await setDoc(doc(db, "users", user.uid), {
        name: name,
        houseNo: houseNo,
        ward: ward,
        houseType:houseType,
        Phone:Phone

        

      });

      console.log(user.uid);
      alert("user created");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Layout>
      <div>
         

          <div class="register_form">
            <h1>REGISTER USER</h1>

            <label for="name">
              <p>Full Name</p>
            </label>
            <input
              type="text"
              placeholder="Enter user full name"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />

            <label for="name">
              <p>House No.</p>
            </label>
            <input
              type="text"
              placeholder="Enter house Number"
              onChange={(event) => {
                setHouseNo(event.target.value);
              }}
            />

            <label for="name">
              <p>Ward No.</p>
            </label>
            <input
              type="text"
              placeholder="Enter Ward Number"
              onChange={(event) => {
                setWard(event.target.value);
              }}
            />

            <label for="name">
              <p>House Type</p>
            </label>
            <input
              type="text"
              placeholder="Enter House Type"
              onChange={(event) => {
                setHouseType(event.target.value);
              }}
            />

            <label for="uname">
              <p>Email</p>
            </label>
            <input
              type="text"
              placeholder="Enter email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />

            <label for="psw">
              <p>PIN</p>
            </label>
            <input
              type="password"
              placeholder="Set a PIN"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />

            <label for="name">
              <p>Phone No.</p>
            </label>

            <input
              type="text"
              placeholder="Enter Phone Number"
              onChange={(event) => {
                setPhoneNo(event.target.value);
              }}
            />
            <button type="submit" onClick={register}>REGISTER</button>
          </div>
        
      </div>
      </Layout>
    </div>

    // <div className="col-md-4">
    //   <h1 className="login-page-head">EestiBikes</h1>
    //   <div className="login-form">
    //     <h3> Login </h3>
    //     <hr />

    //     <input
    //       type="name"
    //       className="form-control"
    //       placeholder="Name"
    //       value={name}
    //       onChange={(e) => {
    //         setName(e.target.value);
    //       }}
    //     />
    //     <input
    //       type="email"
    //       className="form-control"
    //       placeholder="Email"
    //       value={email}
    //       onChange={(e) => {
    //         setEmail(e.target.value);
    //       }}
    //     />
    //     <input
    //       type="password"
    //       className="form-control mt-2"
    //       placeholder="Password"
    //       value={password}
    //       onChange={(e) => {
    //         setPassword(e.target.value);
    //       }}
    //     />
    //     <input
    //     type="number"
    //     placeholder="House No"
    //     value={house}

    //     onChange={(event) => {
    //       setHouse(event.target.value);
    //     }}
    //   />
    //   <br></br>

    //   <input
    //     type="number"
    //     placeholder="Ward No"
    //     value={ward}

    //     onChange={(event) => {
    //       setWard(event.target.value);
    //     }}
    //   />
    //   <br></br>

    //   <input
    //     type="number"
    //     placeholder="Tax Amount "
    //     value={totalTax}
    //     onChange={(event) => {
    //       settotalTax(event.target.value);
    //     }}
    //   />

    //     <button className="login-btn success" onClick={register}>
    //       {" "}
    //       Login{" "}
    //     </button>

    //   </div>
    // </div>
  );
}
