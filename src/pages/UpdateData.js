import { updateDoc, doc } from "firebase/firestore";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import Layout from "../components/Layout";
import db from "../firebaseCon";
import {toast} from "react-toastify"


export default function UpdateData() {
  const [totalTax, settotalTax] = useState("");
  const [taxPaid, settaxPaid] = useState("");
  const [firstPay, setfirstPay] = useState("");
  const [secondPay, setsecondPay] = useState("");
  const [thirdPay, setthirdPay] = useState("");

  const params = useParams();

  const updateData = async()=> {
    try {
      // const dbRef = doc(db, `users`, params.id);

   await updateDoc(doc(db, "users", params.id), {
        taxPaid: taxPaid,
        firstPay: firstPay,
        secondPay: secondPay,
        thirdPay: thirdPay,
        totalTax: totalTax,
      });
      console.log(" check")

      toast.success("Data Updated")
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    updateData();
  },);

  return (
    <div>
      <Layout>
        <div>
          <div class="register_form">
            <h1>Update Tax Data </h1>
            <p> USER ID : {params.id}</p>
            <br></br>

            <label for="text">
              <p>Total Tax</p>
            </label>
            <input
              type="text"
              placeholder="Enter Total Tax"
              onChange={(event) => {
                settotalTax(event.target.value);
              }}
            />
            <label for="text">
              <p>First Payment</p>
            </label>
            <input
              type="text"
              placeholder="Enter First Payment"
              onChange={(event) => {
                setfirstPay(event.target.value);
              }}
            />
            <label for="text">
              <p>Second Payment</p>
            </label>
            <input
              type="text"
              placeholder="Enter Second  Payment"
              onChange={(event) => {
                setsecondPay(event.target.value);
              }}
            />
            <label for="text">
              <p>Third Payment</p>
            </label>
            <input
              type="text"
              placeholder="Enter Third  Payment"
              onChange={(event) => {
                setthirdPay(event.target.value);
              }}
            />
            <label for="number">
              <p>Tax Paid</p>
            </label>
            <input
              type="text"
              placeholder="Enter Amount Tax Paid"
              onChange={(event) => {
                settaxPaid(event.target.value);
              }}
            />
             <button className="sumbit" onClick={updateData}>
            {" "}
            Update{" "}
          </button>
          </div>
         

          <div />

         
        </div>
      </Layout>
    </div>
  );
}
