
import {
    collection,
    getDocs,
    doc,
    deleteDoc
   
  } from "firebase/firestore";
  import React from "react";
  import { useState, useEffect } from "react";
  import Layout from "../components/Layout";
  import db from "../firebaseCon";
  import {  useNavigate } from "react-router-dom";


export default function UserList() {

    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "users");

    const navigate= useNavigate()


    const handleDelete = async (id) => {
        const taskDocRef = doc(db, 'users', id)
        try{
          await deleteDoc(taskDocRef)
          window.location.reload();
          console.log("deleted");
          alert("User Deleted ")
        } catch (err) {
          alert(err)
        }
      }
      

useEffect(() => {
    
    getUsers();
    async function getUsers(){
        const data = await getDocs(usersCollectionRef);
        
        setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      };
      
    
    
  }, []);

  return (

    <div>

        <Layout>
        <h1> UserList</h1>
        <table class="table">
              <thead>
                <tr>
                  <th scope="col">ID</th>
                  <th scope="col">Owner</th>
                  <th scope="col">Ward No.</th>
                  <th scope="col">House No.</th>
                  <th scope="col">Tax</th>
                </tr>
              </thead>
              <tbody>
                  {users.map((user,index) =>(

                  
                    <tr >

                    <th scope="row">{index+1} </th>
                    <td>{user.name}</td>
                    <td>{user.ward}</td>
                    <td>{user.house}</td>
                    <td>{user.totalTax}</td>
                    <td>


                      <button className="btn btn-primary">Edit</button>
                      <button className="btn btn-secondary"onClick={() => navigate(`../userinfopage/${user.id}`)}>view</button>


                    <button className=" btn btn-danger"onClick={()=>{handleDelete(user.id)}}>Delete</button>
                    </td>
                    </tr>

          ))}
                    

              
                  
              
                  
              </tbody>
            </table>


        </Layout>
        
        
        </div>
  )
}
