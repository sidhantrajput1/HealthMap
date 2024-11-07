import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(input);
    try {
      const res = await axios.post(
        "http://localhost:4000/api/v1/user/signup",
        input,
        {
          headers: {
            "content-Type": "application/json",
          },
          withCredentials: false,
        }
      );
      if (res.data.success) {
        setInput({
          name: "",
          email: "",
          password: "",
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex justify-center items-center min-h-screen bg-emerald-700">
        <div className="w-full max-w-md bg-white shadow-md rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>
          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="mb-4">
              <div className="flex items-center space-x-3">
                <label
                  className="w-24 text-gray-700 text-sm font-bold"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  type="name"
                  id="name"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                  value={input.name}
                  onChange={changeEventHandler}
                  required
                />
              </div>
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <div className="flex items-center space-x-3">
                <label
                  className="w-24 text-gray-700 text-sm font-bold"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                  value={input.email}
                  onChange={changeEventHandler}
                  required
                />
              </div>
            </div>

            {/* Password Input */}
            <div className="mb-6">
              <div className="flex items-center space-x-3">
                <label
                  className="w-24 text-gray-700 text-sm font-bold"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your password"
                  value={input.password}
                  onChange={changeEventHandler}
                  required
                />
              </div>
            </div>

            {/* Sign Up Button */}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
              >
                Sign Up
              </button>
            </div>
            <div className="mt-4 text-center ">
              <p to="/login" className="text-blue-500 ">
                Already have an account?
                <Link to="/select-role/login">
                  <span  className="hover:underline text-black"> Login</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
