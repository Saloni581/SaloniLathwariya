import React from "react";

const Dropdown = () => {
  return (
    <div
      className="bg-white text-base h-40 w-48 z-50 list-none divide-y divide-gray-100 rounded shadow ml-auto md:mr-14"
      id="dropdown"
    >
      <ul className="py-1" aria-labelledby="dropdown">
        <li>
          <a
            href="#tech"
            className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
          >
            Technologies
          </a>
        </li>
        <li>
          <a
            href="#experience"
            className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
          >
            Experience
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#connect"
            className="text-sm hover:bg-gray-100 text-gray-700 block px-4 py-2"
          >
            Contact me
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
