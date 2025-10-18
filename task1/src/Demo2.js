// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./App.css";
// import style from "./Button.module.css";

// function Demo() {
//   hooks
//   const [count, setCount] = useState(0);
//   const handleCountChange = () => {
//     setCount(count + 1);
//   };
//   const handleCountChange1 = () => {
//     setCount(count - 1);
//   };

//   const [color, setColor] = useState("red");
//   const handleColorChange = () => {
//     setColor("blue");
//   };
//     const myStyle = {
//       color: "white",
//       backgroundColor: "red",
//       padding: "10px",
//     };

//   return (
//     <div>
//       <div>{count}</div>
//       <button onClick={handleCountChange}>Click to increment</button>
//       <button onClick={handleCountChange1}>Click to decrement</button>
//     </div>
//     <div className="demo">
//       <div>{color}</div>
//       <button onClick={handleColorChange}>Click to change</button>
//     </div>
//         <>
//           <h1 style={myStyle}>Hello style</h1>
//           <p>Add a little style</p>
//         </>
//         <div className="demo">
//           Choose one
//           <div >
//             <li>
//               <Link to="/home">Home</Link>
//             </li>
//             <li>
//               <Link to="/blogs">Blogs</Link>
//             </li>
//             <li>
//               <Link to="/contact">Contact</Link>
//             </li>
//           </div>
//           <button className={style.button}>Submit</button>
//         </div>
//   );
// }

// export default Demo;
