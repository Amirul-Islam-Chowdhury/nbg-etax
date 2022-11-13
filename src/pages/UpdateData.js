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
  const [name, setName] = useState();
  const [totalTax, settotalTax] = useState("");
  const [taxPaid, settaxPaid] = useState("");
  const [firstPay, setfirstPay] = useState("");
  const [secondPay, setsecondPay] = useState("");
  const [thirdPay, setthirdPay] = useState("");

  const [user, setUser] = useState([]);
  const params = useParams();

  async function updateData() {
    try {
      const dbRef = doc(db, `users`, params.id);

      const userTemp = await updateDoc(dbRef, {
        name: name,
        taxPaid:taxPaid,
        firstPay:firstPay,
        secondPay:secondPay,
        thirdPay:taxPaid,
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

        
          <div className="">
            <h1>UPDATE DATA FORM </h1>
          

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
          <input
            type="number"
            placeholder="First Payment"
            onChange={(event) => {
              setfirstPay(event.target.value);
            }}
          />
          <br></br>
          <input
            type="number"
            placeholder="Second Payment"
            onChange={(event) => {
              setsecondPay(event.target.value);
            }}
          />
          <br></br>
          <input
            type="number"
            placeholder="Third Payment"
            onChange={(event) => {
              setthirdPay(event.target.value);
            }}
          />
          <input
            type="number"
            placeholder="Tax Paid"
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
       
      </Layout>
    </div>
  );
}
