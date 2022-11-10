import './App.css';
import Home from './pages/Home';
import "./style/header.css"
import "./style/footer.css"
import "./style/content.css"
import "./style/regi.css"
import { Routes, Route, Link } from "react-router-dom";
import Admin from './pages/Admin';
import Service from './pages/Service';
import AddUsers from './pages/AddUsers';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './pages/UserList';
import UserLogin from './pages/UserLogin';
import UserProfilePage from './pages/UserProfilePage';
import AdminLoginPage from './pages/AdminLoginPage';
import RegisterNewUser from './pages/RegisterNewUser';
import UpdateData from './pages/UpdateData';
import UserDetails from './pages/UserDetails';



function App() {
  return (
    <div className="App">

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adminlogin" exact element={<AdminLoginPage />} />
        <Route path="/registernewuser" exact element={<RegisterNewUser />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/service" element={<Service />} />
        <Route path="/addUsers/" element={<AddUsers />} />
        <Route path="/view/" element={<UserList />} />
        <Route path="/update/:id" exact element={<UpdateData />} />
        <Route path="/userinfopage"exact element={<UserProfilePage />} />
        <Route path="/details/:id"exact element={<UserDetails />} />


      </Routes>

      
    </div>
  );
  
}

export default App;
