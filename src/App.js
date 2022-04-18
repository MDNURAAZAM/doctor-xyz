import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./HomePage/Header/Header";
import Home from "./HomePage/Home/Home";

import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound/NotFound";
import Login from "./Login/Login/Login";
import Register from "./Login/Register/Register";

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
