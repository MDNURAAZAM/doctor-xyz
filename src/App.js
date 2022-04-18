import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./HomePage/Header/Header";
import Home from "./HomePage/Home/Home";
import Login from "./Login/Login";
import { Route, Routes } from "react-router-dom";
import Register from "./Register/Register";

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
