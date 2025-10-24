import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const[formdata, setFormData]=useState({
  //     email:"",
  //     password:"",
  // });

  const handleLogin = async (e) => {
    e.preventDefault();

    const payload = {
      email: email,
      password: password,
    };

    try {
      const res = await axios.post("https://reqres.in/api/login", payload, {
        headers: {
          "x-api-key": "reqres-free-v1",
        },
      });

      localStorage.setItem("login", res.data.token);
      console.log("Login successful", res);
    } catch (error) {
      console.log("Login failed");
    }
  };

  return (
    <div>
      {""}
      <form className="p-3">
        <label>Email</label>
        <input
          type="text"
          value={email}
          className="border border-black"
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password</label>
        <input
          type="password"
          value={password}
          className="border border-black"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin} className="bg-amber-700 text-white p-3">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
