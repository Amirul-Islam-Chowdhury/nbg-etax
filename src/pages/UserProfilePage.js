import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

import Layout from "../components/Layout";
import { getDoc, doc } from "firebase/firestore";
import db from "../firebaseCon";
import { useNavigate } from "react-router-dom";



export default function UserProfilePage() {
  const auth = getAuth();
  const [user, setUser] = useState();


  const userId = auth.currentUser.uid





  useEffect(() => {
    getData();
  },[]);

  async function getData() {
    try {
  
      const userData = await getDoc(doc(db, "users", userId));

      setUser(userData.data());
      console.log(userData.data());
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <Layout>
        <div class="container">
          <div class="row">
            <div class="col-sm">User Id :</div>
            <div class="col-sm">User name: </div>
            <div class="col-sm">House NO.:</div>
          </div>
        </div>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Hold Tyoe</th>
              <th scope="col">Ward No.</th>
              <th scope="col">House No.</th>
              <th scope="col">Tax</th>
            </tr>
          </thead>
          <tbody>
            {user && (
              <tr>
                <th scope="row"> </th>
                <td>{user.name}</td>
                <td>{user.ward}</td>
                <td>{user.house}</td>
                <td>{user.totalTax}</td>
              </tr>
            )}
          </tbody>
        </table>

        

     


      </Layout>

      
    </div>
  );
}
