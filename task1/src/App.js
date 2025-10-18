import React from "react";
import Home from "./Home";
import Blogs from "./Blogs";
import Contact from "./Contact";
import Demo2 from "./Demo2";
import Demo3 from "./Demo3";
import File1 from "./File1";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Demo2 />}></Route> */
          <Route path="/home" element={<Home />}></Route>
          <Route path="/blogs" element={<Blogs />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/demo3" element={<Demo3 />}></Route>
          <Route path="/" element={<File1 />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
