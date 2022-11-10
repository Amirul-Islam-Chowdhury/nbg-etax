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


      console.log(userTemp.data())

      setUser(userTemp.data());
    } catch (error) {
      console.log(error);
    }
  }
  return (




    <div>


        <Layout/>

        <div className='title'>
        
        <h3> User Details</h3>
        {user && user.name}

        </div>


        
    </div>
  )
}
export default UserDetails;