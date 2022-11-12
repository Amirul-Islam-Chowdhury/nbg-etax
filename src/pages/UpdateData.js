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
  const [taxPaid, settaxPaid] = useState("");

  const [user, setUser] = useState([]);
  const params = useParams();

  async function updateData() {
    try {
      const dbRef = doc(db, `users`, params.id);

      const userTemp = await updateDoc(dbRef, {
        name: name,
        taxPaid:taxPaid,
        totalTax: totalTax,
      });

      setUser(userTemp.data());
      alert("Data Updated");
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

        <div>
          <div className="register_form">
            <h1>UPDATE TAX </h1>
          

        <div className="">
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
          <input
            type="number"
            placeholder="Total Paid"
            onChange={(event) => {
              settaxPaid(event.target.value);
            }}
          />
          <br></br>

          <button className="btn btn-success" onClick={updateData}>
            {" "}
            Update{" "}
          </button>
        </div>


          </div>


        </div>
       
      </Layout>
    </div>
  );
}
