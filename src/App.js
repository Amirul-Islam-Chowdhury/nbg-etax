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



function App() {
  return (
    <div className="App">

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tax" element={<UserLogin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/service" element={<Service />} />
        <Route path="/add" exact element={<AddUsers />} />
        <Route path="/addUsers/" element={<AddUsers />} />
        <Route path="/view/" element={<UserList />} />
        <Route path="/userinfopage/:id" element={<UserProfilePage />} />


      </Routes>

      
    </div>
  );
}

export default App;
