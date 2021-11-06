import React from "react";
import { Link } from "react-router-dom";
import Search from "../components/Search";

function Navbar({ darkTheme, setDarkTheme }) {
  return (
    <div class="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200 ">
      <div className="flex justify-between items-center space-x-5 w-screen">
        <Link to="/">
          <p className="text-2xl bg-blue-400 font-bold text-white py-1 px-5  rounded-full dark:bg-gray-500 dark:text-gray-900">
            karoSearch 🔎
          </p>
        </Link>
        <button
          className="button"
          onClick={() => setDarkTheme(!darkTheme)}
          className="text-xl text-white bg-black dark:bg-gray-50 dark:text-gray-900 border rounded-full px-2 py-1 hover:shadow-lg"
        >
          {darkTheme ? "Light 💡" : "Dark 🌙"}
        </button>
      </div>
      <Search />
    </div>
  );
}

export default Navbar;
