import React, { useState } from "react";

function SignIn({ setType }) {
  // const [type, setType] = useState("signUp");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
  };

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit} action="#">
      <div>
        <label
          for="email"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Your email:
        </label>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
          placeholder="name@company.com"
          required=""
        />
      </div>
      <div>
        <label
          for="password"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Password:
        </label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
          required=""
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="remember"
              aria-describedby="remember"
              type="checkbox"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 "
              required=""
            />
          </div>
          <div className="ml-3 text-sm">
            <label for="remember" className="text-gray-500 ">
              Remember me
            </label>
          </div>
        </div>
        <button className="text-sm font-medium text-primary-600 hover:underline ">
          Forgot password?
        </button>
      </div>
      <button
        type="submit"
        className="w-full text-white bg-primary-600 bg-amber-500 hover:bg-primary-700  focus:outline-none  font-md rounded-lg text-sm px-5 py-2.5 text-center "
      >
        Sign in
      </button>
      <div className="flex justify-between">
        <p className="text-sm font-light text-gray-500 ">
          Don’t have an account yet?
        </p>
        <button
          onClick={() => {
            setType("signUp");
          }}
          className="font-sm text-primary-600 hover:underline "
        >
          Sign up
        </button>
      </div>
    </form>
  );
}
export default SignIn;
