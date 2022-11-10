
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
  import {  Link, useNavigate } from "react-router-dom";


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
    
    getData();
    
    
    
  }, []);

  async function getData(){
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

  

  return (

    <div>

        <Layout>
        <div className="title">

        <h3> UserList</h3>
      </div>

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
                  {users.map((user) =>(

                  
                    <tr >

                    <th scope="row">{user.id} </th>
                    <td>{user.name}</td>
                    <td>{user.ward}</td>
                    <td>{user.house}</td>
                    <td>{user.totalTax}</td>
                    <td>

                      <div>

                      <Link className="btn btn-primary" to= {(`/update/${user.id}`)}>update</Link>
                      <Link className="btn btn-secondary" to= {(`/details/${user.id}`)}>view</Link>


                    <button className=" btn btn-danger"onClick={()=>{handleDelete(user.id)}}>Delete</button>

                      </div>


                    </td>
                    </tr>

          ))}
                    

              
                  
              
                  
              </tbody>
            </table>


        </Layout>
        
        
        </div>
  )
}
