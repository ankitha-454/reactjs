import React from "react";
import { Link } from "react-router-dom";

function Demo() {
  return (
    <div>
      Choose one
      <div>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </div>
    </div>
  );
}

export default Demo;
