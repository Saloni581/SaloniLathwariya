import React from "react";

const Footer = () => {
  return (
    // Connect With Me
    <div
      id="connect"
      className="font-mono text-center mt-32 w-full h-96 border-t-2 text-5xl lg:7xl"
    >
      <div>
        {/* Contact */}
        <h1 className="mt-10 text-emerald-400">Contact Me</h1>
      </div>
      <div className="ml-auto text-white text-lg my-5">
        <p>Gmail : salonilathwariya581@gmail.com</p>
      </div>
      <div className="ml-auto text-white text-lg my-5">
        <p>Phone : +91 9927545581</p>
      </div>
      <div>
        {/* Socials */}
        <h1 className="text-emerald-400">Connect With Me</h1>
      </div>
      <div className="ml-auto text-white text-lg my-5">
        <a
          href="https://www.linkedin.com/in/salonilathwariya/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in"
          className="text-2xl underline"
        >
          LinkedIn
        </a>
      </div>
      <div className="ml-auto text-white text-lg my-5">
        <a href="https://github.com/Saloni581" className="text-2xl underline">
          GitHub
        </a>
      </div>
      <a href="#home" className="ml-auto text-white text-sm">
        Back to top
      </a>
      <p className="my-2 text-gray-400 font-mono text-xs">
        Created & Maintained by @salonilathwariya
      </p>
    </div>
  );
};

export default Footer;
