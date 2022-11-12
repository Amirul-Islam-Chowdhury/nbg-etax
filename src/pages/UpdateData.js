import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Layout from "../components/Layout";
import db from "../firebaseCon";

export default function UpdateData() {


  const [name, setName] = useState("");
  const [totalTax, settotalTax] = useState("");
  
 
  const [user, setUser] = useState([]);
  const params = useParams();
   


  async function updateData() {
    try {
      const dbRef = doc(db, `users`,params.id)

      const userTemp = await updateDoc(dbRef, {name: name, totalTax:totalTax})



      setUser(userTemp.data());
      alert("Data Updated")
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    updateData();
  }, []);

  

  return (
    <div>
      
      <Layout>

      <div className="title">

        <h3> Update Tax Data</h3>
      </div>

      <div className="register_form">

      <input
        placeholder="Name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <br></br>
      <input
        type="number"
        placeholder="Total Tax"
        onChange={(event) => {
          settotalTax(event.target.value);
        }}
      />
      <br></br>

      <button className="login-btn success" onClick={updateData}>
              {" "}
              Update{" "}
            </button>
     


      </div>

      
    

    




        
        </Layout>
        </div>
  )
}

