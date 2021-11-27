import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

import logo from "../../assets/advancing-justice-logo.png";

export default function Navigation() {
  const [toggle, setToggle] = useState(false);

  // Enable navbar collapse onClick on mobile-sized screen
  const menu = document.getElementById("menu");
  const hide = () => menu.classList.toggle("hidden");

  return (
    <nav className="bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex space-x-7 justify-between">
          <div>
            <a href="#" className="flex items-center py-4 px-2">
              <img src={logo} alt="" width="250" />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4 wide-menu">
            <NavLink
              to="/"
              className="py-4 px-2 text-aajc-darkgrey font-semibold hover:text-black transition duration-300"
            >
              Home
            </NavLink>

            <div class="relative group">
              <button class="py-4 px-2 text-aajc-darkgrey font-semibold hover:text-orange transition duration-300">
                <span>About Us</span>
              </button>
              <div class="absolute z-10 hidden bg-white group-hover:block">
                <div class="px-2 pt-2 pb-4 bg-white shadow-lg rounded-lg w-52 ">
                  <div class="grid grid-cols-1 ">
                    <NavLink
                      to="/aboout-us/atlanta"
                      className="py-4 px-2 text-aajc-darkgrey hover:text-aajc-orange font-semibold transition duration-300"
                    >
                      Atlanta
                    </NavLink>
                    <NavLink
                      to="/aboout-us/chicago"
                      className="py-4 px-2 text-aajc-darkgrey font-semibold hover:text-aajc-orange transition duration-300"
                    >
                      Chicago
                    </NavLink>
                    <NavLink
                      to="/aboout-us/la"
                      className="py-4 px-2 text-aajc-darkgrey font-semibold hover:text-aajc-orange transition duration-300"
                    >
                      Los Angeles
                    </NavLink>
                    <NavLink
                      to="/aboout-us/sanfrancisco"
                      className="py-4 px-2 text-aajc-darkgrey font-semibold hover:text-aajc-orange transition duration-300"
                    >
                      San Francisco
                    </NavLink>
                    <NavLink
                      to="/aboout-us/dc"
                      className="py-4 px-2 text-aajc-darkgrey font-semibold hover:text-aajc-orange transition duration-300"
                    >
                      Washington D.C.
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

            <NavLink
              to="/news"
              className="py-4 px-2 text-aajc-darkgrey font-semibold hover:text-orange transition duration-300"
            >
              News
            </NavLink>
            <NavLink
              to="/events"
              className="py-4 px-2 text-aajc-darkgrey font-semibold hover:text-aajc-orange transition duration-300"
            >
              Events
            </NavLink>
            <NavLink
              to="/donate"
              className="py-4 px-2 text-aajc-darkgrey font-semibold hover:text-aajc-orange transition duration-300"
            >
              Donate
            </NavLink>
          </div>

          <div className="md:hidden flex items-center">
            <button
              className="outline-none mobile-menu-button"
              onClick={() => setToggle((prevState) => !prevState)}
            >
              <svg
                className="w-6 h-6 text-aajc-darkgrey hover:text-black"
                x-show="!showMenu"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile screen navbar */}
      <section
        className={`${!toggle && "hidden"} mobile-menu md:hidden`}
        id="menu"
        onClick={() => hide()}
      >
        <ul>
          <li>
            <NavLink
              to="/"
              className="block text-sm px-2 py-4 text-black hover:bg-black hover:text-white transition duration-300"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about-us"
              className="block text-sm px-2 py-4 text-black hover:bg-black hover:text-white transition duration-300"
            >
              About Us
            </NavLink>
          </li>
          <ul>
            <li>
              <NavLink
                to="/about-us/atlanta"
                className="block text-sm px-2 py-4 text-black hover:bg-black hover:text-white transition duration-300"
              >
                Atlanta
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us/chicago"
                className="block text-sm px-2 py-4 text-black hover:bg-black hover:text-white transition duration-300"
              >
                Chicago
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us/la"
                className="block text-sm px-2 py-4 text-black hover:bg-black hover:text-white transition duration-300"
              >
                Log Angelese
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us/sanfrancisco"
                className="block text-sm px-2 py-4 text-black hover:bg-black hover:text-white transition duration-300"
              >
                San Francisco
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about-us/dc"
                className="block text-sm px-2 py-4 text-black hover:bg-black hover:text-white transition duration-300"
              >
                Washington D.C.
              </NavLink>
            </li>
          </ul>
          <li>
            <NavLink
              to="/news"
              className="block text-sm px-2 py-4 text-black hover:bg-black hover:text-white transition duration-300"
            >
              News
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className="block text-sm px-2 py-4 text-black hover:bg-black hover:text-white transition duration-300"
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donate"
              className="block text-sm px-2 py-4 text-black hover:bg-black hover:text-white transition duration-300"
            >
              Donate
            </NavLink>
          </li>
        </ul>
      </section>
    </nav>
  );
}
