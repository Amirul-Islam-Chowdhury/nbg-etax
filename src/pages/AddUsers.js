import { async } from "@firebase/util";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import React from "react";
import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import db from "../firebaseCon";

export default function AddUsers() {
  const [newName, setName] = useState("");
  const [house, setHouse] = useState(0);
  const [ward, setWard] = useState(0);
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createNewUser = async () => {
    await addDoc(usersCollectionRef, {
      name: newName,
      house: house,
      ward: ward,
    });
  };

  const editData = async (id, name, house, ward) => {
    const userDoc = doc(db, "user", id);
    const newField = { name: "", house: "", ward: "" };

    await updateDoc(userDoc, newField);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  return (
    <Layout>
      <h2>List of users</h2>

      <input
        placeholder="Name"
        onChange={(event) => {
          setName(event.target.value);
        }}
      />
      <input
        type="number"
        placeholder="House No"
        onChange={(event) => {
          setHouse(event.target.value);
        }}
      />
      <input
        type="number"
        placeholder="Ward No"
        onChange={(event) => {
          setWard(event.target.value);
        }}
      />
      <button onClick={createNewUser}>Add new user:</button>

    
    
   
            <table class="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Owner</th>
                  <th scope="col">Ward No.</th>
                  <th scope="col">House No.</th>
                </tr>
              </thead>
              <tbody>
                  {users.map((user,index) =>(

                  
                    <tr >

                    <th scope="row">{index+1} </th>
                    <td>{user.name}</td>
                    <td>{user.ward}</td>
                    <td>{user.house}</td>
                    <td>
                      <button>Edit</button>
                    <button>Delete</button>
                    </td>
                    </tr>

          ))}
                    

              
                  
              
                  
              </tbody>
            </table>
        
      
    </Layout>
  );
}
