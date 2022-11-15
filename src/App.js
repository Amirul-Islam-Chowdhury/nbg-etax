import "./App.css";
import Home from "./pages/Home";
import "./style/header.css";
import "./style/footer.css";
import "./style/content.css";
import "./style/regi.css";
import "./style/banner.css";
import { Routes, Route, BrowserRouter,Navigate } from "react-router-dom";
import Admin from "./pages/Admin";
import Service from "./pages/Service";
import AddUsers from "./pages/AddUsers";
import "bootstrap/dist/css/bootstrap.min.css";
import UserList from "./pages/UserList";
import UserLogin from "./pages/UserLogin";
import UserProfilePage from "./pages/UserProfilePage";
import AdminLoginPage from "./pages/AdminLoginPage";
import RegisterNewUser from "./pages/RegisterNewUser";
import UpdateData from "./pages/UpdateData";
import UserDetails from "./pages/UserDetails";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <ToastContainer />

     
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adminlogin" exact element={<AdminLoginPage />} />
            <Route
              path="/registernewuser"
              exact
              element={<RegisterNewUser />}
            />
            <Route path="/userlogin" element={<UserLogin />} />
            <Route
              path="/admin"
              exact
              element={
         <Admin />
                 
               
              }
            />
            <Route path="/service" element={<Service />} />
            <Route path="/addUsers/" element={<AddUsers />} />
            <Route path="/view/" element={<UserList />} />
            <Route path="/update/:id" exact element={<UpdateData />} />
            <Route path="/userinfopage" exact element= {<UserProfilePage/>}/>
            <Route path="/details/:id" exact element={<UserDetails />} />
            <Route path="/contact" exact element={<Contact />} />
          </Routes>
   
    </div>
  );
}



export default App;

