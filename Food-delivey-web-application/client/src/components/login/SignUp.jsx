import React, { useState } from "react";

function SignUp({ setType }) {
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
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
          onChange={(event) => setEmail(event.target.value)}
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
      <div>
        <label
          for="password"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Repassword:
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

      <button
        type="submit"
        className="w-full text-white bg-primary-600 bg-amber-500 hover:bg-primary-700  focus:outline-none  font-md rounded-lg text-sm px-5 py-2.5 text-center "
      >
        Sign Up
      </button>
      <div className=" text-center">
        <button
          onClick={() => setType("signIn")}
          className="font-sm text-primary-600 hover:underline "
        >
          Sign In
        </button>
      </div>
    </form>
  );
}

export default SignUp;
