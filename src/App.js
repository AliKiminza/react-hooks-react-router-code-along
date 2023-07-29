import React from "react";
import {Routes,Route} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import NavBar from "./NavBar";

function App() {
    return(
        <div>
            <NavBar/>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/About" element={<About/>}/>
              <Route path="/Login" element={<Login/>}/>
            </Routes>
        </div>
    )
}

export default App;