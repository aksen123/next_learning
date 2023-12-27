import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Blog from "./Blog";
import Shop from "./Shop";
import Detail from "./Detail";
function App() {

  return (
    <>
    <div className="main-nav">
      <Link to={"/blog"}>Blog</Link>
      <Link to={"/shop"}>Shop</Link>
    </div>
    <Routes>
      <Route path="/blog" element={<Blog />}/>
      <Route path="/shop/*" element={<Shop />}/>
      {/* <Route path="/shop/detail" element={<Detail />}/> */}
    </Routes>
    </>
  );
}

export default App;
