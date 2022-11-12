import React from 'react'
import { Link } from "react-router-dom";
import { getAuth, signOut } from "firebase/auth";
import { BiArrowToLeft } from "react-icons/bi/";







function Header() {


  const loginOut = async () => {
    const auth = getAuth();


    try {

      const result = await signOut(auth).then(()=>{


      })
      // localStorage.setItem("currentuser", JSON.stringify(result));
      console.log("successful")
    } catch (error) {
      console.log(error);

    }
  };
  return (

    

    <div>
      <nav className="navbar navbar-expand-lg ">
      <div className='logo'>
          <img src='logo-nabiganj.jpeg' height="50" width="50" alt='logo'/>


          </div>
        <div className="container">

          <Link className="navbar-brand" to="/">
            Nabiganj Municipal E-tax
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span className="navbar-toggler-icon">
              <FaBars />
            </span> */}
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {/* <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  {user.email.substring(0, user.email.length - 10)}
                </Link>
              </li> */}

<li className="nav-item">
                <Link className="nav-link" to="/" onClick={loginOut}>
                <BiArrowToLeft/> {("Logout")}
                </Link>
              </li>
             

              
              
              
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}



export default Header