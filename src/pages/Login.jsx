import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
      <div className="bg-white p-8 shadow-md rounded-2xl w-80">
        <h2 className="text-2xl font-semibold mb-4 text-center">Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-3">
          <input className="border p-2 rounded" placeholder="Email" required />
          <input className="border p-2 rounded" placeholder="Password" type="password" required />
          <button className="bg-blue-600 text-white py-2 rounded">Login</button>
        </form>
        <p className="text-sm text-center mt-3">
          Don’t have an account? <Link to="/register" className="text-blue-500">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

