import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./HomePage/Header/Header";
import Home from "./HomePage/Home/Home";

import { Route, Routes } from "react-router-dom";
import NotFound from "./NotFound/NotFound";
import Login from "./Login/Login/Login";
import Register from "./Login/Register/Register";
import CheckOut from "./CheckOut/CheckOut";
import RequireAuth from "./Login/RequireAuth/RequireAuth";
import ForgotPassword from "./Login/ForgotPassword/ForgotPassword";
import Services from "./HomePage/Services/Services";
import Blog from "./Blog/Blog";
import About from "./About/About";

function App() {
  return (
    <div>
      <Header></Header>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/blog" element={<Blog></Blog>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/services" element={<Services></Services>}></Route>
        <Route
          path="/forgotPassword"
          element={<ForgotPassword></ForgotPassword>}
        ></Route>
        <Route
          path="/checkout"
          element={
            <RequireAuth>
              <CheckOut></CheckOut>
            </RequireAuth>
          }
        ></Route>

        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
