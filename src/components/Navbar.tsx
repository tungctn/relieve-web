import React from "react";
import logo from "../../assets/img/landingPage/ReliveLogo.png";

export default function Navbar() {
  return (
    <nav className="lg:bg-white lg:w-screen lg:h-14 shadow-md lg:px-16 lg:py-3 flex justify-items-center items-center w-full ">
      <h1 className="font-plus font-bold text-sm lg:text-xl mt-2 mb-2">
        <p>Relive. Management System</p>
      </h1>
      <ul className="flex ml-auto pr-5 lg:w-60 justify-between font-plus font-semibold w-84 ">
        <li>
          <p>Home</p>
        </li>
        <li>
          <p>About us</p>
        </li>
        <li>
          <p>Contact us</p>
        </li>
      </ul>
    </nav>
  );
}
