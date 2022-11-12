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
  }, []);

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
    <h3>
                House No : {user && user.houseNo} 
              </h3>
              <h3>
                House Type : <b>{user && user.houseType} </b>
              </h3>

              <p>'''''''''''''''''''''''''''''''</p>

              <h3>
                Total Tax : <b>{user && user.totalTax} </b> 
              </h3>

             
</div>
   
    <div class="col-sm">
    <h3>
                Owner Name: <b>{user && user.name} </b>
              </h3>


    <h3>
                Phone : <b>{user && user.Phone} </b>
              </h3>
            
           
              
              <h3>
                Ward No. : <b>{user && user.ward} </b>
              </h3>
              
              <h3>
                Paid Tax: <b>{user && user.taxPaid} </b>
              </h3>
             
            
      
    </div>
  </div>


          
              
            
             
          
        </div>
      </Layout>
    </div>
  );
}
export default UserDetails;
