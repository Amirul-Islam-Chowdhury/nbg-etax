import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getDoc, doc } from "firebase/firestore";
import db from "../firebaseCon";
import { useParams } from "react-router";

function UserDetails() {
  const [user, setUser] = useState();
  const params = useParams();

  useEffect(() => {
    getData();
  }, );

  async function getData() {
    try {
      const userTemp = await getDoc(doc(db, "users", params.id));

      console.log(userTemp.data());

      setUser(userTemp.data());
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
      <Layout>
        <div className="button-container">
          <p className="title"> User details</p>

          <div class="row">
            <div class="col-sm">
              <p>------ user info --------</p>
              <p> <b>UID:</b> {user && params.id.substring(0, params.id.length - 20)}***</p>

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
              <p>---------- Tax info ----------</p>

              <h4>
                1st payment : <b>{user && user.firstPay} </b>
              </h4>
              <h4>
                2nd payment : <b>{user && user.secondPay} </b>
              </h4>
              <h4>
                3rd payment : <b>{user && user.thirdPay} </b>
              </h4>

              <p>-----------------------------</p>

              <h3>
                Paid Tax: <b>{user && user.taxPaid} </b>
              </h3>

              <h3>
                Total Tax : <b>{user && user.totalTax} </b>
              </h3>
              <p>-----------------------------</p>
              <h5 className="debt"> Debt: {user && (user.totalTax-user.taxPaid)} </h5>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}
export default UserDetails;
