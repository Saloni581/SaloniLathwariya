import React from "react";
import { GrContact } from "react-icons/gr";
import { GrUserExpert } from "react-icons/gr";
import { FaLaptopCode } from "react-icons/fa";
import { GrTechnology } from "react-icons/gr";
import Dropdown from "./Dropdown.jsx";
import { useState } from "react";

const Header = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className="text-sm font-medium border-b-2 h-24 w-full py-8">
      <div className="text-emerald-400 flex justify-around">
        {/* Home */}
        <div>
          <a href="#home" className="text-4xl font-semibold">
            Saloni
          </a>
        </div>
        {/* Tech Stack - Skills */}
        <div className="lg:flex hidden">
          <a href="#tech" className="mx-10 flex justify-evenly">
            <GrTechnology />
            <span className="mx-2">Technologies</span>
          </a>
          {/* Projects */}
          <a href="#projects" className="mx-10 flex justify-evenly">
            <FaLaptopCode />
            <span className="mx-2">Projects</span>
          </a>
          {/* Experience */}
          <a href="#experience" className="mx-10 flex justify-evenly">
            <GrUserExpert />
            <span className="mx-2">Experience</span>
          </a>
          {/* Contact me */}
          <a href="#connect" className="mx-10 flex justify-evenly">
            <GrContact />
            <span className="mx-2">Contact me</span>
          </a>
        </div>
        {/* Dropdown Logic */}
        <div
          className="lg:hidden flex"
          onClick={() => setMenu((prev) => !prev)}
        >
          <img
            className="h-10 w-10"
            alt="svgImg"
            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iNjQiIGhlaWdodD0iNjQiIHZpZXdCb3g9IjAgMCA2NCA2NCIKc3R5bGU9ImZpbGw6I0ZGRkZGRjsiPgo8cGF0aCBkPSJNNyAyOXY1bDUwIDF2LTdMNyAyOXpNNyAxMXY2aDUwdi02SDd6TTcgNDZ2N2w1MC0xdi01TDcgNDZ6Ij48L3BhdGg+Cjwvc3ZnPg=="
          />
        </div>
      </div>
      {menu && <Dropdown />}
    </header>
  );
};

export default Header;
