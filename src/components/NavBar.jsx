import React from "react";
import logo from "../assets/ashishBhusalLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import DownloadCV from "./DownloadCV";

const NavBar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img src={logo} alt="logo" className="mx-2 w-12" />
      </div>
      <div>
        <DownloadCV />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/ashish-bhusal-8361372a0/"
          target="blank"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/ashishbhusal1"
          target="blank"
        >
          <FaGithub />
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
