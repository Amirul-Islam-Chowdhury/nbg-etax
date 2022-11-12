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
      <Layout >

      <div className="button-container">
        <h3> User Details</h3>
      </div>

      <div className="center">
        <h3>
          Owner Name: <b>{user && user.name} </b>
        </h3>
        <br></br>
        <h3>
          House No. : <b>{user && user.houseNo} </b>
        </h3>
        <h3>
          House Type : <b>{user && user.houseType} </b>
        </h3>
        <h3>
          Ward No. : <b>{user && user.ward} </b>
        </h3>
        <h3>
          Total Tax : <b>{user && user.totalTax} </b>
        
        </h3>
        <h3>
          Phone : <b>{user && user.Phone} </b>
        
        </h3>
      </div>

      </Layout>
    </div>
  );
}
