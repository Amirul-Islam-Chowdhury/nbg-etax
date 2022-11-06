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
import Layout from "../components/Layout";
import db from "../firebaseCon";

export default function AddUsers() {
  const [newName, setName] = useState("");
  const [house, setHouse] = useState(0);
  const [ward, setWard] = useState(0);
  const [totalTax, settotalTax] = useState(0);
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createNewUser = async () => {
    await addDoc(usersCollectionRef, {
      name: newName,
      house: house,
      ward: ward,
      totalTax: totalTax,
    });
    window.location.reload();
    console.log("success")
    alert(" Data Added")
  };

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const users = await getDocs(collection(db, "users"));
      const usersArray = [];
      users.forEach((doc) => {
        const obj = {
          id: doc.id,
          ...doc.data(),
        };
        usersArray.push(obj);
      });

      setUsers(usersArray);
    } catch (error) {
      console.log(error);
    }
  }
  // useEffect(() => {

  //   getUsers();
  //   async function getUsers(){
  //       const data = await getDocs(usersCollectionRef);

  //       setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  //     };

  // }, []);

  return (
    <Layout>
      <input
        placeholder="Name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <br></br>
      <input
        type="number"
        placeholder="House No"
        onChange={(event) => {
          setHouse(event.target.value);
        }}
      />
      <br></br>

      <input
        type="number"
        placeholder="Ward No"
        onChange={(event) => {
          setWard(event.target.value);
        }}
      />
      <br></br>

      <input
        type="number"
        placeholder="Tax Amount "
        onChange={(event) => {
          settotalTax(event.target.value);
        }}
      />

      <br></br>
      <br></br>

      <button className="login-btn success" onClick={createNewUser}>Sumbit</button>
    </Layout>
  );
}
