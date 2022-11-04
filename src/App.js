import './App.css';
import Home from './pages/Home';
import "./style/header.css"
import "./style/footer.css"
import "./style/content.css"
import { Routes, Route, Link } from "react-router-dom";
import Tax from './pages/Tax';
import Admin from './pages/Admin';
import Service from './pages/Service';
import AddUsers from './pages/AddUsers';
import { db } from './firebaseCon';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">

    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tax" element={<Tax />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/service" element={<Service />} />
        <Route path="/add" exact element={<AddUsers />} />
        <Route path="/update/:id" element={<Tax />} />
        <Route path="/view/:id" element={<AddUsers />} />


      </Routes>

      
    </div>
  );
}

export default App;
