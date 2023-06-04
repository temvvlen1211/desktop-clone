import React from "react";
import { Link } from "react-router-dom";

function Button() {
  return (
    <Link to={"/restaurants"}>
      <button className="bg-amber-500 text-white  p-3 rounded-lg font-thin  hover:bg-transparent hover:border-amber-500 border-2 hover:text-amber-500 duration-200 ">
        ORDER NOW
      </button>
    </Link>
  );
}

export default Button;
