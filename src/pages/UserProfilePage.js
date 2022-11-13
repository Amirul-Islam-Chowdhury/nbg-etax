import React, { useEffect, useState } from "react";
import { getAuth,signOut } from "firebase/auth";

import Layout from "../components/Layout";
import { getDoc, doc } from "firebase/firestore";
import db from "../firebaseCon";
import { Link, useNavigate } from "react-router-dom";



export default function UserProfilePage() {

  const auth = getAuth();
  const [user, setUser] = useState();


  const userId = auth.currentUser.uid
  const navigate = useNavigate();

  const logOut = async () => {


    try {

      const result = await signOut(auth).then(()=>{
        navigate("/")


      })
      // localStorage.setItem("currentuser", JSON.stringify(result));
      console.log("successful")
    } catch (error) {
      console.log(error);

    }
  };





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
    
      <Layout>
      <div className="button-container">
          <p className="title"> User details</p>

          <div class="row">
            <div class="col-sm">
              <p>---------- user info ----------------</p>

              <h4>House No : {user && user.houseNo}</h4>
              <h4>
                Ward No : <b>{user && user.ward} </b>
              </h4>
             
              <h4>
                Owner Name: <b>{user && user.name} </b>
              </h4>
              <h4>
                House Type : <b>{user && user.houseType} </b>
              </h4>

              <h4>
                Phone : <b>{user && user.Phone} </b>
              </h4>

            </div>

            <div class="col-sm">
              <p>---------- Tax info ---------------</p>

              <h4>
                1st payment : <b>{user && user.firstPay} </b>
              </h4>
              <h4>
                2nd payment : <b>{user && user.secondPay} </b>
              </h4>
              <h4>
                3rd payment : <b>{user && user.thirdPay} </b>
              </h4>

              <p>-------------------------------------------------</p>

              <h3>
                Paid Tax: <b>{user && user.taxPaid} </b>
              </h3>

              <h3>
                Total Tax : <b>{user && user.totalTax} </b>
              </h3>
              <p>-------------------------------------------------</p>
              <h5 className="debt"> Debt :</h5>
            </div>
          </div>
          <Link className="btn-danger" onClick={(logOut)}>Log out</Link>


        </div>

      </Layout>
    
  );
}
